# Custom Library JS
Custom library writen by lessons in Udemy (Advanced JavaScript)

# Actions
* .html() - return html value
* .html(value) - writes html value on element
* .eq() - search and return element index of parent
* .index() - search and return element index
* .find(selector) - search and return elements by selector
* .closest(selector) - search and return closest elements by selector
* .siblings() - search and return all siblings without element itself

# Classes
* .addClass(classNames) - add all class names to element by array classNames
* .removeClass(classNames) - remove all class names to element by array classNames
* .toggleClass(className) - toggle class name to element

# Display
* .show() - show element
* .hide() - hide element
* .toggle() - toggle element show/hide

# Handlers
* .on(eventName, callback) - add event listener (eventName) to element and add callback when the event is worked "eventName and callback is mandatory arguments"
* .off(eventName, callback) - remove event listener (eventName) to element and remove callback when the event is worked "eventName and callback is mandatory arguments"
* .click(handler) - add event listener (click) to element and add handler function when the event is worked "handler is not mandatory argument"
* .getNum(value) - return number (use value.toString().replace(/\D/g, ''))

# Effects
* .fadeIn(duration, display, final) - show element with change element opacity and display, (duration - time, display - display after show element, default - block, final - function which will be fulfilled after animation)
* .fadeOut(duration, final) - hide element with change element opacity and display, (duration - time, final - function which will be fulfilled after animation)
* .fadeToggle(duration, display, final) - show/hide element with change element opaacity and display, (duration - time, display after show elemen, default - block, final - function which will be fulfilled after animation)

# Services
* .get(url, dataTypeAnswer) - get fetch which use url as url, dataTypeAnswer is what you need to return response type (json, blob, text)
* .post(url, data, dataTypeAnswer) - post fetch which use url as url, data - is what you want to send to url, dataTypeAnswer is what you need to return response type (json, blob, text)

# Components
Dropdown menu component
* HTML structure. Important is the same use id and use data-toggle-id attributes
```html
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Action 2</a>
        <a href="#" class="dropdown-item">Action 3</a>
    </div>
</div>
```
Accordion component
* HTML structure
```html
<div class="accordion mt20 block-center">
    <div class="accordion-head">
        <span>Collapse first element</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis aut, necessitatibus vel quas beatae.
        </div>
    </div>
    <div class="accordion-head">
        <span>Collapse second element</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis aut, necessitatibus vel quas beatae.
        </div>
    </div>
</div>
```
```js
func('.accordion-head').accordion();
```
Tab
* HTML structure tabs
```html
<div class="tab mt20 block-center">
    <div class="tab-panel" data-tabpanel>
        <div class="tab-item tab-item--active">Content 1</div>
        <div class="tab-item">Content 2</div>
        <div class="tab-item">Content 3</div>
    </div>
    <div class="tab-content tab-content--active">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, soluta.
        <br> <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sit.
    </div>
    <div class="tab-content">
        Lorem ipsum dolor, sit amet consectetur adipisicing.
        <br> <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates delectus itaque, perferendis autem porro!
    </div>
    <div class="tab-content">
        test
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, repellat?
        <br> <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores ipsam harum reiciendis!
    </div>
</div>
```
```js
func('[data-tabpanel] .tab-item').tab();
```

Carousel
* Html + JS carousel
```html
<div class="carousel" id="carousetExample">
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
            <div class="carousel-item">
                <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" alt="image">
            </div>
            <div class="carousel-item">
                <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg" alt="image">
            </div>
            <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ouUyYxflu1siQsYbchI9kR5XlX4BRI3fnYYLfObfDzxOyJbU6cvAnyTF6A24WuVatoA&usqp=CAU" alt="image">
            </div>
        </div>
        <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">&lt;</span>
        </a>
        <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-next-icon">&gt;</span>
        </a>
    </div>
</div>
```
init js carousel
```js
func('.carousel').carousel();
```