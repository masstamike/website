var homeApp = angular.module('homeApp', []);

homeApp.controller('HomePageController', ['$interval', function($interval) {
  cont = this;
  this.active=1;
//  var move = $interval(moveActive, 8000, 5);
  this.isSelected = function(selected) {
    return active===selected;
  };
  this.setActive = function(activate) {
    this.active = activate || 1;
//    $interval.cancel(move);
  };

}]);

function moveActive() {
    cont.active += 1;
    if (cont.active == 6) {
      cont.active = 1;
    }
    console.log("Ran moveActive()");
}

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 1,
    itemsDesktop: [1199,1],
    itemsDesktopSmall: [979,1]
  });
});