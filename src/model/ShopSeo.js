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
 * The ShopSeo model module.
 * @module model/ShopSeo
 * @version v1
 */
class ShopSeo {
    /**
     * Constructs a new <code>ShopSeo</code>.
     * @alias module:model/ShopSeo
     */
    constructor() { 
        
        ShopSeo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShopSeo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShopSeo} obj Optional instance to populate.
     * @return {module:model/ShopSeo} The populated <code>ShopSeo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShopSeo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('favIconUrl')) {
                obj['favIconUrl'] = ApiClient.convertToType(data['favIconUrl'], 'String');
            }
            if (data.hasOwnProperty('metaTitle')) {
                obj['metaTitle'] = ApiClient.convertToType(data['metaTitle'], 'String');
            }
            if (data.hasOwnProperty('metaDescription')) {
                obj['metaDescription'] = ApiClient.convertToType(data['metaDescription'], 'String');
            }
            if (data.hasOwnProperty('metaImageCfId')) {
                obj['metaImageCfId'] = ApiClient.convertToType(data['metaImageCfId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShopSeo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShopSeo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['favIconUrl'] && !(typeof data['favIconUrl'] === 'string' || data['favIconUrl'] instanceof String)) {
            throw new Error("Expected the field `favIconUrl` to be a primitive type in the JSON string but got " + data['favIconUrl']);
        }
        // ensure the json data is a string
        if (data['metaTitle'] && !(typeof data['metaTitle'] === 'string' || data['metaTitle'] instanceof String)) {
            throw new Error("Expected the field `metaTitle` to be a primitive type in the JSON string but got " + data['metaTitle']);
        }
        // ensure the json data is a string
        if (data['metaDescription'] && !(typeof data['metaDescription'] === 'string' || data['metaDescription'] instanceof String)) {
            throw new Error("Expected the field `metaDescription` to be a primitive type in the JSON string but got " + data['metaDescription']);
        }
        // ensure the json data is a string
        if (data['metaImageCfId'] && !(typeof data['metaImageCfId'] === 'string' || data['metaImageCfId'] instanceof String)) {
            throw new Error("Expected the field `metaImageCfId` to be a primitive type in the JSON string but got " + data['metaImageCfId']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
ShopSeo.prototype['id'] = undefined;

/**
 * @member {String} favIconUrl
 */
ShopSeo.prototype['favIconUrl'] = undefined;

/**
 * @member {String} metaTitle
 */
ShopSeo.prototype['metaTitle'] = undefined;

/**
 * @member {String} metaDescription
 */
ShopSeo.prototype['metaDescription'] = undefined;

/**
 * @member {String} metaImageCfId
 */
ShopSeo.prototype['metaImageCfId'] = undefined;






export default ShopSeo;

