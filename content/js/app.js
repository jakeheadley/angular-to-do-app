// App JS
var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('ninjaController',['$scope',function($scope){
  $scope.ninjas = [
    {
      name: 'Jake',
      belt: 'brown',
      rate: 295.50,
      thumb: './img/fpo.png',
      available: true
    },{
      name: 'Josh',
      belt: 'black',
      rate: 150.50,
      thumb: './img/fpo.png',
      available: true
    },{
      name: 'Jenna',
      belt: 'purple',
      rate: 255.50,
      thumb: './img/fpo.png',
      available: true
    },{
      name: 'Maisie',
      belt: 'pink',
      rate: 123.50,
      thumb: './img/fpo.png',
      available: true
    }
  ]

  $scope.remove = function (ninja) {
    var removeNinjas = $scope.ninjas.indexOf(ninja)
    $scope.ninjas.splice(removeNinjas,1);
  }

  $scope.addNinja = function(ninja) {
    $scope.ninjas.push({
      name: $scope.newNinja.name,
      belt: $scope.newNinja.belt,
      rate: $scope.newNinja.rate,
      available: true
    });
    $scope.newNinja.name='';
    $scope.newNinja.belt='';
    $scope.newNinja.rate='';
  }


}])
