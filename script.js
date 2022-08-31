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
    let name_order = add_ingredient_parent.children[2].innerHTML;
    let price_order = add_ingredient_parent.children[3].children[2].innerHTML;
    let quantity_order = 1;
    let order = document.getElementById('order');
    let new_ingredient = document.createElement('div');
    new_ingredient.classList.add('new_ingredient');
    new_ingredient.innerHTML = `<span class="name">${name_order}</span>
    <span class="quantity">${quantity_order}</span>
    <span class="price">${price_order}</span>
    <button class="btn_remove">Remove</button>`
    order.appendChild(new_ingredient);


    /* Remove block new_ingredient from block order */
   let btns_remove = document.querySelectorAll('.btn_remove');
   for(let i = 0; i < btns_remove.length; i++){
        btns_remove[i].addEventListener('click', removeIgredient);
   }
   function removeIgredient(event){
        let btn_remove = event.target;
        let btn_remove_parent = btn_remove.parentElement;
        btn_remove_parent.remove();
   }
  
}


/* Add button remove to block ingredient */

let ingredient = document.querySelector('.ingredient');


function addNewButton(event){
    let add_ingredient = event.target;
    let add_ingredient_parent = add_ingredient.parentElement;
    let btn_delete = add_ingredient_parent.children[5];
    btn_delete.style.display = 'block';


    /* Delete btn_delete from block ingredient */

    let btns_delete = document.querySelectorAll('.btn_delete');
    for(let i = 0; i < btns_delete.length; i++){
        btns_delete[i].addEventListener('click', deleteFromBlockIngredient);
        btns_delete[i].addEventListener('click', deleteFromBlockOrder);
    }


    function deleteFromBlockIngredient(event){
    let btn_delete = event.target;
    btn_delete.style.display = 'none';
    let btn_delete_parent = btn_delete.parentElement;
    let block_amount = btn_delete_parent.children[0];
    block_amount.innerHTML = 0;
    block_amount.style.display = 'none';
    }

    
    /* Delete new_ingredient from order using button in block ingredient */

    function deleteFromBlockOrder(event){
        let btn_delete = event.target;
        let btn_delete_parent = btn_delete.parentElement;
        let name = btn_delete_parent.children[2].innerHTML;
        let new_ingredients = document.querySelectorAll('.new_ingredient');
        for(let i = 0; i< new_ingredients.length; i++){
        if (new_ingredients[i].children[0].innerHTML === name){
            new_ingredients[i].parentElement.removeChild(new_ingredients[i]);
        }
    }
}

}


/* Add count of ingredients */

function addAmount(event){
    let add_ingredient = event.target;
    let add_ingredient_parent = add_ingredient.parentElement;
    let block_amount = add_ingredient_parent.children[0];
    block_amount.style.display = 'block';
    block_amount.innerHTML++;

}