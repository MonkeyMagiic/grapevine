<?php
echo file_get_contents("https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20eurofx%20WHERE%20currency=%22" . $_GET['ccy'] . "%22%20AND%20TIME_PERIOD%20%3E%20%22" . $_GET['datestamp'] . "%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=");