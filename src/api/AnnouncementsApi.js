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


import ApiClient from "../ApiClient";
import CreateAnnouncementRequest from '../model/CreateAnnouncementRequest';

/**
* Announcements service.
* @module api/AnnouncementsApi
* @version v1
*/
export default class AnnouncementsApi {

    /**
    * Constructs a new AnnouncementsApi. 
    * @alias module:api/AnnouncementsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the selfShopIdAnnouncementsAnnouncementIdDelete operation.
     * @callback module:api/AnnouncementsApi~selfShopIdAnnouncementsAnnouncementIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Announcement
     * @param {Number} shopId 
     * @param {Number} announcementId 
     * @param {module:api/AnnouncementsApi~selfShopIdAnnouncementsAnnouncementIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdAnnouncementsAnnouncementIdDelete(shopId, announcementId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdAnnouncementsAnnouncementIdDelete");
      }
      // verify the required parameter 'announcementId' is set
      if (announcementId === undefined || announcementId === null) {
        throw new Error("Missing the required parameter 'announcementId' when calling selfShopIdAnnouncementsAnnouncementIdDelete");
      }

      let pathParams = {
        'shopId': shopId,
        'announcementId': announcementId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/announcements/{announcementId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdAnnouncementsAnnouncementIdPut operation.
     * @callback module:api/AnnouncementsApi~selfShopIdAnnouncementsAnnouncementIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit Announcement
     * @param {Number} shopId 
     * @param {Number} announcementId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAnnouncementRequest} opts.createAnnouncementRequest 
     * @param {module:api/AnnouncementsApi~selfShopIdAnnouncementsAnnouncementIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdAnnouncementsAnnouncementIdPut(shopId, announcementId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createAnnouncementRequest'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdAnnouncementsAnnouncementIdPut");
      }
      // verify the required parameter 'announcementId' is set
      if (announcementId === undefined || announcementId === null) {
        throw new Error("Missing the required parameter 'announcementId' when calling selfShopIdAnnouncementsAnnouncementIdPut");
      }

      let pathParams = {
        'shopId': shopId,
        'announcementId': announcementId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/announcements/{announcementId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdAnnouncementsGet operation.
     * @callback module:api/AnnouncementsApi~selfShopIdAnnouncementsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber 
     * @param {Number} opts.pageSize 
     * @param {String} opts.searchString 
     * @param {module:api/AnnouncementsApi~selfShopIdAnnouncementsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdAnnouncementsGet(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdAnnouncementsGet");
      }

      let pathParams = {
        'shopId': shopId
      };
      let queryParams = {
        'PageNumber': opts['pageNumber'],
        'PageSize': opts['pageSize'],
        'searchString': opts['searchString']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/announcements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdAnnouncementsPost operation.
     * @callback module:api/AnnouncementsApi~selfShopIdAnnouncementsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Announcement
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateAnnouncementRequest} opts.createAnnouncementRequest 
     * @param {module:api/AnnouncementsApi~selfShopIdAnnouncementsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdAnnouncementsPost(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createAnnouncementRequest'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdAnnouncementsPost");
      }

      let pathParams = {
        'shopId': shopId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/announcements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
