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
 * The ChangeTermsRequest model module.
 * @module model/ChangeTermsRequest
 * @version v1
 */
class ChangeTermsRequest {
    /**
     * Constructs a new <code>ChangeTermsRequest</code>.
     * @alias module:model/ChangeTermsRequest
     */
    constructor() { 
        
        ChangeTermsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeTermsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeTermsRequest} obj Optional instance to populate.
     * @return {module:model/ChangeTermsRequest} The populated <code>ChangeTermsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeTermsRequest();

            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeTermsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeTermsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['terms'] && !(typeof data['terms'] === 'string' || data['terms'] instanceof String)) {
            throw new Error("Expected the field `terms` to be a primitive type in the JSON string but got " + data['terms']);
        }

        return true;
    }


}



/**
 * @member {String} terms
 */
ChangeTermsRequest.prototype['terms'] = undefined;






export default ChangeTermsRequest;

