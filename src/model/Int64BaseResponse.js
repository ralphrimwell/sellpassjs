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
 * The Int64BaseResponse model module.
 * @module model/Int64BaseResponse
 * @version v1
 */
class Int64BaseResponse {
    /**
     * Constructs a new <code>Int64BaseResponse</code>.
     * @alias module:model/Int64BaseResponse
     */
    constructor() { 
        
        Int64BaseResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Int64BaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Int64BaseResponse} obj Optional instance to populate.
     * @return {module:model/Int64BaseResponse} The populated <code>Int64BaseResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Int64BaseResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('log')) {
                obj['log'] = ApiClient.convertToType(data['log'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Int64BaseResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Int64BaseResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }
        // ensure the json data is a string
        if (data['log'] && !(typeof data['log'] === 'string' || data['log'] instanceof String)) {
            throw new Error("Expected the field `log` to be a primitive type in the JSON string but got " + data['log']);
        }

        return true;
    }


}



/**
 * @member {Number} data
 */
Int64BaseResponse.prototype['data'] = undefined;

/**
 * @member {String} message
 */
Int64BaseResponse.prototype['message'] = undefined;

/**
 * @member {Array.<String>} errors
 */
Int64BaseResponse.prototype['errors'] = undefined;

/**
 * @member {String} log
 */
Int64BaseResponse.prototype['log'] = undefined;






export default Int64BaseResponse;

