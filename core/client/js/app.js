var app = angular.module('eCommerce', ['ui.router']);

app.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('auth', {
            url: '/auth',
            controller: 'AuthCtrl',
            templateUrl: '/../views/login/authView.html'
        })
        .state('home', {
            url: '/',
            controller: 'AuthCtrl',
            templateUrl: '/../views/home/homeView.html'
        })
        .state('shop', {
            url: '/shop',
            controller: 'AuthCtrl',
            templateUrl: '/../views/shop/shopView.html'
        })
        .state('cart', {
            url: '/cart',
            controller: 'AuthCtrl',
            templateUrl: '/../views/cart/cartView.html'
        })
        .state('checkout', {
            url: '/checkout',
            controller: 'AuthCtrl',
            templateUrl: '/../views/checkout/checkoutView.html'
        })
        .state('thankyou', {
            url: '/thankyou',
            controller: 'AuthCtrl',
            templateUrl: '/../views/thankyou/thankyouView.html'
        })
        // .state('todo', {
        //     url: '/list',
        //     controller: 'MainCtrl',
        //     templateUrl: '../views/mainView.html',
        //     resolve: {
        //         lists: function (listService) {
        //             return listService.getLists();
        //         }
        //     }
          // })
  });
