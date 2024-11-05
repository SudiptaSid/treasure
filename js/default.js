// Date Picker
$(".datepicker").datepicker();
// Sidebar
$("#cs_menu").click(function(){
    $("#cs_sidebar").addClass("view");
});
$("#cs_close").click(function(){
    $("#cs_sidebar").removeClass("view");
});