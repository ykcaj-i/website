
// execute myFunction when user scroll
var height = $('header').height();
$(window).on("scroll", function(){
  if($(this).scrollTop() > height){
    $('.topnav').addClass('topnav');
  }else{
    $('.topnav').removeClass('topnav');
  }
});
