# Custom Library JS
Custom library writen by lessons in Udemy (Advanced JavaScript)

# Actions
.html() - return html value
.html(value) - writes html value on element
.eq() - search and return element index of parent
.index() - search and return element index
.find(selector) - search and return elements by selector
.closest(selector) - search and return closest elements by selector
.siblings() - search and return all siblings without element itself

# Classes
.addClass(classNames) - add all class names to element by array classNames
.removeClass(classNames) - remove all class names to element by array classNames
.toggleClass(className) - toggle class name to element

# Display
.show() - show element
.hide() - hide element
.toggle() - toggle element show/hide

# Handlers
.on(eventName, callback) - add event listener (eventName) to element and add callback when the event is worked "eventName and callback is mandatory arguments"
.off(eventName, callback) - remove event listener (eventName) to element and remove callback when the event is worked "eventName and callback is mandatory arguments"
.click(handler) - add event listener (click) to element and add handler function when the event is worked "handler is not mandatory argument"

# Effects
.fadeIn(duration, display, final) - show element with change element opacity and display, (duration - time, display - display after show element, default - block, final - function which will be fulfilled after animation)
.fadeOut(duration, final) - hide element with change element opacity and display, (duration - time, final - function which will be fulfilled after animation)
.fadeToggle(duration, display, final) - show/hide element with change element opaacity and display, (duration - time, display after show elemen, default - block, final - function which will be fulfilled after animation)