const liArray = document.querySelectorAll('.item');
console.log("Numbers of categories", liArray.length);

liArray.forEach(li => {
    const h2 = li.querySelector('h2');
    console.log("Category: ", h2.textContent);
    const elements = li.querySelectorAll('li');
    console.log("Elements: ", elements.length);

})