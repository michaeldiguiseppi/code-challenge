angular.module('myApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })
      .state('game', {
        url: '/game',
        templateUrl: 'partials/home.html'
      })
      .state('game.create', {
        url: '/create',
        templateUrl: 'partials/home.html'
      })
      .state('game.join', {
        url: '/join',
        templateUrl: 'partials/home.html'
      })
      .state('auth', {
        url: '/auth',
        templateUrl: 'partials/home.html'
      })
      .state('auth.login', {
        url: '/login',
        templateUrl: 'partials/home.html'
      })
      .state('auth.signup', {
        url: '/signup',
        templateUrl: 'partials/home.html'
      });
  });
