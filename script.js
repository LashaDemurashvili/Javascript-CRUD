'use strict';

let items = [];
let itemId = 1;

// Function to create a new item
function createItem() {
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');

    // get input values
    const title = titleInput.value;
    const description = descriptionInput.value;

    // check if all important fields are filled
    if (title !== '' && description !== '') {

        // create new item in object, with increment ID
        const newItem = {id: itemId++, title, description};
        // console.log(newItem)

        items.push(newItem);

        alert("New Blog created");

        // call displayItems() function
        displayItems();

        // Clear input fields
        titleInput.value = '';
        descriptionInput.value = '';
    } else {
        alert("Please make sure you fill all fields");
    }
}

// Function to display all items
function displayItems() {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = '';

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';

        const titleElement = document.createElement('p');
        titleElement.innerText = `${item.title} \n`;
        titleElement.setAttribute('class', 'show-title')
        div.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.innerText = `${item.description}`;
        descriptionElement.setAttribute('class', 'show-description')
        div.appendChild(descriptionElement);

        // add new div for buttons
        const buttons_div = document.createElement('div');
        buttons_div.setAttribute('class', 'buttons_div');

        // create delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteItem(item.id);
        deleteButton.setAttribute('class', 'btn-all btn-delete');

        // append delete button to buttons_div div
        buttons_div.appendChild(deleteButton);

        // create edit button
        const updateButton = document.createElement('button');
        updateButton.innerText = 'Update';
        updateButton.onclick = () => updateItem(item.id);
        buttons_div.appendChild(updateButton);
        updateButton.setAttribute("class", "btn-all btn-edit");

        // append buttons div into the item div
        div.appendChild(buttons_div);

        // append new item div into the main container
        itemsContainer.appendChild(div);
    });
}

// Function to delete an item by ID
function deleteItem(id) {
    const confirmed = window.confirm('Are you sure you want to delete?');

    if (confirmed) {
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items.splice(index, 1);
            displayItems();
        }
    }
}

// Function to update an item by ID
function updateItem(id) {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        const title = prompt('Enter the updated title:');
        const description = prompt('Enter the updated description:');

        if (title && description) {
            items[index].title = title;
            items[index].description = description;
            displayItems();
        }
    }
}

