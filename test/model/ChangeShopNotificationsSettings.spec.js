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
    instance = new SellPassWebApi.ChangeShopNotificationsSettings();
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

  describe('ChangeShopNotificationsSettings', function() {
    it('should create an instance of ChangeShopNotificationsSettings', function() {
      // uncomment below and update the code to test ChangeShopNotificationsSettings
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be.a(SellPassWebApi.ChangeShopNotificationsSettings);
    });

    it('should have the property orderCreated (base name: "orderCreated")', function() {
      // uncomment below and update the code to test the property orderCreated
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property orderCompleted (base name: "orderCompleted")', function() {
      // uncomment below and update the code to test the property orderCompleted
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property ticketOpened (base name: "ticketOpened")', function() {
      // uncomment below and update the code to test the property ticketOpened
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property ticketAnswered (base name: "ticketAnswered")', function() {
      // uncomment below and update the code to test the property ticketAnswered
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property feedbackReceived (base name: "feedbackReceived")', function() {
      // uncomment below and update the code to test the property feedbackReceived
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property feedbackEdited (base name: "feedbackEdited")', function() {
      // uncomment below and update the code to test the property feedbackEdited
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property internalUpdates (base name: "internalUpdates")', function() {
      // uncomment below and update the code to test the property internalUpdates
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionExpiration (base name: "subscriptionExpiration")', function() {
      // uncomment below and update the code to test the property subscriptionExpiration
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property productCreated (base name: "productCreated")', function() {
      // uncomment below and update the code to test the property productCreated
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property productEdited (base name: "productEdited")', function() {
      // uncomment below and update the code to test the property productEdited
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property productDeleted (base name: "productDeleted")', function() {
      // uncomment below and update the code to test the property productDeleted
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property productOutofStock (base name: "productOutofStock")', function() {
      // uncomment below and update the code to test the property productOutofStock
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property cashAppAttentionRequired (base name: "cashAppAttentionRequired")', function() {
      // uncomment below and update the code to test the property cashAppAttentionRequired
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property discordWebhookUrl (base name: "discordWebhookUrl")', function() {
      // uncomment below and update the code to test the property discordWebhookUrl
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property hideCustomerEmail (base name: "hideCustomerEmail")', function() {
      // uncomment below and update the code to test the property hideCustomerEmail
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

    it('should have the property hideCustomerIp (base name: "hideCustomerIp")', function() {
      // uncomment below and update the code to test the property hideCustomerIp
      //var instance = new SellPassWebApi.ChangeShopNotificationsSettings();
      //expect(instance).to.be();
    });

  });

}));
