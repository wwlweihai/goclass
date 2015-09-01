/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        '$ionicConfigProvider',
        'RestangularProvider',
        config
]);
function config($ionicConfigProvider,RestangularProvider) {

    //样式强制设置
    $ionicConfigProvider.views.transition('platform');
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left').previousTitleText(false);

    //缓存设置
    $ionicConfigProvider.views.maxCache(0);
};
