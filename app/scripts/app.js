'use strict';

/**
 * @ngdoc overview
 * @name Avantrip
 * @description
 * # Avantrip
 *
 * Main module of the application.
 * This is the module for Avantrip. It uses ui.bootstrap, ui.router, snap, ngTable, ngCookies, avantripConfiguration
 */

angular
  .module('avantrip', [
    'ui.bootstrap',
    'ui.router',
    'ngCookies',
    'avantripConfiguration'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('base', {
        abstract: true,
        templateUrl: 'views/base.html'
      })
      .state('home', {
        url: '/',
        parent: 'base',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .state('keep-alive', {
        url: '/keep-alive',
        template: 'I could sure use a drink right now.'
      })
      .state('health-check', {
        url: '/health-check',
        templateUrl: 'views/health-check.html'
      })
      // 404 route
      .state('not-found', {
        url: '/not-found',
        templateUrl: '404.html'
      });
  })
  .run(function() {

  });
