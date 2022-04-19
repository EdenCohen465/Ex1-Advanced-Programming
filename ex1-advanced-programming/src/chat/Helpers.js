// the function set the minutes to 2 digits. if the minutes is 0-9 change to 00-09.
function setMin(x) {
    if ((x >=0) && (x<10)) {
        return "0" + x;
    } else {
        return x;
    }
}

// the function return the current date in the format: DD.MM.YY
function getDate() {
    const date = new Date();
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
}

// the function compare between 2 integers.
function sort (a,b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

// the function decide what time we will display of the last message in the chatsBar.
function timeDisplay(time, message_date) {
    let thisTime = new Date();
    var date_splitted = message_date.split('.');
    var time_splitted = time.split(':');

    // if the last message is not in this year or month or more than a day passed, show the date.
    if ((date_splitted[2] != thisTime.getFullYear()) || (date_splitted[1] != (thisTime.getMonth() + 1)) || ((parseInt(thisTime.getDate()) - parseInt(date_splitted[0])) > 1))  {
        return message_date;
    }

    // the last message was sent yesterday.
    if ((parseInt(thisTime.getDate()) - parseInt(date_splitted[0])) == 1) {
        return "yesterday";
    }

    // if it passed more than a hour, return the time.
    if (thisTime.getHours() - time_splitted[0] > 1) {
        return time;
    } // the message was sent in the same hour. if 10 minutes passed, return time, else return number of minutes passed.
     else if (thisTime.getHours() == time_splitted[0]) {
        if ((thisTime.getMinutes() - time_splitted[1]) < 10) {
            return (thisTime.getMinutes() - time_splitted[1]) + " min ago";
        } else {
            return time;
        }
    } // it is not the same hour, if 10 minutes passed, return time, else return number of minutes passed.
    else {
        if ((thisTime.getMinutes() + 60 - time_splitted[1]) < 10) {
            return (thisTime.getMinutes() + 60 - time_splitted[1]) + " min ago";
        } else {
            return time;
        }
    }
}

export default {timeDisplay, sort, getDate, setMin};