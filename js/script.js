window.onload = function() {
  $(backToTop).hide();
};
// Window load function

var backToTop = document.getElementById("back-top-icon");

window.onscroll = function() {
  navbarScroll();

  var scorlling = $(this).scrollTop();

  if(scorlling > 100) {
    $(backToTop).fadeIn(500);
  } else {
    $(backToTop).fadeOut(500);
  }
};
// Window scroll function

function navbarScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "8px 0";
    document.getElementById("logo").style.width = "80px";
  } else {
    document.getElementById("navbar").style.padding = "12px 0";
    document.getElementById("logo").style.width = "120px";
  }
};
// Shrink navbar function

function navigationScroll() {
  var scrollLink = $('.scroll-link');

  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 300);
  });
};

navigationScroll();
// MenuList navigation Function

function backTopFunction() {
  $(backToTop).click(function(){
    $('html,body').animate({
      scrollTop : 0
    }, 300)
  });
}

backTopFunction();
// BackToTop function

function myToolTip() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

  var empty = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  });
};

myToolTip();
// Tool Tip Function

