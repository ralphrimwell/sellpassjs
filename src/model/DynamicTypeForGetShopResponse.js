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

/**
 * The DynamicTypeForGetShopResponse model module.
 * @module model/DynamicTypeForGetShopResponse
 * @version v1
 */
class DynamicTypeForGetShopResponse {
    /**
     * Constructs a new <code>DynamicTypeForGetShopResponse</code>.
     * @alias module:model/DynamicTypeForGetShopResponse
     */
    constructor() { 
        
        DynamicTypeForGetShopResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DynamicTypeForGetShopResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicTypeForGetShopResponse} obj Optional instance to populate.
     * @return {module:model/DynamicTypeForGetShopResponse} The populated <code>DynamicTypeForGetShopResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicTypeForGetShopResponse();

            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ApiClient.convertToType(data['stock'], 'Number');
            }
            if (data.hasOwnProperty('minAmount')) {
                obj['minAmount'] = ApiClient.convertToType(data['minAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxAmount')) {
                obj['maxAmount'] = ApiClient.convertToType(data['maxAmount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicTypeForGetShopResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicTypeForGetShopResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} stock
 */
DynamicTypeForGetShopResponse.prototype['stock'] = undefined;

/**
 * @member {Number} minAmount
 */
DynamicTypeForGetShopResponse.prototype['minAmount'] = undefined;

/**
 * @member {Number} maxAmount
 */
DynamicTypeForGetShopResponse.prototype['maxAmount'] = undefined;






export default DynamicTypeForGetShopResponse;
