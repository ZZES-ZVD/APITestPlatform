app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider


    //api测试页面路由
    .state("apiTest", {
        url: '/',
        templateUrl: "apiTest.html"
    })

    $urlRouterProvider.otherwise('/');
})