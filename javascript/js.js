$(document).ready(function(){  
  loadPage("/pages/services.html")

  $("#main-wrapper").on('click', '[id*="btn-service"]', function () {

    let condition =  $(this).attr("id");
    let firstPart = condition.split(" ")[0];
  
    console.log(firstPart);

    switch (firstPart) {
        case 'BCS':
        console.log('Building Control');
        // Do something for Case 1
        break;
  
        case 'FMS':
        console.log('Facility Managment');
        // Do something for Case 2
        break;
  
        case 'FTTH':
        console.log('FTTH / WAN / LAN');
        // Do something for Case 3
        break;
  
        case 'LPS':
        console.log('Lighting Protection');
        // Do something for Case 3
        break;
  
        case 'TLC':
        console.log('Tele communication');
        // Do something for Case 3
        break;
  
        default:
        console.log('Default Case');
        // Do something for the default case
  };
  });

})

function menuToggle(){
    $("#menu-icon").toggleClass("menu-toggle-icon");
    $("#mobile-menu").toggleClass("menu-toggle-menu");
}

function loadPage(page) {
  $("#content").load(page);

  $("#menu-icon").removeClass("menu-toggle-icon");
  $("#mobile-menu").removeClass("menu-toggle-menu");
}


