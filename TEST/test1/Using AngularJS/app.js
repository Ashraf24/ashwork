var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {
  $scope.data = null;
  $http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags=london')
    .success(function(res) {
      console.log(res.items);
      $scope.data = res.items;
    })
    .error(function() {
      //handle error
    });
});