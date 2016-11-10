/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.inbox', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('inbox', {
          url: '/inbox',
          templateUrl: 'app/pages/inbox/inbox.html',
          title: 'Inbox',
          sidebarMeta: {
            icon: 'ion-android-mail',
            order: 800,
          },
        });
  }

})();
