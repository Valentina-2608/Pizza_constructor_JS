/* Script */


let btns_add_ingredients = document.querySelectorAll('.add_ingredient');
for(let i = 0; i < btns_add_ingredients.length; i++){
    btns_add_ingredients[i].addEventListener('click', addAmount);
    btns_add_ingredients[i].addEventListener('click', addNewButton);
    btns_add_ingredients[i].addEventListener('click',addToOrder);
    
}

/* Add ingredient to order */
function addToOrder(event){
    let add_ingredient = event.target;
    let add_ingredient_parent = add_ingredient.parentElement;
    let name = add_ingredient_parent.children[2].innerHTML;
    let price = add_ingredient_parent.children[3].children[2].innerHTML;
    let quantity = 1;
    let order = document.getElementById('order');
    let new_ingredient = document.createElement('div');
    new_ingredient.classList.add('new_ingredient');
    new_ingredient.innerHTML = `<span class="name">${name}</span>
    <span class="quantity">${quantity}</span>
    <span class="price">${price}</span>
    <button class="btn_remove">Remove</button>`
    order.appendChild(new_ingredient);
}


/* Add button remove to block ingredient */

let ingredient = document.querySelector('.ingredient');

function addNewButton(event){
    let add_ingredient = event.target;
    let add_ingredient_parent = add_ingredient.parentElement;
    let btn_delete = document.createElement('input');
    btn_delete.type = 'button';
    btn_delete.value = 'Remove';
    btn_delete.classList.add('btn_delete');
    add_ingredient_parent.appendChild(btn_delete);
    event. target.removeEventListener('click', addNewButton);
}


/* Add count of ingredients */

function addAmount(event){
    let add_ingredient = event.target;
    let add_ingredient_parent = add_ingredient.parentElement;
    let block_amount = add_ingredient_parent.children[0];
    block_amount.style.display = 'block';
    block_amount.innerHTML++;

}