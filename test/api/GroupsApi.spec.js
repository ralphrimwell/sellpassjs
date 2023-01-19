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
    instance = new SellPassWebApi.GroupsApi();
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

  describe('GroupsApi', function() {
    describe('selfShopIdGroupsGet', function() {
      it('should call selfShopIdGroupsGet successfully', function(done) {
        //uncomment below and update the code to test selfShopIdGroupsGet
        //instance.selfShopIdGroupsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdGroupsGroupIdDelete', function() {
      it('should call selfShopIdGroupsGroupIdDelete successfully', function(done) {
        //uncomment below and update the code to test selfShopIdGroupsGroupIdDelete
        //instance.selfShopIdGroupsGroupIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdGroupsGroupIdGet', function() {
      it('should call selfShopIdGroupsGroupIdGet successfully', function(done) {
        //uncomment below and update the code to test selfShopIdGroupsGroupIdGet
        //instance.selfShopIdGroupsGroupIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdGroupsGroupIdPut', function() {
      it('should call selfShopIdGroupsGroupIdPut successfully', function(done) {
        //uncomment below and update the code to test selfShopIdGroupsGroupIdPut
        //instance.selfShopIdGroupsGroupIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdGroupsGroupIdThumbnailPost', function() {
      it('should call selfShopIdGroupsGroupIdThumbnailPost successfully', function(done) {
        //uncomment below and update the code to test selfShopIdGroupsGroupIdThumbnailPost
        //instance.selfShopIdGroupsGroupIdThumbnailPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('selfShopIdGroupsPost', function() {
      it('should call selfShopIdGroupsPost successfully', function(done) {
        //uncomment below and update the code to test selfShopIdGroupsPost
        //instance.selfShopIdGroupsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
