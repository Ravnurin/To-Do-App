import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./templates/home.tpl.html')
        })
        .state('about', {
            url: '/about',
            template: require('./templates/about.tpl.html')
        });
    
        $locationProvider.html5Mode(true);
});

export default app;