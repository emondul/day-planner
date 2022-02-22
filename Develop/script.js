//current day
var date = moment().format("MMMM Do YYYY");
$('#currentDay').append(date);
//current hour
var currentHour = moment().format("H");
$('#currentHour').append(currentHour);

for(var i = 9; i < 17; i++) {
    var savedValueForHour = localStorage.getItem( "hour-" + i );
};

$('.container').on('click', 'button', function(){
    var saveBtn = $(this).val();
    var description = document.getElementById(saveBtn).value;
    localStorage.setItem(saveBtn, 'description');
});