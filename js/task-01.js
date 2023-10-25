const parent = document.querySelector('ul#categories');

console.log('Number of categories:', parent.children.length);

const lists = document.querySelectorAll('.item');

for (let i = 0; i < lists.length; i += 1) {
    const h2 = lists[i].firstElementChild.textContent;
    const itemCount = lists[i].lastElementChild.childElementCount;
    console.log('Category:', h2);
    console.log('Elements:', itemCount);
}


