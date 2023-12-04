var myButton = document.getElementById("myButton");
var logo = document.getElementById("logo");
var fullScreenMenu = document.getElementById("fullScreenMenu");
var backButton = document.querySelectorAll('.back-btn');
var animationInProgress = false;

if(myButton && logo && fullScreenMenu) {
  myButton.addEventListener("mousedown", function() {
    logo.style.transform = "scale(1.2)";
  });

  myButton.addEventListener("mouseup", function() {
    logo.style.transform = "scale(1)";
  });

  myButton.addEventListener("touchstart", function() {
    logo.style.transform = "scale(1.2)";
  });

  myButton.addEventListener("touchend", function() {
    logo.style.transform = "scale(1)";
  });

  myButton.addEventListener("click", function() {
    if (animationInProgress) {
      return;
    }
    animationInProgress = true;
    if (fullScreenMenu.style.display === "none") {
      fullScreenMenu.style.display = "block";
      anime({
        targets: fullScreenMenu,
        width: ['0%', '100%'],
        height: ['0%', '100%'],
        borderRadius: ['50%', '0%'],
        easing: 'easeInOutQuad',
        duration: 500,
        complete: function() {
          animationInProgress = false;
        }
      });
    } else {
      anime({
        targets: fullScreenMenu,
        width: ['100%', '0%'],
        height: ['100%', '0%'],
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad',
        duration: 500,
        complete: function() {
          fullScreenMenu.style.display = "none";
          animationInProgress = false;
        }
      });
    }
  });
}

if(backButton && fullScreenMenu) {
  backButton.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (animationInProgress) {
        return;
      }
      animationInProgress = true;
      var parentMenu = this.parentNode;
      anime({
        targets: parentMenu,
        width: ['100%', '0%'],
        height: ['100%', '0%'],
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad',
        duration: 500,
        complete: function() {
          parentMenu.style.display = "none";
          animationInProgress = false;
        }
      });
    });
  });
}

document.getElementById('map-overlay').addEventListener('click', function() {
  var mapFullScreenMenu = document.getElementById("mapFullScreenMenu");
  if (animationInProgress) {
    return;
  }
  animationInProgress = true;
  if (mapFullScreenMenu.style.display === "none") {
    mapFullScreenMenu.style.display = "block";
    anime({
      targets: mapFullScreenMenu,
      width: ['0%', '100%'],
        height: ['0%', '100%'],
        borderRadius: ['50%', '0%'],
        easing: 'easeInOutQuad',
        duration: 500,
        complete: function() {
          animationInProgress = false;
        }
    });
  } else {
    anime({
      targets: mapFullScreenMenu,
      width: ['100%', '0%'],
      height: ['100%', '0%'],
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad',
      duration: 500,
      complete: function() {
        mapFullScreenMenu.style.display = "none";
        animationInProgress = false;
      }
    });
  }
});