
// Creating the carousel function
const carousel = ({
    nextButton, 
    prevButton, 
    sliderItems,
    transition = 0,
    delay = 0,
    autoSlide = true,
    autoSlideDelay = 5
}) => {

    // Deault currentNumber is 0
    let currentSlide = 0

    // Get the items from document to slide
    const sliderItem = document.querySelectorAll(sliderItems);

    let slideItem;

    /* 
        Dividing the sliderItem width by its parent element width to check how many sliderItems are 
        showing in one carousel and if it's greater than 1 then substract the number with sliderItem.length. 
        So, if the last sliderItem is already in view, then it will return to the first sliderItem.
        Compare the FIRST slider with SECOND Slider to actually get the result.
    */
    const setLength = Math.round(sliderItem[0].parentElement.offsetWidth / sliderItem[0].offsetWidth);

    // Function for next sliderItem
    const GET_NEXT = () => {
        currentSlide--;

        setTimeout(() => {
            // Looping through all the items to get the next Item
            for(let i = 0; i < sliderItem.length; i++) {
                slideItem = sliderItem[i]
    
                // custon transition for sliders
                slideItem.style.transition = transition + "ms";
                      
                /* 
                    If the currentSlide number is less than the length 
                    of sliderItem.length - 1 in negative 
                    (for example: lets say length of sliderItem is 10, so 10 - 1 = 9, 
                    with each click it will decreace in negative fron 0 to -9)
                    then set it to 0 which willbe the first item of the sliderItem
                */

                if(currentSlide < -(sliderItem.length - setLength)) {
                    currentSlide = 0; // Set it to 0 if it's less than the length of sliderItem in negative (-9 is less than -8) 
                    slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
                }
                slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
            }
        }, delay)
    }

    // Function for next sliderItem
    const GET_PREVIOUS = () => {
        currentSlide++;

        setTimeout(() => {
            // Looping through all the items to get the previous Item
            for(let i = 0; i < sliderItem.length; i++) {
                slideItem = sliderItem[i];

                // custon transition for sliders
                slideItem.style.transition = transition + "ms"
    
                /* 
                    If the currentSlide number is greater than 0
                    then change the currentNumber to the sliderItem.length - 1 in negative
                    (for example: lets say the length of sliderItem is 10, so 10-1 = 9, 
                    after turning to negative it's -9 and with each click it will increase from -9 to 0)
                    then set it to -9 which is the last item of sliderItem
                */
                if(currentSlide > 0) {
                    currentSlide = -(sliderItem.length - setLength); // Substract the length with setLength to check if the item reached the last item
                    slideItem.style.transform = `translateX(${100 * currentSlide}%)`;
                }
                slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
            }
        }, delay)

    }

    // Get the next Button
    const nextBtn = document.querySelector(nextButton);
    nextBtn.addEventListener("click", () => {
        GET_NEXT();
    });

    // Get the previous Button
    const prevBtn = document.querySelector(prevButton);
    prevBtn.addEventListener("click", () => {
        GET_PREVIOUS();
    });

    setInterval(GET_NEXT, autoSlideDelay * 1000)
}
