
$('.sl').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.centerslide').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  document.querySelector("video").onclick = function(){
    if(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2){
    this.pause();
    this.controls = false;
  }
  else if(this.paused){
    this.play();
  }
}
  