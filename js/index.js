'use strict';

let unanimatedObject = document.querySelector('.unanimated_object');
unanimatedObject.classList.add('animated_object');

(
    function animating() {
        unanimatedObject.classList.toggle('animated_object');
        setTimeout(animating, 3100);
    }
)();
