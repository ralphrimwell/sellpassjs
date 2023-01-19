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
    instance = new SellPassWebApi.CreateProductV2Request();
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

  describe('CreateProductV2Request', function() {
    it('should create an instance of CreateProductV2Request', function() {
      // uncomment below and update the code to test CreateProductV2Request
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be.a(SellPassWebApi.CreateProductV2Request);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "shortDescription")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

    it('should have the property variants (base name: "variants")', function() {
      // uncomment below and update the code to test the property variants
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

    it('should have the property seo (base name: "seo")', function() {
      // uncomment below and update the code to test the property seo
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

    it('should have the property unlisted (base name: "unlisted")', function() {
      // uncomment below and update the code to test the property unlisted
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

    it('should have the property onHold (base name: "onHold")', function() {
      // uncomment below and update the code to test the property onHold
      //var instance = new SellPassWebApi.CreateProductV2Request();
      //expect(instance).to.be();
    });

  });

}));