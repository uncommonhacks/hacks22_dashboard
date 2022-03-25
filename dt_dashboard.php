<?php

$shows = [
	1 => [
		0 => 'Morning show',
		8 => 'The Breakfast Show',
		10 => 'The Fred and Lucy Hour'
	],
	/*** each day shows array ***/
	5 => [
		0=>'Sunday good show',
		19 => 'The Hymn Hour'
	]
];

$weekday = date('N');
$hour = date('H');
$now_plaing = 'Default show';


$tz = 'CST';
$timestamp = time();
$dt = new DateTime("now", new DateTimeZone($tz)); //first argument "must" be a string
$dt->setTimestamp($timestamp); //adjust the object to correct timestamp

printf("day: %s\n",$dt->format('w'));
printf("hour: %s\n",$dt->format('H'));
$hour=$dt->format('H');
$weekday=$dt->format('w');

printf("day: %s\n",$weekday);
printf("hour: %s\n",$hour);

foreach($shows[$weekday] as $h=>$show) {
	if ($h <= $hour) $now_plaing = $show;
}
printf("day:%s\n", $weekday);
printf("hour:%s\n", $hour);

printf("Now Playing: %s", $now_plaing);
