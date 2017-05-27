//MODULE
//ngResource get the data over the internet
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTING

weatherApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {

            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/forecast', {

            templateUrl: 'views/forecast.html',
            controller: 'ForecastController'
        })
        //Use the $routeParams to use variables directly written into the URL
        .when('/forecast/:days', {

            templateUrl: 'views/forecast.html',
            controller: 'ForecastController'
        })
        .when('/stock', {

            templateUrl: 'views/stock.html',
            controller: 'StockController'
        });
});


//SERVICES

//This service objects and data can be access by any controller(important to add the name of the service in the dependency injection of the controller)

weatherApp.service('dataService', function(){
    //The practice of using a variable to store the 'this' object is useful when declaring functions that are going to be use in other controllers.
    
    var self = this;
    this.city = 'London';
    this.stock = 'GOOG';
    
    
})

//CONTROLLERS

weatherApp.controller('HomeController', ['$scope', 'dataService', function($scope, dataService){
    
    $scope.city =  dataService.city;
    //watch service stays alert of any changes ans updates the binded data.
    $scope.$watch(function(){
        dataService.city = $scope.city;
    })
    
    $scope.stock = dataService.stock;
    
    $scope.$watch(function(){
        dataService.stock = $scope.stock   
    });

}]);

weatherApp.controller('ForecastController', ['$scope', '$resource','$routeParams', 'dataService', function($scope, $resource, $routeParams, dataService){
    
    $scope.city = dataService.city;
    
    //With this you contain the days variable in the URL in the controller scope.
    // JS tirck to a default value   var name = varValue || defaultValue;
    $scope.days = $routeParams.days || '1';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: {method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, appid: '07a434a9195e70d86929d3984b5b8bd5' });
    
    $scope.convertToCelsius = function(degK) {
        
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
    }
    
    
}]);

weatherApp.controller('StockController',['$scope','$resource', 'dataService', function($scope, $resource, dataService){
    
    $scope.stock = dataService.stock;
    
    $scope.stockData = $resource("http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote", { callback: "JSON_CALLBACK"}, {get: {method: "JSONP" }});
    
    $scope.stockResult =  $scope.stockData.get({format: 'json'});
    
    console.log($scope.stockResult);
    
    
}]);

