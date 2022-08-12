# Making my own carousel
## Note - I am still working on it to make it more efficient.
Trying to create my own carousel library for my future uses 

### Codes for using

```javascript
carousel({
    nextButton: ".next", // Class or Id selector of the Next button (Make sure to put . or #, and unique name for each class and id)
    prevButton: ".prev", // Class or Id selector of the Previous button (Make sure to put . or #, and unique name for each class and id)
    sliderItems: ".item", // class name of Carousel items
    transition: 300, // For CSS transition in miliseconds
    autoSlide: false, // // Stop the carousel from moving aotomatically (Default is true)
    autoSlideDelay: 5, // Set delay on auto slide items - Default is 5 (in seconds)
    delay: 0 // If delay is not needed then just remove it. By default it's 0.
})
```

#### Use .stretch class for hover effects on carousel images
```html
<div class="carousel-item-container stretch"> <!-- 👈 Use Stretch class here -->
        <div class="item">
          <img src="./images/1.jpg" alt="">
        </div>

        <div class="item">
          <img src="./images/2.jpg" alt="">
        </div>

        <div class="item">
          <img src="./images/3.jpg" alt="">
        </div>
</div>
```

Visit the link below 👇 to check (Not completed yet)
- Check it Live: [Live Site](https://isugam.github.io/creating-carousel/)