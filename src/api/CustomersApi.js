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

/**
* Customers service.
* @module api/CustomersApi
* @version v1
*/
export default class CustomersApi {

    /**
    * Constructs a new CustomersApi. 
    * @alias module:api/CustomersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the selfShopIdCustomersCustomerIdGet operation.
     * @callback module:api/CustomersApi~selfShopIdCustomersCustomerIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Number} customerId 
     * @param {module:api/CustomersApi~selfShopIdCustomersCustomerIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomersCustomerIdGet(shopId, customerId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomersCustomerIdGet");
      }
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling selfShopIdCustomersCustomerIdGet");
      }

      let pathParams = {
        'shopId': shopId,
        'customerId': customerId
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
        '/self/{shopId}/customers/{customerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomersCustomerIdIpsGet operation.
     * @callback module:api/CustomersApi~selfShopIdCustomersCustomerIdIpsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Number} customerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber 
     * @param {Number} opts.pageSize 
     * @param {module:api/CustomersApi~selfShopIdCustomersCustomerIdIpsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomersCustomerIdIpsGet(shopId, customerId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomersCustomerIdIpsGet");
      }
      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling selfShopIdCustomersCustomerIdIpsGet");
      }

      let pathParams = {
        'shopId': shopId,
        'customerId': customerId
      };
      let queryParams = {
        'PageNumber': opts['pageNumber'],
        'PageSize': opts['pageSize']
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
        '/self/{shopId}/customers/{customerId}/ips', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomersGet operation.
     * @callback module:api/CustomersApi~selfShopIdCustomersGetCallback
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
     * @param {module:api/CustomersApi~selfShopIdCustomersGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomersGet(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomersGet");
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
        '/self/{shopId}/customers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomersStatsGet operation.
     * @callback module:api/CustomersApi~selfShopIdCustomersStatsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate 
     * @param {Date} opts.toDate 
     * @param {module:api/CustomersApi~selfShopIdCustomersStatsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomersStatsGet(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomersStatsGet");
      }

      let pathParams = {
        'shopId': shopId
      };
      let queryParams = {
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate']
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
        '/self/{shopId}/customers/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
