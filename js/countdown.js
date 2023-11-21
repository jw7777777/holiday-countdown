
/* Copyright (c) 2022 jw7777777, license MIT */

// event driven DOM onload event
function daysUntil() {

    var startDate = moment()
    var endDate = moment("26.12.2023", "DD.MM.YYYY");
    var days = endDate.diff(startDate, 'days');

    document.getElementById("daysToXmas").innerText = days;
    document.getElementById("daysToXmas").textContent = days;

};

daysUntil();
