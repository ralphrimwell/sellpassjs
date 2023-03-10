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
 * The SerialsTypeRequest model module.
 * @module model/SerialsTypeRequest
 * @version v1
 */
class SerialsTypeRequest {
    /**
     * Constructs a new <code>SerialsTypeRequest</code>.
     * @alias module:model/SerialsTypeRequest
     */
    constructor() { 
        
        SerialsTypeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SerialsTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SerialsTypeRequest} obj Optional instance to populate.
     * @return {module:model/SerialsTypeRequest} The populated <code>SerialsTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SerialsTypeRequest();

            if (data.hasOwnProperty('delimiter')) {
                obj['delimiter'] = ApiClient.convertToType(data['delimiter'], 'String');
            }
            if (data.hasOwnProperty('serials')) {
                obj['serials'] = ApiClient.convertToType(data['serials'], 'String');
            }
            if (data.hasOwnProperty('minAmount')) {
                obj['minAmount'] = ApiClient.convertToType(data['minAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxAmount')) {
                obj['maxAmount'] = ApiClient.convertToType(data['maxAmount'], 'Number');
            }
            if (data.hasOwnProperty('removeDuplicates')) {
                obj['removeDuplicates'] = ApiClient.convertToType(data['removeDuplicates'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SerialsTypeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SerialsTypeRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['delimiter'] && !(typeof data['delimiter'] === 'string' || data['delimiter'] instanceof String)) {
            throw new Error("Expected the field `delimiter` to be a primitive type in the JSON string but got " + data['delimiter']);
        }
        // ensure the json data is a string
        if (data['serials'] && !(typeof data['serials'] === 'string' || data['serials'] instanceof String)) {
            throw new Error("Expected the field `serials` to be a primitive type in the JSON string but got " + data['serials']);
        }

        return true;
    }


}



/**
 * @member {String} delimiter
 */
SerialsTypeRequest.prototype['delimiter'] = undefined;

/**
 * @member {String} serials
 */
SerialsTypeRequest.prototype['serials'] = undefined;

/**
 * @member {Number} minAmount
 */
SerialsTypeRequest.prototype['minAmount'] = undefined;

/**
 * @member {Number} maxAmount
 */
SerialsTypeRequest.prototype['maxAmount'] = undefined;

/**
 * @member {Boolean} removeDuplicates
 */
SerialsTypeRequest.prototype['removeDuplicates'] = undefined;






export default SerialsTypeRequest;

