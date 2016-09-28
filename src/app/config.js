import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeCtrl from './controllers/home.ctrl.js';
import todoListFactory from './factories/todo-list.fctry.js';

const app = angular.module('app', [uiRouter, todoListFactory.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./templates/home.tpl.html'),
            controller: homeCtrl
        })
        .state('about', {
            url: '/about',
            template: require('./templates/about.tpl.html')
        });
    
        $locationProvider.html5Mode(true);
});

export default app;