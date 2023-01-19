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
    instance = new SellPassWebApi.ProductForListingsData();
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

  describe('ProductForListingsData', function() {
    it('should create an instance of ProductForListingsData', function() {
      // uncomment below and update the code to test ProductForListingsData
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be.a(SellPassWebApi.ProductForListingsData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "shortDescription")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailCfImageId (base name: "thumbnailCfImageId")', function() {
      // uncomment below and update the code to test the property thumbnailCfImageId
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property statistics (base name: "statistics")', function() {
      // uncomment below and update the code to test the property statistics
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property isInstantDelivery (base name: "isInstantDelivery")', function() {
      // uncomment below and update the code to test the property isInstantDelivery
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property isInStock (base name: "isInStock")', function() {
      // uncomment below and update the code to test the property isInStock
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property onHold (base name: "onHold")', function() {
      // uncomment below and update the code to test the property onHold
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property unlisted (base name: "unlisted")', function() {
      // uncomment below and update the code to test the property unlisted
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instance = new SellPassWebApi.ProductForListingsData();
      //expect(instance).to.be();
    });

  });

}));
