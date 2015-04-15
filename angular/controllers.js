var angularApp = angular.module('devApp', []);

angularApp.controller('HomeController', ['$http', function($http) {
  this.name="";
  this.word="";
  this.description="";
  this.url="";
  this.DoiItems = [];
  this.urls = [];

  var home = this;
  $http.get('/doi/doi_items.json').success(
    function(dois) {
      home.DoiItems = dois.doi;
      home.urls = dois.urls;
    });

  this.submit = function() {
    //console.log("I'm doing something...");
    home.DoiItems.push({"id":home.DoiItems.length, "doi_gen_id":"Redacted",
      "name_doi":home.name, "description":home.description});
    home.urls.push(home.url);
    $http.post('http://www.michaelasawyer.com:3000/doi_items',
      {"authenticity_token":
      "M7sAmeGjEqy6DvCPy/LtVvrlOd4Ai3JDwkOmIC3n8ow=",
      "doi_item":{"name_doi":home.name, "description":home.description,
      "url":home.url}}).
      success(function(data) {
        
      });
    home.name="";
    home.description="";
    home.url="";
  }
}]);


