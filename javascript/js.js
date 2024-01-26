$(document).ready(function(){  
  loadPage("/pages/home.html");

  $("#main-wrapper").on('click', '[id*="btn-service"]', function () {

    let condition =  $(this).attr("id");
    let firstPart = condition.split(" ")[0];

    servicesSelect(firstPart);
    serviceTabActive(this);
      
  });

  $("#main-wrapper").on('click', '[id*="read-more"]', function(){
    let x = $(this).attr("id");
    let y = x.split(" ")[1];

    function toggleServiceActive(x){
      console.log(x);
      $(".active").removeClass("active");
      $("." + x).addClass("active");
    }

    let contentLoadPromise = new Promise(function(resolve, reject) {
        $("#content").load("/pages/services.html", function(response, status, xhr) {
            if (status == "success") {
                resolve();
            } else {
                reject("Error loading content");
            }
        });
    });

    contentLoadPromise.then(function() {
        servicesSelect(y);
        toggleServiceActive(y);
    }).catch(function(error) {
        console.error(error);
    });
  });

});

function servicesSelect(data){

  let servicesTitle = $("<h3></h3>").addClass("services-title")


  if ($(".services-title").length > 0) {
  } else {
    $(".services-nav-wrapper").after(servicesTitle);
  }

  switch (data) {
      case 'BCS':
        $(".services-title").text("Building Control System");
        $("#servicesText").text("BCS BCS BCS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
        
        serviceTabActive(data);
        break;

      case 'FMS':
        $(".services-title").text("Facility Managment System");
        $("#servicesText").text("FMS FMS FMS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        
        serviceTabActive(data);
        break;

      case 'FTTH':
        $(".services-title").text("FTTH / WAN / LAN  Systems");
        $("#servicesText").text("FTTH FTTH FTHH Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        
        serviceTabActive(data);
        break;

      case 'LPS':
        $(".services-title").text("Lighting Protection Systems");
        $("#servicesText").text("LPS LPS LPS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
        
        serviceTabActive(data);
        break;

      case 'TLC':
        $(".services-title").text("Telecommunication Mobile & Fixed");
        $("#servicesText").text("TLC TLC TLC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")

        serviceTabActive(data);
        break;

      default:
      console.log('Default Case');
  };
}
function menuToggle(){
    $("#menu-icon").toggleClass("menu-toggle-icon");
    $("#mobile-menu").toggleClass("menu-toggle-menu");
}
function loadPage(page) {
  $("#content").load(page);

  $("#menu-icon").removeClass("menu-toggle-icon");
  $("#mobile-menu").removeClass("menu-toggle-menu");

  loadBanner(page);
}
function serviceTabActive(x){
  console.log(x);
  $(".active").removeClass("active");
  $(x).addClass("active");
}
function loadBanner(page) {
  return new Promise(function(resolve, reject) {
    if (page == "/pages/home.html") {
      // Simulate asynchronous loading of the dynamic content
      setTimeout(function() {
        resolve($("Resolved"));
        animateBanner();
        
      }, 0); // Adjust the delay based on your actual loading time
    } else {
      reject("Page is not home.html");
    }
  });
}

function animateBanner(){
  setTimeout(function(){
    $("#bc_two").css("z-index", "1");
    $("#bc_one").css("transform", "translateX(-50%)");
    $("#bc_two").css("transform", "translateX(50%)");
  }, 5000);
  setTimeout(function(){
    $("#bc_one").css("transform", "translateX(-100%)");
    $("#bc_two").css("transform", "translateX(0%)");
  }, 10000);
  setTimeout(function(){
    $("#bc_one").css("transform", "translateX(50%)");
    $("#bc_two").css("transform", "translateX(-50%)");
    reset("one");
  }, 15000);
  setTimeout(function(){
    $("#bc_one").css("z-index", "1");
    $("#bc_one").css("transform", "translateX(50%)");
    $("#bc_two").css("transform", "translateX(-50%)");
  }, 20000);
  setTimeout(function(){
    $("#bc_one").css("transform", "translateX(0%)");
    $("#bc_two").css("transform", "translateX(-100%)");
  }, 25000);
  setTimeout(function(){
    animateBanner();
    reset("two");
  }, 26000);
}

function reset(banner){
  $("#bc_"+banner).css("transform", "translateX(50%)");
  $("#bc_"+banner).css("z-index", "-1");
}