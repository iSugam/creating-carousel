let curSlide = 0

// Get Next item
const nextItem = (next, items) => {
    const nextBtn = document.querySelector(next)
    const newItem = document.querySelectorAll(items)

    nextBtn.addEventListener("click", () => {
        curSlide--;

        newItem.forEach((slide) => {
            if(curSlide < -(newItem.length - 1)) {
                curSlide = 0
                slide.style.transform = `translateX(${100 * (curSlide)}%)`;
            }
            slide.style.transform = `translateX(${100 * (curSlide)}%)`;
      });
    })
}

// Get Previous item
const previousItem = (prev, items, width) => {
    const prevBtn = document.querySelector(prev)
    const newItem = document.querySelectorAll(items)

    prevBtn.addEventListener("click", () => {
        curSlide++;

        newItem.forEach((slide) => {

            if(curSlide > 0) {
                curSlide = -(newItem.length - 1)
                slide.style.transform = `translateX(${100 * curSlide}%)`;
            }
            slide.style.transform = `translateX(${100 * (curSlide)}%)`;
      });
    })
}

nextItem(".next", ".item")
previousItem(".prev", ".item")

nextItem(".nextBtn", ".item2")
previousItem(".prevBtn", ".item2")
