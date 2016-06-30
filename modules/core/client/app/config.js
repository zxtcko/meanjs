(function (window) {
  'use strict';
//   - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
// 　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
// 　　- 提高编译器效率，增加运行速度；
// 　　- 为未来新版本的Javascript做好铺垫。
// http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html

  var applicationModuleName = 'mean';

  var service = {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: ['ngResource', 'ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'angularFileUpload'],
    registerModule: registerModule
  };

  window.ApplicationConfiguration = service;

  // Add a new vertical module
  function registerModule(moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  }
}(window));
