var app = angular.module('footprint', []);

app.controller('authController', function($scope){
    $scope.user = {username: '', password: ''};
    $scope.message = '';
  
  
    $scope.login = function(){
      //placeholder until authentication is implemented
      $scope.message = 'Hello  ' + $scope.user.username + ', you have succssfully login'
    };
  
    $scope.register = function(){
      //placeholder until authentication is implemented
      $scope.message = 'Congraduation ' + $scope.user.username+ ', start showing your lift to the world now!';
    };
  });