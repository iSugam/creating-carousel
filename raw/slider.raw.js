const carousel = ({
    nextButton, 
    prevButton, 
    sliderItems,
    transition = 0,
    delay = 0,
    autoSlide = true,
    autoSlideDelay = 5
}) => {
    let currentSlide = 0
    const sliderItem = document.querySelectorAll(sliderItems);
    const carouselContainer = sliderItem[0].parentElement
    let slideItem;
    let slideInterval;
    const setLength = Math.round(carouselContainer.offsetWidth / sliderItem[0].offsetWidth);
    const GET_NEXT = () => {
        currentSlide--;
        setTimeout(() => {
            for(let i = 0; i < sliderItem.length; i++) {
                slideItem = sliderItem[i]
                slideItem.style.transition = transition + "ms";
                if(currentSlide < -(sliderItem.length - setLength)) {
                    currentSlide = 0;
                    slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
                }
                slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
            }
        }, delay)
    }
    const GET_PREVIOUS = () => {
        currentSlide++;
        setTimeout(() => {
            for(let i = 0; i < sliderItem.length; i++) {
                slideItem = sliderItem[i];
                slideItem.style.transition = transition + "ms"
                if(currentSlide > 0) {
                    currentSlide = -(sliderItem.length - setLength);
                    slideItem.style.transform = `translateX(${100 * currentSlide}%)`;
                }
                slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
            }
        }, delay)
    }

    document.querySelector(nextButton).addEventListener("click", GET_NEXT);
    document.querySelector(prevButton).addEventListener("click", GET_PREVIOUS);
    const startSlide = () =>  slideInterval = setInterval(GET_NEXT, autoSlideDelay * 1000)
    if (autoSlide === false) return clearInterval(slideInterval)
    if(autoSlide === true) startSlide()
    carouselContainer.addEventListener("mouseenter", () => clearInterval(slideInterval))
    carouselContainer.addEventListener("mouseleave", startSlide)
}
