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
import BulkBaseUpdateRequest from '../model/BulkBaseUpdateRequest';
import BulkCustomFieldsUpdate from '../model/BulkCustomFieldsUpdate';
import BulkCustomerNoteUpdate from '../model/BulkCustomerNoteUpdate';
import BulkDiscordIntegrationUpdate from '../model/BulkDiscordIntegrationUpdate';
import BulkVisibilityUpdate from '../model/BulkVisibilityUpdate';

/**
* Products service.
* @module api/ProductsApi
* @version v1
*/
export default class ProductsApi {

    /**
    * Constructs a new ProductsApi. 
    * @alias module:api/ProductsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the selfShopIdProductsBulkDeletePost operation.
     * @callback module:api/ProductsApi~selfShopIdProductsBulkDeletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BulkBaseUpdateRequest} opts.bulkBaseUpdateRequest 
     * @param {module:api/ProductsApi~selfShopIdProductsBulkDeletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdProductsBulkDeletePost(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['bulkBaseUpdateRequest'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdProductsBulkDeletePost");
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
        '/self/{shopId}/products/bulk/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdProductsBulkUpdateCustomFieldsPut operation.
     * @callback module:api/ProductsApi~selfShopIdProductsBulkUpdateCustomFieldsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BulkCustomFieldsUpdate} opts.bulkCustomFieldsUpdate 
     * @param {module:api/ProductsApi~selfShopIdProductsBulkUpdateCustomFieldsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdProductsBulkUpdateCustomFieldsPut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['bulkCustomFieldsUpdate'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdProductsBulkUpdateCustomFieldsPut");
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
        '/self/{shopId}/products/bulk/update/custom-fields', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdProductsBulkUpdateCustomerNotePut operation.
     * @callback module:api/ProductsApi~selfShopIdProductsBulkUpdateCustomerNotePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BulkCustomerNoteUpdate} opts.bulkCustomerNoteUpdate 
     * @param {module:api/ProductsApi~selfShopIdProductsBulkUpdateCustomerNotePutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdProductsBulkUpdateCustomerNotePut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['bulkCustomerNoteUpdate'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdProductsBulkUpdateCustomerNotePut");
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
        '/self/{shopId}/products/bulk/update/customer-note', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdProductsBulkUpdateDiscordIntegrationPut operation.
     * @callback module:api/ProductsApi~selfShopIdProductsBulkUpdateDiscordIntegrationPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BulkDiscordIntegrationUpdate} opts.bulkDiscordIntegrationUpdate 
     * @param {module:api/ProductsApi~selfShopIdProductsBulkUpdateDiscordIntegrationPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdProductsBulkUpdateDiscordIntegrationPut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['bulkDiscordIntegrationUpdate'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdProductsBulkUpdateDiscordIntegrationPut");
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
        '/self/{shopId}/products/bulk/update/discord-integration', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdProductsBulkUpdateVisibilityPut operation.
     * @callback module:api/ProductsApi~selfShopIdProductsBulkUpdateVisibilityPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BulkVisibilityUpdate} opts.bulkVisibilityUpdate 
     * @param {module:api/ProductsApi~selfShopIdProductsBulkUpdateVisibilityPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdProductsBulkUpdateVisibilityPut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['bulkVisibilityUpdate'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdProductsBulkUpdateVisibilityPut");
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
        '/self/{shopId}/products/bulk/update/visibility', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdProductsGet operation.
     * @callback module:api/ProductsApi~selfShopIdProductsGetCallback
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
     * @param {module:api/ProductsApi~selfShopIdProductsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdProductsGet(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdProductsGet");
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
        '/self/{shopId}/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdProductsProductIdDelete operation.
     * @callback module:api/ProductsApi~selfShopIdProductsProductIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Number} productId 
     * @param {module:api/ProductsApi~selfShopIdProductsProductIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdProductsProductIdDelete(shopId, productId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdProductsProductIdDelete");
      }
      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling selfShopIdProductsProductIdDelete");
      }

      let pathParams = {
        'shopId': shopId,
        'productId': productId
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
        '/self/{shopId}/products/{productId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}