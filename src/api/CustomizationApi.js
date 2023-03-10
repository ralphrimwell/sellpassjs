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
import ChangeSeoRequest from '../model/ChangeSeoRequest';
import ChangeShopDesignRequest from '../model/ChangeShopDesignRequest';
import ChangeSocialLinksRequest from '../model/ChangeSocialLinksRequest';
import ChangeStorefrontText from '../model/ChangeStorefrontText';
import ChangeWidgetsRequest from '../model/ChangeWidgetsRequest';

/**
* Customization service.
* @module api/CustomizationApi
* @version v1
*/
export default class CustomizationApi {

    /**
    * Constructs a new CustomizationApi. 
    * @alias module:api/CustomizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the selfShopIdCustomizationDesignPut operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationDesignPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangeShopDesignRequest} opts.changeShopDesignRequest 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationDesignPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationDesignPut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['changeShopDesignRequest'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationDesignPut");
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
        '/self/{shopId}/customization/design', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationGet operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationGet(shopId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationGet");
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
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/customization', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationLinksPut operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationLinksPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangeSocialLinksRequest} opts.changeSocialLinksRequest 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationLinksPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationLinksPut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['changeSocialLinksRequest'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationLinksPut");
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
        '/self/{shopId}/customization/links', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationLogoPost operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationLogoPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationLogoPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationLogoPost(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationLogoPost");
      }

      let pathParams = {
        'shopId': shopId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['Bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/customization/logo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationSeoFaviconPost operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationSeoFaviconPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationSeoFaviconPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationSeoFaviconPost(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationSeoFaviconPost");
      }

      let pathParams = {
        'shopId': shopId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['Bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/customization/seo/favicon', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationSeoImagePost operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationSeoImagePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationSeoImagePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationSeoImagePost(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationSeoImagePost");
      }

      let pathParams = {
        'shopId': shopId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['Bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/customization/seo/image', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationSeoPut operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationSeoPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangeSeoRequest} opts.changeSeoRequest 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationSeoPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationSeoPut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['changeSeoRequest'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationSeoPut");
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
        '/self/{shopId}/customization/seo', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationStorefrontBackgroundPost operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationStorefrontBackgroundPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationStorefrontBackgroundPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationStorefrontBackgroundPost(shopId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationStorefrontBackgroundPost");
      }

      let pathParams = {
        'shopId': shopId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['Bearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/self/{shopId}/customization/storefront/background', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationStorefrontPut operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationStorefrontPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangeStorefrontText} opts.changeStorefrontText 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationStorefrontPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationStorefrontPut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['changeStorefrontText'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationStorefrontPut");
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
        '/self/{shopId}/customization/storefront', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selfShopIdCustomizationWidgetsPut operation.
     * @callback module:api/CustomizationApi~selfShopIdCustomizationWidgetsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} shopId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ChangeWidgetsRequest} opts.changeWidgetsRequest 
     * @param {module:api/CustomizationApi~selfShopIdCustomizationWidgetsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    selfShopIdCustomizationWidgetsPut(shopId, opts, callback) {
      opts = opts || {};
      let postBody = opts['changeWidgetsRequest'];
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling selfShopIdCustomizationWidgetsPut");
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
        '/self/{shopId}/customization/widgets', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
