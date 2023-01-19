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
    instance = new SellPassWebApi.CategoriesApi();
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

  describe('CategoriesApi', function() {
    describe('selfShopIdCategoriesCategoryIdDelete', function() {
      it('should call selfShopIdCategoriesCategoryIdDelete successfully', function(done) {
        //uncomment below and update the code to test selfShopIdCategoriesCategoryIdDelete
        //instance.selfShopIdCategoriesCategoryIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdCategoriesCategoryIdGet', function() {
      it('should call selfShopIdCategoriesCategoryIdGet successfully', function(done) {
        //uncomment below and update the code to test selfShopIdCategoriesCategoryIdGet
        //instance.selfShopIdCategoriesCategoryIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdCategoriesCategoryIdPut', function() {
      it('should call selfShopIdCategoriesCategoryIdPut successfully', function(done) {
        //uncomment below and update the code to test selfShopIdCategoriesCategoryIdPut
        //instance.selfShopIdCategoriesCategoryIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdCategoriesGet', function() {
      it('should call selfShopIdCategoriesGet successfully', function(done) {
        //uncomment below and update the code to test selfShopIdCategoriesGet
        //instance.selfShopIdCategoriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdCategoriesPost', function() {
      it('should call selfShopIdCategoriesPost successfully', function(done) {
        //uncomment below and update the code to test selfShopIdCategoriesPost
        //instance.selfShopIdCategoriesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
