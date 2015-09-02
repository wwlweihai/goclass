/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        '$stateProvider',
        '$urlRouterProvider',
        routeConfig
]);
function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('index');
    $stateProvider
    .state('index', {
        url: "/index",
        templateUrl: "modules/index/index.html",
        controller:'index'
    })
    .state('lifestyle', {
        url: "/lifestyle",
        templateUrl: "modules/lifestyle/lifestyle.html",
        controller:'lifestyle'
    })
    .state('swimming', {
        url: "/swimming",
        templateUrl: "modules/swimming/swimming.html",
        controller:'swimming'
    })
    .state('search', {
        url: "/search",
        templateUrl: "modules/search/search.html",
        controller:'search'
    })
    .state('detail', {
        url: "/detail",
        templateUrl: "modules/detail/detail.html"
    })
    ;
};
