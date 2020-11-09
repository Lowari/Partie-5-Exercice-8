const button = document.querySelector('button');
const form = document.querySelector('form');
const main = document.getElementById('main');


button.addEventListener('click', function() {
    var clone = form.cloneNode(true);
    main.appendChild(clone);
})