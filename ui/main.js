console.log('Loaded!');

// channge the text of the main-text div
var element = document.getElementById('main-text');

element.inerthtml= 'New Value';

// move the image.
var img = document.getElementById('img');
img.onclick = function(){
        img.style.margin.left = '100px';
    
};