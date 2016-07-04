angular.module('formApp', ['ngAnimate', 'ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })

        .state('form.profile', {
            url: '/profile',
            template: 'form-profile.html'
        })

        .state('form.interests', {
            url: '/interests',
            template: 'form-interests.html'
        })

        .state('form.payment', {
            url: '/payment',
            template: 'form-payment.html'
        });

    $urlRouterProvider.otherwise('/form/profile')

})

.controller('formController', function ($scope) {

    $scope.formData = {};

    $scope.processForm = function () {
        alert('Awesome!');
    };
});