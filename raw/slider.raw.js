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

    let slideItem;
    let slideInterval;
    const setLength = Math.round(sliderItem[0].parentElement.offsetWidth / sliderItem[0].offsetWidth);

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

    document.querySelector(nextButton).addEventListener("click",GET_NEXT)
    document.querySelector(prevButton).addEventListener("click", GET_PREVIOUS)

    const startSlide = () => {slideInterval = setInterval(GET_NEXT, autoSlideDelay * 1000)}
    if(autoSlide === true) {startSlide()}
    sliderItem[0].parentElement.addEventListener("mouseenter", () => {clearInterval(slideInterval)})
    sliderItem[0].parentElement.addEventListener("mouseleave", startSlide)
}
