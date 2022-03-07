$(document).ready(function () {
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

    // need to the button click to save an entry 
$('.saveBtn').on('click', function() {
var entry = $(this).siblings('.description').val()
var block = $(this).parent().attr('id');
localStorage.setItem(block, entry);
    });
function colorChanges() {
// get military time from moment 
var momentTime = moment().hours();
$('.time-block').each(function() {
    var blockTime = parseInt($(this).attr('id').split('-')[1]) 

    if(blockTime<momentTime) {
        $(this).addClass('past')
    } else if (blockTime === momentTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }

})

}
colorChanges();
// interval refresh so that colors update throughout day
var refresh = setInterval(colorChanges, 15000)

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


})