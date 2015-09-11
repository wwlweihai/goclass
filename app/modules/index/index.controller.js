angular.module('app.controller')
    .controller('index',index);
index.$inject = [
    '$ionicPopover',
    '$ionicSideMenuDelegate',
    '$scope'
];
function index($ionicPopover,$ionicSideMenuDelegate,$scope) {
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleRight();
    };

    $ionicPopover.fromTemplateUrl('lgSetPopover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.lgSetPopover = popover;
    });
    $scope.openLgSetPopover = function($event) {
        $scope.lgSetPopover.show($event);
    };
    $scope.closeLgSetPopover = function() {
        $scope.lgSetPopover.hide();
    };
}


