function slideStuff(slider){

    var $slider   = slider.querySelector(".slider");
    var $track    = slider.querySelector(".track");
    var $slides   = slider.querySelectorAll(".slide");
    var $dots     = slider.querySelectorAll(".dot");
      
    var index;
    var $activeSlide;
    var $video;
    var $copy      
    var $activeCopy
        

    function goToSlide(){

        index = Array.prototype.slice.call(this.parentElement.children).indexOf(this);

        for (i = 0; i < $dots.length; ++i) {
          $dots[i].classList.remove("dot-active");
        } 
        this.classList.add("dot-active");

        activeSlide($slides[index]);

    }
    function activeSlide(elem){

        for (i = 0; i < $slides.length; ++i) {
            $slides[i].classList.remove("slide-active");
        }
        elem.classList.add("slide-active");

    }
    function beforeSlide(){

        $video = $track.getElementsByTagName("video");
        if( $video.length ){
            for (i = 0; i < $video.length; ++i) {
                $video[i].pause();
            } 
        }    

    }
    function afterSlide(){

        $activeSlide = $slider.querySelector(".slide-active");
        $video = $activeSlide.getElementsByTagName("video");
        if( $video.length ){
            $video[0].play();
        }
    }
    
    
    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }


    for (i = 0; i < $dots.length; ++i) {

      $dots[i].addEventListener("click", goToSlide, false);
      
    }
    $track.addEventListener('transitionend', afterSlide, false);
    $track.addEventListener('transitionstart', beforeSlide, false);


}