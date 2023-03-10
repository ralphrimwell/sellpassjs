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
import CustomField from './CustomField';

/**
 * The BulkCustomFieldsUpdate model module.
 * @module model/BulkCustomFieldsUpdate
 * @version v1
 */
class BulkCustomFieldsUpdate {
    /**
     * Constructs a new <code>BulkCustomFieldsUpdate</code>.
     * @alias module:model/BulkCustomFieldsUpdate
     */
    constructor() { 
        
        BulkCustomFieldsUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkCustomFieldsUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkCustomFieldsUpdate} obj Optional instance to populate.
     * @return {module:model/BulkCustomFieldsUpdate} The populated <code>BulkCustomFieldsUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkCustomFieldsUpdate();

            if (data.hasOwnProperty('productIds')) {
                obj['productIds'] = ApiClient.convertToType(data['productIds'], ['Number']);
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomField]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BulkCustomFieldsUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BulkCustomFieldsUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['productIds'])) {
            throw new Error("Expected the field `productIds` to be an array in the JSON data but got " + data['productIds']);
        }
        if (data['customFields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['customFields'])) {
                throw new Error("Expected the field `customFields` to be an array in the JSON data but got " + data['customFields']);
            }
            // validate the optional field `customFields` (array)
            for (const item of data['customFields']) {
                CustomField.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} productIds
 */
BulkCustomFieldsUpdate.prototype['productIds'] = undefined;

/**
 * @member {Array.<module:model/CustomField>} customFields
 */
BulkCustomFieldsUpdate.prototype['customFields'] = undefined;






export default BulkCustomFieldsUpdate;

