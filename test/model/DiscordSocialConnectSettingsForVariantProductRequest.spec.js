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
    instance = new SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest();
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

  describe('DiscordSocialConnectSettingsForVariantProductRequest', function() {
    it('should create an instance of DiscordSocialConnectSettingsForVariantProductRequest', function() {
      // uncomment below and update the code to test DiscordSocialConnectSettingsForVariantProductRequest
      //var instance = new SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest();
      //expect(instance).to.be.a(SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instance = new SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property beforePurchaseRequireRoles (base name: "beforePurchaseRequireRoles")', function() {
      // uncomment below and update the code to test the property beforePurchaseRequireRoles
      //var instance = new SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property beforePurchaseServer (base name: "beforePurchaseServer")', function() {
      // uncomment below and update the code to test the property beforePurchaseServer
      //var instance = new SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest();
      //expect(instance).to.be();
    });

    it('should have the property afterPurchaseServer (base name: "afterPurchaseServer")', function() {
      // uncomment below and update the code to test the property afterPurchaseServer
      //var instance = new SellPassWebApi.DiscordSocialConnectSettingsForVariantProductRequest();
      //expect(instance).to.be();
    });

  });

}));