'use strict';

let unanimatedObject = document.querySelector('.unanimated_object');

let intermediate = [null, null];
let end = null;

function animation() {
    clearTimeout(end);
    
    intermediate[0] = setTimeout(() => {
        unanimatedObject.classList.add('between_state');
    }, 1000);

    intermediate[1] = setTimeout(() => {
        unanimatedObject.classList.remove('between_state');
        unanimatedObject.classList.add('animated_object');
    }, 2000);

    end = setTimeout( () => {
        unanimatedObject.classList.remove('animated_object');
        clearTimeout(intermediate[0]);
        clearTimeout(intermediate[1]);
    }
    , 4000);
}

animation();
let repeatAnimation = setInterval(animation, 7100);
