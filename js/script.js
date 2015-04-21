var app = angular.module("ngDribbble", ['ngResource', 'ngAnimate', 'akoenig.deckgrid', 'ngSanitize', 'ui.bootstrap'])
                  .controller('MainCtrl', function ($scope, dribble) {
                      $scope.showDetails = true;

                      var _onSuccess = function(value){
                        $scope.shots = value.shots;
                      };

                      dribble.query({},_onSuccess);
                  });

app.factory('dribble', ['$resource',
  function ($resource) {
      return $resource('', {'callback': 'JSON_CALLBACK'}, { 
          query: {
              method: 'JSONP',
              url: 'http://api.dribbble.com/shots/popular?page=1'
          }
      });
  }]);