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
    $urlRouterProvider.otherwise('menu/index');
    $stateProvider
    .state('menu', {
        url: "/menu",
        abstract: true,
        templateUrl: "modules/menu.html"
    })
    .state('menu.index', {
        url: '/index',
        views: {
            'menuContent': {
                templateUrl: 'modules/index/index.html',
                controller:'index'
            }
        }
    })
    .state('menu.category', {
        url: '/category',
        views: {
            'menuContent': {
                templateUrl: 'modules/category/category.html',
                controller:'category'
            }
        }
    })
    .state('menu.subCategory', {
        url: '/subCategory',
        views: {
            'menuContent': {
                templateUrl: 'modules/subCategory/subCategory.html',
                controller:'subCategory'
            }
        }
    })
    .state('menu.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'modules/search/search.html',
                controller:'search'
            }
        }
    })
    .state('menu.teacher', {
        url: '/teacher',
        views: {
            'menuContent': {
                templateUrl: 'modules/teacher/teacher.html'
            }
        }
    })
    ;
};
