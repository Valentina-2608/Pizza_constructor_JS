/* Script */


function load(){
    



    let btns_add_ingredients = document.querySelectorAll('.add_ingredient');
    for(let i = 0; i < btns_add_ingredients.length; i++){
        btns_add_ingredients[i].addEventListener('click', addAmount);
        btns_add_ingredients[i].addEventListener('click', addNewButton);
        btns_add_ingredients[i].addEventListener('click', addToOrder);
        btns_add_ingredients[i].addEventListener('click', grandTotal);
        btns_add_ingredients[i].addEventListener('click', grandWeight);
      
    }
    
    /* Add ingredient to order */
    function addToOrder(event){
        let add_ingredient = event.target;
        let add_ingredient_parent = add_ingredient.parentElement;
        let name_order = add_ingredient_parent.children[2].innerHTML;
        let price_order = add_ingredient_parent.children[3].children[2].innerHTML;
        let weight_order = add_ingredient_parent.children[3].children[0].innerHTML;
        let quantity_order = 1;
        let order = document.getElementById('order');
        let new_ingredient = document.createElement('div');
        new_ingredient.classList.add('new_ingredient');
        new_ingredient.innerHTML = `<span class="name">${name_order}</span>
        <span class="quantity">${quantity_order}</span>
        <span class="weight">${weight_order}</span>
        <span class="price">${price_order}</span>
        <button class="btn_remove">Remove</button>`
        order.appendChild(new_ingredient);
    
        
     
        let pizza_images = JSON.parse(images);
        let image_ingredients = document.querySelector('.image_ingredients');
        for(let elem of pizza_images){
             if (elem.name === name_order){
                    let img_ing = document.createElement('img');
                    img_ing.src=elem.img;
                    img_ing.alt = elem.name;
                    image_ingredients.appendChild(img_ing);
                    img_ing.style.visibility = 'visible';
                }
        }
    
        
       let btns_remove = document.querySelectorAll('.btn_remove');
       for(let i = 0; i < btns_remove.length; i++){
            btns_remove[i].addEventListener('click', removeFromOrder);
            btns_remove[i].addEventListener('click', removeFromIngredient);
       }
       /* Remove block new_ingredient from block order */
       function removeFromOrder(event){
            let btn_remove = event.target;
            let btn_remove_parent = btn_remove.parentElement;
            btn_remove_parent.remove();
            let name_order = btn_remove_parent.children[0].innerHTML;
            let image_ingredients = document.querySelector('.image_ingredients');
            let img_ingredients = document.querySelectorAll('.image_ingredients img');
            for(let i = 0; i< img_ingredients.length; i++){
                if(name_order === img_ingredients[i].alt){
                    image_ingredients.removeChild(img_ingredients[i]);  
            } 
        }
            grandTotal();
            grandWeight();
       }
    
       /* Hide block_amount and button Remove from block ingredient */
      function removeFromIngredient(event){
            let btn_remove = event.target;
            let btn_remove_parent = btn_remove.parentElement;
            let name_order = btn_remove_parent.children[0].innerHTML;
            let ingredients_block = document.querySelectorAll('.ingredient');
            for(let i = 0; i < ingredients_block.length; i++){
                if (ingredients_block[i].children[2].innerHTML === name_order){
                    ingredients_block[i].children[0].style.display = 'none';
                    ingredients_block[i].children[0].innerHTML = 0;
                    ingredients_block[i].children[5].style.display = 'none';
                }
            }
           
            grandTotal();
            grandWeight();

       }
    
      
       
    }
    
    /* Count sum of all ingredients in block order */
    
    function grandTotal(){
        let pizza_sum= document.querySelector('.pizza_sum');
        let price_counts = document.querySelectorAll('.price');
        let sum = 0;
        for (let i = 0; i < price_counts.length; i++){
            let price_string = price_counts[i].innerHTML;
            price_number = +price_string.substring(0, price_string.length-3);
            sum+=price_number;
        }
        pizza_sum.innerHTML = sum + 'UAH';
      
    }
    
    function grandWeight(){
        let pizza_weight= document.querySelector('.pizza_weight');
        let weight_counts = document.querySelectorAll('.weight');
        let weight = 0;
        for (let i = 0; i < weight_counts.length; i++){
            let weight_string = weight_counts[i].innerHTML;
            weight_number = +weight_string.substring(0, weight_string.length-2);
            weight+=weight_number;
        }
        pizza_weight.innerHTML = weight + 'gr';
      
    }
    
    
    /* Add button remove to block ingredient */
    

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
    
         /* Hide btn_delete  and block_amount from block ingredient, delete image from
         block image_ingredients */

        function deleteFromBlockIngredient(event){
        let btn_delete = event.target;
        btn_delete.style.display = 'none';
        let btn_delete_parent = btn_delete.parentElement;
        let block_amount = btn_delete_parent.children[0];
        block_amount.innerHTML = 0;
        block_amount.style.display = 'none';
        let name_ingredient = btn_delete_parent.children[2].innerHTML;
        let image_ingredients = document.querySelector('.image_ingredients');
        let img_ingredients = document.querySelectorAll('.image_ingredients img');
        for(let i = 0; i< img_ingredients.length; i++){
            if(name_ingredient === img_ingredients[i].alt){
                image_ingredients.removeChild(img_ingredients[i]);  
            }  
        }
    
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
            grandTotal();
            grandWeight();
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
    
    let add_to_cart = document.getElementById('add_to_cart');
    add_to_cart.addEventListener('click', addToCart);
    function addToCart(){
        let cart_price = document.getElementById('cart_price');
        let pizza_sum = document.querySelector('.pizza_sum');
        cart_price.innerHTML = pizza_sum.innerHTML;
        let new_ingredients = document.querySelectorAll('.new_ingredient');
        for (let elem of new_ingredients){
             elem.parentElement.removeChild(elem);

        }

        let img_ingredients = document.querySelectorAll('.image_ingredients img');
        for(let elem of img_ingredients){
                elem.parentElement.removeChild(elem);
            }  

            let ingredients_block = document.querySelectorAll('.ingredient');
            for(let i = 0; i < ingredients_block.length; i++){
                    ingredients_block[i].children[0].style.display = 'none';
                    ingredients_block[i].children[0].innerHTML = 0;
                    ingredients_block[i].children[5].style.display = 'none';
                }
            
        }
    }
    

   



  