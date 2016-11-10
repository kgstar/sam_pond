/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.analytics', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('analytics', {
          url: '/analytics',
          templateUrl: 'app/pages/analytics/analytics.html',
          title: 'Analytics',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 800,
          },
        });
  }

})();
