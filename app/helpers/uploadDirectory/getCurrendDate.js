/**
* This function returns the currend date (dd-mm-yyyy)
*/
var currendDate = function() {
    var date = new Date();

    // day
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    // month
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    // year
    var yyyy = date.getFullYear();

    // Together
    var currDate = dd + '-' + mm + '-' + yyyy;

    return currDate;
}

module.exports = currendDate;
