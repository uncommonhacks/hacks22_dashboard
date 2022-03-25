
function update(){
    console.log("lul");
    var current = new Date();
    var cur_hours = current.getUTCHours()-5; //delete +1 later   
    var cur_minutes = current.getUTCMinutes();
    var cur_day = 1;//current.getUTCDate();
    var days = DATA["days"];
    var cur_event = -1;
    var next_event = -1;
    for (const day of days){
        console.log(day);
        if (day['day'] == cur_day) {
            var events = day['events']
            for (const event of events) {
                if ((cur_hours < event['hour']) || 
                    ((cur_hours == event['hour']) && cur_minutes <= event['minutes']))
                {
                    next_event = event;
                    // console.log(event);
                    break;
                    return event;
                }
                else {
                    cur_event = event;
                }
            }
            break;
        }
    }
    if (cur_event != -1) {
        var div1 = document.getElementById('cur_event');
        div1.innerHTML = cur_event['text']
    }
    if (next_event != -1) {
        var div2 = document.getElementById('next_event');
        div2.innerHTML = next_event['text']
    }
    
}

setInterval(update, 2000); 
