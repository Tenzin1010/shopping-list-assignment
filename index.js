function shoppingList(){
    $("#js-shopping-list-form").submit(function(e){
        e.preventDefault();
        const itemText = $("#shopping-list-entry").val();
        $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${itemText}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>`);
    });
    $('.shopping-item-delete').click(function(event){
        event.preventDefault();
        $(this).closest('li').remove();
    });
    $('.shopping-item-toggle').click(function(event){
        event.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');         
    });

}


$(shoppingList);
