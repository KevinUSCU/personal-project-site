var wrap = $("#wrap");
console.log(wrap);
wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 0) {
    wrap.addClass("title-fixed");
    console.log("more!");
  } else {
    wrap.removeClass("title-fixed");
    console.log("less!");
  }
  
});