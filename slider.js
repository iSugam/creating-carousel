let curSlide = 0

const carousel = ({
    nextButton, 
    prevButton, 
    SliderItems, 
    transition = 0,
    delay = 0, 
}) => {

    // Get the items from document to slide
    const newItem = document.querySelectorAll(SliderItems);

    let slideItem;
    // Get the next Button
    const nextBtn = document.querySelector(nextButton)
    nextBtn.addEventListener("click", () => {
        curSlide--;

        setTimeout(() => {
            for(let i = 0; i < newItem.length; i++) {
                slideItem = newItem[i]
    
                // custon transition for sliders
                slideItem.style.cssText = `
                    transition: ${transition}ms;
                `       
                console.log(slideItem.style);
                if(curSlide < -(newItem.length - 1)) {
                    curSlide = 0
                    slideItem.style.transform = `translateX(${100 * (curSlide)}%)`;
                }
                slideItem.style.transform = `translateX(${100 * (curSlide)}%)`;
            }
        }, delay)

    })

    // Get the previous Button
    const prevBtn = document.querySelector(prevButton)
    prevBtn.addEventListener("click", () => {

        curSlide++;

        setTimeout(() => {

            for(let i = 0; i < newItem.length; i++) {
                slideItem = newItem[i];

                // custon transition for sliders
                slideItem.style.transition = transition + "ms"
    
                if(curSlide > 0) {
                    curSlide = -(newItem.length - 1)
                    slideItem.style.transform = `translateX(${100 * curSlide}%)`;
                }
                slideItem.style.transform = `translateX(${100 * (curSlide)}%)`;
            }
        }, delay)

    })

}
