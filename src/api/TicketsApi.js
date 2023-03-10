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
import MessageContentTicketRequest from '../model/MessageContentTicketRequest';

/**
* Tickets service.
* @module api/TicketsApi
* @version v1
*/
export default class TicketsApi {

    /**
    * Constructs a new TicketsApi. 
    * @alias module:api/TicketsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the selfShopIdTicketsGet operation.
     * @callback module:api/TicketsApi~selfShopIdTicketsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber 
     * @param {Number} opts.pageSize 
     * @param {String} opts.searchString 
     * @param {module:api/TicketsApi~selfShopIdTicketsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdTicketsGet(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdTicketsGet");
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
        '/self/{shopId}/tickets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdTicketsTicketIdClosePost operation.
     * @callback module:api/TicketsApi~selfShopIdTicketsTicketIdClosePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Number} ticketId 
     * @param {module:api/TicketsApi~selfShopIdTicketsTicketIdClosePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdTicketsTicketIdClosePost(shopId, ticketId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdTicketsTicketIdClosePost");
      }
      // verify the required parameter 'ticketId' is set
      if (ticketId === undefined || ticketId === null) {
        throw new Error("Missing the required parameter 'ticketId' when calling selfShopIdTicketsTicketIdClosePost");
      }

      let pathParams = {
        'shopId': shopId,
        'ticketId': ticketId
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
        '/self/{shopId}/tickets/{ticketId}/close', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdTicketsTicketIdGet operation.
     * @callback module:api/TicketsApi~selfShopIdTicketsTicketIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Number} ticketId 
     * @param {module:api/TicketsApi~selfShopIdTicketsTicketIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdTicketsTicketIdGet(shopId, ticketId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdTicketsTicketIdGet");
      }
      // verify the required parameter 'ticketId' is set
      if (ticketId === undefined || ticketId === null) {
        throw new Error("Missing the required parameter 'ticketId' when calling selfShopIdTicketsTicketIdGet");
      }

      let pathParams = {
        'shopId': shopId,
        'ticketId': ticketId
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
        '/self/{shopId}/tickets/{ticketId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdTicketsTicketIdMessagePost operation.
     * @callback module:api/TicketsApi~selfShopIdTicketsTicketIdMessagePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Number} ticketId 
     * @param {Object} opts Optional parameters
     * @param {module:model/MessageContentTicketRequest} opts.messageContentTicketRequest 
     * @param {module:api/TicketsApi~selfShopIdTicketsTicketIdMessagePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdTicketsTicketIdMessagePost(shopId, ticketId, opts, callback) {
      opts = opts || {};
      let postBody = opts['messageContentTicketRequest'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdTicketsTicketIdMessagePost");
      }
      // verify the required parameter 'ticketId' is set
      if (ticketId === undefined || ticketId === null) {
        throw new Error("Missing the required parameter 'ticketId' when calling selfShopIdTicketsTicketIdMessagePost");
      }

      let pathParams = {
        'shopId': shopId,
        'ticketId': ticketId
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
        '/self/{shopId}/tickets/{ticketId}/message', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
