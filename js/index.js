'use strict';

let unanimatedObject = document.querySelector('.unanimated_object');

(
    function animating() {
        unanimatedObject.classList.toggle('animated_object');
        setTimeout(animating, 2800);
    }
)();
