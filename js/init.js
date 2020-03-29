(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
   // $('.fixed-action-btn').floatingActionButton();
  }); // end of document ready
})(jQuery); // end of jQuery name space

//action button
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
   // direction: 'left',
    hoverEnabled: false
  });
});


//change scroll nav


let navbar = document.querySelector('nav');

document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  if(scrollPosition > 100){
      navbar.classList.add('transparentChange');
      navbar.classList.remove('white');
      //logo.style.color = "white";
  }else{
    
    navbar.classList.add('white');
    navbar.classList.remove('transparentChange');
    //logo.style.color = "black";
  }


})
