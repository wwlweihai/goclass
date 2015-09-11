angular.module('app.controller')
    .controller('subCategory',subCategory);
subCategory.$inject = [
    'Restangular',
    '$ionicPopover',
    '$scope'
];
function subCategory(Restangular,$ionicPopover,$scope) {
    $scope.moreSubCate = moreSubCate;



    $ionicPopover.fromTemplateUrl('moreSubCate.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.moreSubCatePopover = popover;
    });
    $scope.openMoreSubCatePopover = function($event) {
        $scope.moreSubCatePopover.show($event);
    };
    $scope.closeMoreSubCatePopover = function() {
        $scope.moreSubCatePopover.hide();
    };

    function moreSubCate($event){
        $scope.moreSubCatePopover.show($event);
    }
}


