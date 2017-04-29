angular.module('miniRouting', ['ui.router'])
    .config(function($urlRouterProvider, $stateProvider){

        $stateProvider
        .state('home', {
            templateUrl: 'js/home/homeTmpl.html',
            url: '/',
            controller: 'homeCtrl.js'

        })
        .state('products', {
            templateUrl: 'js/products/productTmpl.html',
            url: '/products/:id',
            controller: 'productsCtrl.js'
        })
        .state("settings", {
            templateUrl: 'js/settings/settingsTmpl.html',
            url: '/settings',
            controller: 'settingsCtrl.js'
        });

        $urlRouterProvider.otherwise('/');







    });