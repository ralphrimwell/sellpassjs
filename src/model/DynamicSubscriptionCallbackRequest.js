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

import ApiClient from '../ApiClient';
import ProductVariantForDynamicSubscriptionCallbackRequest from './ProductVariantForDynamicSubscriptionCallbackRequest';

/**
 * The DynamicSubscriptionCallbackRequest model module.
 * @module model/DynamicSubscriptionCallbackRequest
 * @version v1
 */
class DynamicSubscriptionCallbackRequest {
    /**
     * Constructs a new <code>DynamicSubscriptionCallbackRequest</code>.
     * @alias module:model/DynamicSubscriptionCallbackRequest
     */
    constructor() { 
        
        DynamicSubscriptionCallbackRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DynamicSubscriptionCallbackRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSubscriptionCallbackRequest} obj Optional instance to populate.
     * @return {module:model/DynamicSubscriptionCallbackRequest} The populated <code>DynamicSubscriptionCallbackRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSubscriptionCallbackRequest();

            if (data.hasOwnProperty('productVariant')) {
                obj['productVariant'] = ProductVariantForDynamicSubscriptionCallbackRequest.constructFromObject(data['productVariant']);
            }
            if (data.hasOwnProperty('invoiceId')) {
                obj['invoiceId'] = ApiClient.convertToType(data['invoiceId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSubscriptionCallbackRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSubscriptionCallbackRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `productVariant`
        if (data['productVariant']) { // data not null
          ProductVariantForDynamicSubscriptionCallbackRequest.validateJSON(data['productVariant']);
        }
        // ensure the json data is a string
        if (data['invoiceId'] && !(typeof data['invoiceId'] === 'string' || data['invoiceId'] instanceof String)) {
            throw new Error("Expected the field `invoiceId` to be a primitive type in the JSON string but got " + data['invoiceId']);
        }

        return true;
    }


}



/**
 * @member {module:model/ProductVariantForDynamicSubscriptionCallbackRequest} productVariant
 */
DynamicSubscriptionCallbackRequest.prototype['productVariant'] = undefined;

/**
 * @member {String} invoiceId
 */
DynamicSubscriptionCallbackRequest.prototype['invoiceId'] = undefined;






export default DynamicSubscriptionCallbackRequest;
