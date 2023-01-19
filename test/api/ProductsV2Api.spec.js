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
    instance = new SellPassWebApi.ProductsV2Api();
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

  describe('ProductsV2Api', function() {
    describe('selfShopIdV2ProductsBulkUpdatePaymentMethodsPut', function() {
      it('should call selfShopIdV2ProductsBulkUpdatePaymentMethodsPut successfully', function(done) {
        //uncomment below and update the code to test selfShopIdV2ProductsBulkUpdatePaymentMethodsPut
        //instance.selfShopIdV2ProductsBulkUpdatePaymentMethodsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdV2ProductsGet', function() {
      it('should call selfShopIdV2ProductsGet successfully', function(done) {
        //uncomment below and update the code to test selfShopIdV2ProductsGet
        //instance.selfShopIdV2ProductsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdV2ProductsPost', function() {
      it('should call selfShopIdV2ProductsPost successfully', function(done) {
        //uncomment below and update the code to test selfShopIdV2ProductsPost
        //instance.selfShopIdV2ProductsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdV2ProductsProductIdGet', function() {
      it('should call selfShopIdV2ProductsProductIdGet successfully', function(done) {
        //uncomment below and update the code to test selfShopIdV2ProductsProductIdGet
        //instance.selfShopIdV2ProductsProductIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdV2ProductsProductIdPut', function() {
      it('should call selfShopIdV2ProductsProductIdPut successfully', function(done) {
        //uncomment below and update the code to test selfShopIdV2ProductsProductIdPut
        //instance.selfShopIdV2ProductsProductIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdV2ProductsProductIdSeoImagePost', function() {
      it('should call selfShopIdV2ProductsProductIdSeoImagePost successfully', function(done) {
        //uncomment below and update the code to test selfShopIdV2ProductsProductIdSeoImagePost
        //instance.selfShopIdV2ProductsProductIdSeoImagePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdV2ProductsProductIdThumbnailPost', function() {
      it('should call selfShopIdV2ProductsProductIdThumbnailPost successfully', function(done) {
        //uncomment below and update the code to test selfShopIdV2ProductsProductIdThumbnailPost
        //instance.selfShopIdV2ProductsProductIdThumbnailPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));