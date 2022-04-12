function setMin(x) {
    if ((x >=0) && (x<10)) {
        return "0" + x;
    } else {
        return x;
    }
}

function getDate() {
    const date = new Date();
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
}

function sort (a,b) {
    a = parseInt(a);
    b = parseInt(b);
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

function timeDisplay(time, message_date) {

    var date_splitted = message_date.split('.');
    var time_splitted = time.split(':');
    const date = new Date();

    // if the last message is not in this year or month or more than a day passed, show the date.
    if ((date_splitted[2] != date.getFullYear()) || (date_splitted[1] != (date.getMonth() + 1)) || ((parseInt(date.getDate()) - parseInt(date_splitted[0])) > 1))  {
        return message_date;
    }

    // the last message was sent yesterday.
    if ((parseInt(date.getDate()) - parseInt(date_splitted[0])) == 1) {
        return "yesterday";
    }

    // if it passed more than a hour, return the time.
    if (date.getHours() - time_splitted[1] > 1) {
        return time;
    }
    // if passed more than 10 min, return the time.
    if (((date.getMinutes() - time_splitted[1]) > 10) || ((date.getMinutes() - time_splitted[1]) < -10)) {
        return time;
    }

    // return the minutes passed.
    return Math.abs(date.getMinutes() - time_splitted[1]) + " min ago";
}


export default {timeDisplay, sort, getDate, setMin};