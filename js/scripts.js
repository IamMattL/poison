function getDate() {
    var today = document.getElementById('today');

    var d = new Date();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var n = "<strong>" + weekday[d.getDay()] + "</strong>, " + english_ordinal_suffix(d) + " " + month[d.getMonth()] + " " + d.getFullYear();

    today.innerHTML = n;
}

getDate();


function english_ordinal_suffix(d) {
    return d.getDate() + (d.getDate() % 10 == 1 && d.getDate() != 11 ? 'st' : (d.getDate() % 10 == 2 && d.getDate() != 12 ? 'nd' : (d.getDate() % 10 == 3 && d.getDate() != 13 ? 'rd' : 'th')));
}