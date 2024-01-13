$(document).ready(function(){
})

function menuToggle(){
    $("#menu-icon").toggleClass("menu-toggle-icon");
    $("#mobile-menu").toggleClass("menu-toggle-menu");
}

function navSelect(buttonID){
    let id = buttonID

    console.log(id)
    setTimeout(menuToggle, 200)
}