'use strict';

let unanimatedObject = document.querySelector('.unanimated_object');

let intermediate = [null, null];
let end = null;

function animation() {

    intermediate[0] = setTimeout(() => {
        unanimatedObject.classList.add('between_state');
    }, 100);

    intermediate[1] = setTimeout(() => {
        unanimatedObject.classList.remove('between_state');
        unanimatedObject.classList.add('animated_object');
    }, 500);

    end = setTimeout( () => {
        unanimatedObject.classList.remove('animated_object');
        clearTimeout(intermediate[0]);
        clearTimeout(intermediate[1]);
    }
    , 900);
}

let repeatAnimation = setInterval(animation, 1500);
