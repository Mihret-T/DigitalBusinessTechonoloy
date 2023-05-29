let images = ['bg-img1.jpg', 'bg-img2.jpg', 'bg-img3.jpg', 'bg-img4.jpg', 'bg-img5.jpg'];
let slideIndex = 0;
$(document).ready(function () {
    showSlides();
});

function showSlides() {
    const slider = document.getElementsByClassName("slider")[0];
    let url = './imgs/';
    imgUrl = url + images[slideIndex];
    //slider.style.backgroundImage = "url('./imgs/bg-img3.jpg')";
    slider.style.backgroundImage = "url(" + imgUrl + ")";
    slideIndex++;
    if (slideIndex >= images.length - 1) { slideIndex = 0 }
    setTimeout(showSlides, 5000);
}

function showSlide(index) {
    this.slideIndex = index;
    this.showSlides();
}


