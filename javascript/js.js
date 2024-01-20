$(document).ready(function(){  
  loadPage("/pages/services.html")

  $("#main-wrapper").on('click', '[id*="btn-service"]', function () {

    let condition =  $(this).attr("id");
    let firstPart = condition.split(" ")[0];

    let servicesTitle = $("<h3></h3>").addClass("services-title")

    if ($(".services-title").length > 0) {
      console.log("Title Block exists");
    } else {
      $(".services-nav-wrapper").after(servicesTitle);
    }
  
    switch (firstPart) {
        case 'BCS':
          $(".services-title").text("Building Control System");
          $("#servicesText").text("BCS BCS BCS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
          
          $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
          $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
          $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
          $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
          
          $(".active").removeClass("active");
          $(this).addClass("active");
          break;
  
        case 'FMS':
          $(".services-title").text("Facility Managment System");
          $("#servicesText").text("FMS FMS FMS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        
          $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
          $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
          $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
          $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
          
          $(".active").removeClass("active");
          $(this).addClass("active");
          break;
  
        case 'FTTH':
          $(".services-title").text("FTTH / WAN / LAN  Systems");
          $("#servicesText").text("FTTH FTTH FTHH Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        
          $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
          $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
          $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
          $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
          
          $(".active").removeClass("active");
          $(this).addClass("active");
          break;
  
        case 'LPS':
          $(".services-title").text("Lighting Protection Systems");
          $("#servicesText").text("LPS LPS LPS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        
          $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
          $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
          $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
          $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
          
          $(".active").removeClass("active");
          $(this).addClass("active");
          break;
  
        case 'TLC':
          $(".services-title").text("Telecommunication Mobile & Fixed");
          $("#servicesText").text("TLC TLC TLC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        
          $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
          $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
          $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
          $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")

          $(".active").removeClass("active");
          $(this).addClass("active");
          break;
  
        default:
        console.log('Default Case');
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

function serviceSelectedBtn(x){
  $(".active").removeClass("active");
  $("#BCS").addClass("active");
  console.log(x);
}

