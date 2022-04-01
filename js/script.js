var DEBUG = false;

function time_format(hour, minute){
    var am_pm;
    if (hour > 12 &  hour < 24) {
        am_pm = 'pm';
        hour = hour-12;
    }
    else if (hour == 24 | hour == 0) {
        am_pm = 'am';
        hour = 12
    }
    else {
        am_pm = 'am';
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    var time_string = hour + ':' + minute + ' ' + am_pm;
    return time_string
}


function update(){
    // //console.log("lul");
    var current = new Date();
    var cur_hours = current.getUTCHours()-5; //going to CDT
    var cur_minutes = current.getUTCMinutes();
    var cur_day = current.getUTCDate(); // for testing make this 1 or 2 or 3 // day of month
    // case where UTC goes into different day
    if (cur_hours < 0) {
        cur_hours = cur_hours + 24;
        cur_day = cur_day - 1;
    }
    if (DEBUG) {
        cur_hours = 22;
        cur_minutes = 5;
        cur_day = 3;
    }
    var days = DATA["days"];
    //console.log(days);
    var cur_event = -1;
    var next_event = -1;
    for (const day of days){
        //console.log(day['day']);
        //console.log(cur_day);
        if (day['day'] == cur_day) {
            var events = day['events']
            for (const event of events) {
                //console.log("h");
                if ((cur_hours < event['hour']) || 
                    ((cur_hours == event['hour']) && cur_minutes <= event['minute']))
                {
                    //console.log("poop");
                    next_event = event;
                    // //console.log(event);
                    break;
                }
                else {
                    cur_event = event;
                    next_event = {"hour":24,"minute":0, "location":"", "text":"More Coming Tomorrow..."};
                }
            }
            break;
        }
    }
    if (cur_event != -1) {
        var div1 = document.getElementById('cur_event');
        div1.innerHTML = cur_event['text'];
        var div2 = document.getElementById('cur_event_time');
        var hour = cur_event['hour'];

        var minute = cur_event['minute'];

        var time_string = time_format(hour, minute);
        div2.innerHTML = time_string;

        document.getElementById('cur_event_location').innerHTML = cur_event['location'];
    }
    if (next_event != -1) {
        var div1 = document.getElementById('next_event');
        div1.innerHTML = next_event['text'];
        var div2 = document.getElementById('next_event_time');
        var hour = next_event['hour'];

        var minute = next_event['minute'];
        var time_string = time_format(hour, minute);
        div2.innerHTML = time_string;
        document.getElementById('next_event_location').innerHTML = next_event['location'];
    }
    //console.log("h");
    var div = document.getElementById('current_time');
    div.innerHTML = time_format(cur_hours, cur_minutes);
    
}

setInterval(update, 2000); 
