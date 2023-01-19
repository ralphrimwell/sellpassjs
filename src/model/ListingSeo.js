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
 * The ListingSeo model module.
 * @module model/ListingSeo
 * @version v1
 */
class ListingSeo {
    /**
     * Constructs a new <code>ListingSeo</code>.
     * @alias module:model/ListingSeo
     */
    constructor() { 
        
        ListingSeo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListingSeo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListingSeo} obj Optional instance to populate.
     * @return {module:model/ListingSeo} The populated <code>ListingSeo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListingSeo();

            if (data.hasOwnProperty('metaTitle')) {
                obj['metaTitle'] = ApiClient.convertToType(data['metaTitle'], 'String');
            }
            if (data.hasOwnProperty('metaDescription')) {
                obj['metaDescription'] = ApiClient.convertToType(data['metaDescription'], 'String');
            }
            if (data.hasOwnProperty('metaCfImageId')) {
                obj['metaCfImageId'] = ApiClient.convertToType(data['metaCfImageId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListingSeo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListingSeo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['metaTitle'] && !(typeof data['metaTitle'] === 'string' || data['metaTitle'] instanceof String)) {
            throw new Error("Expected the field `metaTitle` to be a primitive type in the JSON string but got " + data['metaTitle']);
        }
        // ensure the json data is a string
        if (data['metaDescription'] && !(typeof data['metaDescription'] === 'string' || data['metaDescription'] instanceof String)) {
            throw new Error("Expected the field `metaDescription` to be a primitive type in the JSON string but got " + data['metaDescription']);
        }
        // ensure the json data is a string
        if (data['metaCfImageId'] && !(typeof data['metaCfImageId'] === 'string' || data['metaCfImageId'] instanceof String)) {
            throw new Error("Expected the field `metaCfImageId` to be a primitive type in the JSON string but got " + data['metaCfImageId']);
        }

        return true;
    }


}



/**
 * @member {String} metaTitle
 */
ListingSeo.prototype['metaTitle'] = undefined;

/**
 * @member {String} metaDescription
 */
ListingSeo.prototype['metaDescription'] = undefined;

/**
 * @member {String} metaCfImageId
 */
ListingSeo.prototype['metaCfImageId'] = undefined;






export default ListingSeo;

