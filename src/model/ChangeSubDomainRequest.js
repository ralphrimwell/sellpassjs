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
 * The ChangeSubDomainRequest model module.
 * @module model/ChangeSubDomainRequest
 * @version v1
 */
class ChangeSubDomainRequest {
    /**
     * Constructs a new <code>ChangeSubDomainRequest</code>.
     * @alias module:model/ChangeSubDomainRequest
     * @param newSubDomain {String} 
     */
    constructor(newSubDomain) { 
        
        ChangeSubDomainRequest.initialize(this, newSubDomain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, newSubDomain) { 
        obj['newSubDomain'] = newSubDomain;
    }

    /**
     * Constructs a <code>ChangeSubDomainRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeSubDomainRequest} obj Optional instance to populate.
     * @return {module:model/ChangeSubDomainRequest} The populated <code>ChangeSubDomainRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeSubDomainRequest();

            if (data.hasOwnProperty('newSubDomain')) {
                obj['newSubDomain'] = ApiClient.convertToType(data['newSubDomain'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeSubDomainRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeSubDomainRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChangeSubDomainRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['newSubDomain'] && !(typeof data['newSubDomain'] === 'string' || data['newSubDomain'] instanceof String)) {
            throw new Error("Expected the field `newSubDomain` to be a primitive type in the JSON string but got " + data['newSubDomain']);
        }

        return true;
    }


}

ChangeSubDomainRequest.RequiredProperties = ["newSubDomain"];

/**
 * @member {String} newSubDomain
 */
ChangeSubDomainRequest.prototype['newSubDomain'] = undefined;






export default ChangeSubDomainRequest;

