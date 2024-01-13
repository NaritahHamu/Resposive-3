$(document).ready(function(){


    forward();
})
let counter = 1;

function menuToggle(){
    $("#menu-icon").toggleClass("menu-toggle-icon");
    $("#mobile-menu").toggleClass("menu-toggle-menu");
}

function navSelect(buttonID){
    let id = buttonID

    console.log(id)
    setTimeout(menuToggle, 200)
}

//Banner

  function forward(){
    console.log("Counter "+ counter);
    timeoutId = setTimeout(function(){ 
    document.getElementById('radio' + counter).checked = true
    if(counter >= 3){
      counter = 2;
      backward()
    }else{
      counter++;
      forward();
    }
}, 7000);
  }

  function backward(){
    console.log("Counter "+ counter);
    timeoutId = setTimeout(function(){
      document.getElementById('radio' + counter).checked = true

      if(counter <= 1){
        counter = 2;
        forward()
      }else{
        counter--;
        backward();
      }
    }, 7000);
  }      
  
  function pause() {
    clearTimeout(timeoutId);

    setTimeout(function(){
      forward()
    }, 2000)
  }
