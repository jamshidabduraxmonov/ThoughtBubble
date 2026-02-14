let bubbleList = JSON.parse(localStorage.getItem('bubbles')) || [];


const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const content = document.getElementById('content');


addBtn.addEventListener('click', () => {
    const data = {
        content: input.value,
        id: Date.now()
    }

    if(input.value.trim() === ''){
        alert('Input can not be empty!');
        return;
    }
    bubbleList.push(data);
    localStorage.setItem('bubbles', JSON.stringify(bubbleList));
    display();

    input.value = '';
});




function display() {

    if(bubbleList.length === 0) {
        content.innerHTML = `<h3>Start typing to create thought bubbles!</h3>`
        return;
    };



    const result = bubbleList.map( (item) => {

        return `
            <h3 class="item" data-id="${item.id}">${item.content}</h3>
        `;
    });

    content.innerHTML = result.join('');
}

content.addEventListener('click', (e) => {
    if(e.target.classList.contains('item')){
        const index = bubbleList.findIndex( item => item.id === Number(e.target.dataset.id));
        bubbleList.splice(index, 1);

        localStorage.setItem('bubbles', JSON.stringify(bubbleList));
        display();
    }
});

display();


document.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        addBtn.click();
    }
});


