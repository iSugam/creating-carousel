// For FIRST carousel
carousel({
    nextButton: ".next", // Next button class name
    prevButton: ".prev", // Previous Button Class Name
    sliderItems: ".item", // class name of Carousel items
    transition: 300, // For CSS transition
    delay: 0, // Default is 0
    itemsToShow: {
        largeDevice: 1, // 1 sliderItems in desktop or large devices
    }
})


// For SECOND Carousel
carousel({
    nextButton: ".nextBtn", // Next button class name
    prevButton: ".prevBtn", // Previous Button Class Name
    sliderItems: ".item2", // class name of Carousel items
    transition: 600, // For CSS transition
    delay: 0, // Default is 0
    itemsToShow: {
        largeDevice: 5, // 5 sliderItems in desktop or large devices
        mediumDevece: 3, // 3 sliderItems in tab or medium devices
        smallDevice: 2 // 2 sliderItems in small or mobile devices
    }
})
