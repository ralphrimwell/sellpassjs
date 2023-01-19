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
    instance = new SellPassWebApi.ChangeCoinbaseCommerceRequest();
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

  describe('ChangeCoinbaseCommerceRequest', function() {
    it('should create an instance of ChangeCoinbaseCommerceRequest', function() {
      // uncomment below and update the code to test ChangeCoinbaseCommerceRequest
      //var instance = new SellPassWebApi.ChangeCoinbaseCommerceRequest();
      //expect(instance).to.be.a(SellPassWebApi.ChangeCoinbaseCommerceRequest);
    });

    it('should have the property apiKey (base name: "apiKey")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instance = new SellPassWebApi.ChangeCoinbaseCommerceRequest();
      //expect(instance).to.be();
    });

    it('should have the property webhookSecret (base name: "webhookSecret")', function() {
      // uncomment below and update the code to test the property webhookSecret
      //var instance = new SellPassWebApi.ChangeCoinbaseCommerceRequest();
      //expect(instance).to.be();
    });

    it('should have the property gatewayRules (base name: "gatewayRules")', function() {
      // uncomment below and update the code to test the property gatewayRules
      //var instance = new SellPassWebApi.ChangeCoinbaseCommerceRequest();
      //expect(instance).to.be();
    });

  });

}));