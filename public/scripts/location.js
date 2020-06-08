var arr = ['Africa', 'Americas', 'Asia Pacific', 'Europe', 'Middle East'];
var cont = document.getElementById('location');

// create ul element and set the attributes.
var ul = document.createElement('ul');
ul.setAttribute('style', 'padding: 0; margin: 0;');
ul.setAttribute('id', 'theList');

for (i = 0; i <= arr.length - 1; i++) {
    var li = document.createElement('li');     // create li element.
    li.innerHTML = arr[i];      // assigning text to li using array value.
    li.setAttribute('style', 'display: block; margin: 1.5rem');    // remove the bullets.

    ul.appendChild(li);     // append li to ul.
}

cont.appendChild(ul);       // add list to the container.
