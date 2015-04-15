var archerApp = angular.module('archerApp', []);

archerApp.controller('ArcherController', function() {
  var archer = this;
  archer.video = 1;
  archer.video_name = [
    "White Elephant",
    "A Kiss While Dying",
    "A Debt of Honor",
    "House Call",
    "Southbound and Down",
    "Baby Shower",
    "Smugglers Blues",
    "The Rules of Extraction",
    "On the Carpet",
    "Palace Intrigue - Part 1"
    ];
  this.setVideo = function(active) {
    archer.video = active || 1;
  };
  this.curVideo = function () {
    return archer.video;
  };
});
