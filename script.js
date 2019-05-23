 var petitionvotes = 162000;
 var votes = 59000;
 var votecounter = petitionvotes.length;
 
$(".school").click(function(){
   $("h2").hide();
   $(".school").hide();
   $(".schoolq1").fadeToggle();
   $(".yesschoolq1").fadeToggle();
   $(".noschoolq1").fadeToggle();
});
$(".yesschoolq1").click(function(){
    $(".schoolq1").hide();
    $(".yesschoolq1").hide();
    $(".noschoolq1").hide();
    $(".schoolq2").fadeToggle();
    $(".yesschoolq2").fadeToggle();
    $(".noschoolq2").fadeToggle();
});
$(".noschoolq1").click(function(){
    $(".schoolq1").hide();
    $(".yesschoolq1").hide();
    $(".noschoolq1").hide();
    $(".schoolq2").fadeToggle();
    $(".yesschoolq2").fadeToggle();
    $(".noschoolq2").fadeToggle();
});
$(".yesschoolq2").click(function(){
    $(".schoolq2").hide();
    $(".yesschoolq2").hide();
    $(".noschoolq2").hide();
    $(".h333").show();
    //var petition
});
$(".noschoolq2").click(function(){
    $(".schoolq2").hide();
    $(".yesschoolq2").hide();
    $(".noschoolq2").hide();
    $(".h33").show();
    
});
