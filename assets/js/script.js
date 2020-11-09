const button = document.querySelector('button');
const form = document.querySelector('form');
const main = document.getElementById('main');
var clone = form.cloneNode(true);


button.addEventListener('click', function() {
    clone;
    main.appendChild(clone);
})


