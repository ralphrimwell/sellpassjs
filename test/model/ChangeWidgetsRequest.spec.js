/**
 * SellPass.WebApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellPassWebApi);
  }
}(this, function(expect, SellPassWebApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellPassWebApi.ChangeWidgetsRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChangeWidgetsRequest', function() {
    it('should create an instance of ChangeWidgetsRequest', function() {
      // uncomment below and update the code to test ChangeWidgetsRequest
      //var instance = new SellPassWebApi.ChangeWidgetsRequest();
      //expect(instance).to.be.a(SellPassWebApi.ChangeWidgetsRequest);
    });

    it('should have the property crispKey (base name: "crispKey")', function() {
      // uncomment below and update the code to test the property crispKey
      //var instance = new SellPassWebApi.ChangeWidgetsRequest();
      //expect(instance).to.be();
    });

    it('should have the property googleAnalyticsKey (base name: "googleAnalyticsKey")', function() {
      // uncomment below and update the code to test the property googleAnalyticsKey
      //var instance = new SellPassWebApi.ChangeWidgetsRequest();
      //expect(instance).to.be();
    });

    it('should have the property hotjarKey (base name: "hotjarKey")', function() {
      // uncomment below and update the code to test the property hotjarKey
      //var instance = new SellPassWebApi.ChangeWidgetsRequest();
      //expect(instance).to.be();
    });

    it('should have the property intercomKey (base name: "intercomKey")', function() {
      // uncomment below and update the code to test the property intercomKey
      //var instance = new SellPassWebApi.ChangeWidgetsRequest();
      //expect(instance).to.be();
    });

  });

}));
