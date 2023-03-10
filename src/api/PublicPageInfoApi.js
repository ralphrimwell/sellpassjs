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
import GetAnnouncementDetailsResponseBaseResponse from '../model/GetAnnouncementDetailsResponseBaseResponse';
import GetFaqsDetailsResponseBaseResponse from '../model/GetFaqsDetailsResponseBaseResponse';
import GetFeedbacksDetailsResponseBaseResponse from '../model/GetFeedbacksDetailsResponseBaseResponse';
import GetMainDetailsResponseBaseResponse from '../model/GetMainDetailsResponseBaseResponse';
import GetProductPageResponseBaseResponse from '../model/GetProductPageResponseBaseResponse';
import GetProductsPageResponseBaseResponse from '../model/GetProductsPageResponseBaseResponse';

/**
* PublicPageInfo service.
* @module api/PublicPageInfoApi
* @version v1
*/
export default class PublicPageInfoApi {

    /**
    * Constructs a new PublicPageInfoApi. 
    * @alias module:api/PublicPageInfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v2PublicShopsShopIdAnnouncementsAnnouncementPathGet operation.
     * @callback module:api/PublicPageInfoApi~v2PublicShopsShopIdAnnouncementsAnnouncementPathGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAnnouncementDetailsResponseBaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the needed information for announcement page of the shop
     * @param {Number} shopId 
     * @param {String} announcementPath 
     * @param {module:api/PublicPageInfoApi~v2PublicShopsShopIdAnnouncementsAnnouncementPathGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAnnouncementDetailsResponseBaseResponse}
     */
    v2PublicShopsShopIdAnnouncementsAnnouncementPathGet(shopId, announcementPath, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling v2PublicShopsShopIdAnnouncementsAnnouncementPathGet");
      }
      // verify the required parameter 'announcementPath' is set
      if (announcementPath === undefined || announcementPath === null) {
        throw new Error("Missing the required parameter 'announcementPath' when calling v2PublicShopsShopIdAnnouncementsAnnouncementPathGet");
      }

      let pathParams = {
        'shopId': shopId,
        'announcementPath': announcementPath
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = GetAnnouncementDetailsResponseBaseResponse;
      return this.apiClient.callApi(
        '/v2/public/shops/{shopId}/announcements/{announcementPath}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v2PublicShopsShopIdFaqsGet operation.
     * @callback module:api/PublicPageInfoApi~v2PublicShopsShopIdFaqsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFaqsDetailsResponseBaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the needed information for faqs page of the shop
     * @param {Number} shopId 
     * @param {module:api/PublicPageInfoApi~v2PublicShopsShopIdFaqsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFaqsDetailsResponseBaseResponse}
     */
    v2PublicShopsShopIdFaqsGet(shopId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling v2PublicShopsShopIdFaqsGet");
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
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = GetFaqsDetailsResponseBaseResponse;
      return this.apiClient.callApi(
        '/v2/public/shops/{shopId}/faqs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v2PublicShopsShopIdFeedbacksGet operation.
     * @callback module:api/PublicPageInfoApi~v2PublicShopsShopIdFeedbacksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFeedbacksDetailsResponseBaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the needed information for feedbacks page of the shop
     * @param {Number} shopId 
     * @param {module:api/PublicPageInfoApi~v2PublicShopsShopIdFeedbacksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFeedbacksDetailsResponseBaseResponse}
     */
    v2PublicShopsShopIdFeedbacksGet(shopId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling v2PublicShopsShopIdFeedbacksGet");
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
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = GetFeedbacksDetailsResponseBaseResponse;
      return this.apiClient.callApi(
        '/v2/public/shops/{shopId}/feedbacks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v2PublicShopsShopIdListingsGet operation.
     * @callback module:api/PublicPageInfoApi~v2PublicShopsShopIdListingsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProductsPageResponseBaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the needed information for products page of the shop
     * @param {Number} shopId 
     * @param {module:api/PublicPageInfoApi~v2PublicShopsShopIdListingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProductsPageResponseBaseResponse}
     */
    v2PublicShopsShopIdListingsGet(shopId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling v2PublicShopsShopIdListingsGet");
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
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = GetProductsPageResponseBaseResponse;
      return this.apiClient.callApi(
        '/v2/public/shops/{shopId}/listings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v2PublicShopsShopIdListingsListingPathGet operation.
     * @callback module:api/PublicPageInfoApi~v2PublicShopsShopIdListingsListingPathGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetProductPageResponseBaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the needed information for product page of the shop
     * @param {Number} shopId 
     * @param {String} listingPath 
     * @param {module:api/PublicPageInfoApi~v2PublicShopsShopIdListingsListingPathGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetProductPageResponseBaseResponse}
     */
    v2PublicShopsShopIdListingsListingPathGet(shopId, listingPath, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling v2PublicShopsShopIdListingsListingPathGet");
      }
      // verify the required parameter 'listingPath' is set
      if (listingPath === undefined || listingPath === null) {
        throw new Error("Missing the required parameter 'listingPath' when calling v2PublicShopsShopIdListingsListingPathGet");
      }

      let pathParams = {
        'shopId': shopId,
        'listingPath': listingPath
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = GetProductPageResponseBaseResponse;
      return this.apiClient.callApi(
        '/v2/public/shops/{shopId}/listings/{listingPath}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v2PublicShopsShopIdMainGet operation.
     * @callback module:api/PublicPageInfoApi~v2PublicShopsShopIdMainGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMainDetailsResponseBaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the needed information for main page of the shop
     * @param {Number} shopId 
     * @param {module:api/PublicPageInfoApi~v2PublicShopsShopIdMainGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMainDetailsResponseBaseResponse}
     */
    v2PublicShopsShopIdMainGet(shopId, callback) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling v2PublicShopsShopIdMainGet");
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
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = GetMainDetailsResponseBaseResponse;
      return this.apiClient.callApi(
        '/v2/public/shops/{shopId}/main', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
