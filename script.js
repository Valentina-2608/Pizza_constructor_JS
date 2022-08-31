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
    }


    function deleteFromBlockIngredient(event){
    let btn_delete = event.target;
    btn_delete.style.display = 'none';
    let btn_delete_parent = btn_delete.parentElement;
    let block_amount = btn_delete_parent.children[0];
    block_amount.innerHTML = 0;
    block_amount.style.display = 'none';
    }

    

}


