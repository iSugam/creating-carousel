const carousel = ({
    nextButton, 
    prevButton, 
    sliderItems,
    transition = 0,
    delay = 0, 
}) => {

    // Deault currentNumber is 0
    let currentSlide = 0

    // Get the items from document to slide
    const sliderItem = document.querySelectorAll(sliderItems);

    let slideItem;
    // Get the next Button
    const nextBtn = document.querySelector(nextButton)

    nextBtn.addEventListener("click", () => {
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
                    (for example: lets say length of sliderItem is 10, so 10-1 = 9, 
                    with each click it will decreace in negative fron 0 to -9)
                    then set it to 0 which willbe the first item of the sliderItem
                */

                if(currentSlide < -(sliderItem.length - 1)) {
                    currentSlide = 0; // Set it to 0 if it's less than the length of sliderItem in negative (-9 is less than -8) 
                    slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
                }
                slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
            }
        }, delay)

    })

    // Get the previous Button
    const prevBtn = document.querySelector(prevButton)

    /* 
        Adding click event to the previous button
        to change the carousel item to previous item 
    */
    prevBtn.addEventListener("click", () => {
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
                    currentSlide = -(sliderItem.length - 1); // Set it to -9 if it's greater than 0
                    slideItem.style.transform = `translateX(${100 * currentSlide}%)`;
                }
                slideItem.style.transform = `translateX(${100 * (currentSlide)}%)`;
            }
        }, delay)

    })

}
