/// <reference path="jquery.d.ts" />
/// <reference path="d3.d.ts" />
var USE_PHP_PROXY = false;
var DataBlob = (function () {
    function DataBlob() {
    }
    return DataBlob;
})();
$(function () {
    $(".timerange").click(function () {
        $(".timerange").removeClass("selected");
        $(this).addClass("selected");
    });
    $("#go").click(function () {
        $("#ccy").removeClass("error");
        $("#graph").empty();
        $("#loader").show();
        $.ajax({
            url: buildQuery(),
            success: function (data) {
                $("#loader").hide();
                if (data.query.results)
                    renderGraph(data.query.results.Obs);
                else
                    $("#ccy").addClass("error");
            },
            error: function (data) {
                $("#loader").hide();
                $("#ccy").addClass("error");
            },
            dataType: 'json'
        });
    });
});
function buildQuery() {
    var timerange = $(".timerange.selected").text();
    var date = new Date();
    if (timerange == "1m")
        date.setMonth(date.getMonth() - 1);
    else if (timerange == "3m")
        date.setMonth(date.getMonth() - 3);
    else if (timerange == "6m")
        date.setMonth(date.getMonth() - 6);
    else if (timerange == "1y")
        date.setMonth(date.getMonth() - 12);
    else if (timerange == "2y")
        date.setMonth(date.getMonth() - 24);
    else if (timerange == "5y")
        date.setMonth(date.getMonth() - 60);
    var format = function (v) {
        return v < 10 ? "0" + v : v;
    };
    var ccy = $("#ccy").val().toLowerCase().replace(/[^a-z]+/g, "").replace("eur", "");
    var datestamp = encodeURIComponent(date.getFullYear() + "-" + format(date.getMonth()) + "-" + format(date.getDate()));
    if (USE_PHP_PROXY)
        return "proxy.php?ccy=" + ccy + "&datestamp=" + datestamp;
    else
        return "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20eurofx%20WHERE%20currency=%22" + ccy + "%22%20AND%20TIME_PERIOD%20%3E%20%22" + datestamp + "%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
}
function renderGraph(data) {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 };
    var width = $("#graph").width() - margin.left - margin.right;
    var height = $("#graph").height() - margin.top - margin.bottom;
    var parseDate = d3.time.format("%Y-%m-%d").parse;
    var x = d3.time.scale().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);
    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left");
    var line = d3.svg.line().x(function (d) {
        return x(parseDate(d.TIME_PERIOD));
    }).y(function (d) {
        return y(parseFloat(d.OBS_VALUE));
    });
    var svg = d3.select("#graph").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    x.domain(d3.extent(data, function (d) {
        return parseDate(d.TIME_PERIOD);
    }));
    y.domain(d3.extent(data, function (d) {
        return parseFloat(d.OBS_VALUE);
    }));
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("EUR (€)");
    svg.append("path").datum(data).attr("class", "line").attr("d", line);
}
//# sourceMappingURL=main.js.map