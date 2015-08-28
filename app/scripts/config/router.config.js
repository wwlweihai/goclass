/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        '$stateProvider',
        '$urlRouterProvider',
        config
]);
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('index');
    $stateProvider
    .state('index', {
        url: "/index",
        templateUrl: "modules/index/index.html",
        controller:'index'
    })
    ;
};
