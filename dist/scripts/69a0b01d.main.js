function config(a,b){a.views.transition("platform"),a.tabs.position("bottom"),a.backButton.text("").icon("ion-ios-arrow-left").previousTitleText(!1),a.views.maxCache(0)}function routeConfig(a,b){b.otherwise("index"),a.state("index",{url:"/index",templateUrl:"modules/index/index.html",controller:"index"})}function index(a,b,c){}angular.module("app",["app.core","app.value","app.config","app.directive","app.controller"]),angular.module("app.core",["ionic.rating","restangular"]),angular.module("app.value",[]),angular.module("app.config",["ionic","app.value"]),angular.module("app.controller",[]),angular.module("app.directive",[]),angular.module("app.config").config(["$ionicConfigProvider","RestangularProvider",config]),angular.module("app.config").config(["$stateProvider","$urlRouterProvider",routeConfig]),angular.module("app.controller").controller("index",index),index.$inject=["Restangular","$state","$scope"];