$(document).ready(function(){  
  loadPage("/pages/services.html")

  $("#main-wrapper").on('click', '[id*="btn-service"]', function () {

    let condition =  $(this).attr("id");
    let firstPart = condition.split(" ")[0];

    

    servicesSelect(firstPart);
    active(this);
      
  });

  $("#main-wrapper").on('click', '[id*="read-more"]', function(){
    let x = $(this).attr("id");
    let y = x.split(" ")[1];

    function toggleActive2(x){
      console.log(x);
      $(".active").removeClass("active");
      $("." + x).addClass("active");
    }

    // Wrap the asynchronous operation in a promise
    let contentLoadPromise = new Promise(function(resolve, reject) {
        $("#content").load("/pages/services.html", function(response, status, xhr) {
            if (status == "success") {
                resolve();
            } else {
                reject("Error loading content");
            }
        });
    });

    // After content is loaded, call servicesSelect
    contentLoadPromise.then(function() {
        servicesSelect(y);
        toggleActive2(y);
    }).catch(function(error) {
        console.error(error);
    });
  });

});

function servicesSelect(data){

  let servicesTitle = $("<h3></h3>").addClass("services-title")

  let class2 = data;

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
        
        active(data);
        break;

      case 'FMS':
        $(".services-title").text("Facility Managment System");
        $("#servicesText").text("FMS FMS FMS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        
        active(data);
        break;

      case 'FTTH':
        $(".services-title").text("FTTH / WAN / LAN  Systems");
        $("#servicesText").text("FTTH FTTH FTHH Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        
        active(data);
        break;

      case 'LPS':
        $(".services-title").text("Lighting Protection Systems");
        $("#servicesText").text("LPS LPS LPS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")
        
        active(data);
        break;

      case 'TLC':
        $(".services-title").text("Telecommunication Mobile & Fixed");
        $("#servicesText").text("TLC TLC TLC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
      
        $(".services-img:nth-child(1)").css("background-image","url('/images/gallery/home-gallery/solar-panels.png')")
        $(".services-img:nth-child(2)").css("background-image","url('/images/gallery/home-gallery/mobile-antenna.png')")
        $(".services-img:nth-child(3)").css("background-image","url('/images/gallery/home-gallery/go-cabling.png')")
        $(".services-img:nth-child(4)").css("background-image","url('/images/gallery/home-gallery/IMG_1708.jpg')")

        active(data);
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
}

function active(x){
  console.log(x);
  $(".active").removeClass("active");
  $(x).addClass("active");
}
