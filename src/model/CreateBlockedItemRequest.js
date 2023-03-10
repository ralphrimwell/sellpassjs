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
import BlockedItemTypes from './BlockedItemTypes';

/**
 * The CreateBlockedItemRequest model module.
 * @module model/CreateBlockedItemRequest
 * @version v1
 */
class CreateBlockedItemRequest {
    /**
     * Constructs a new <code>CreateBlockedItemRequest</code>.
     * @alias module:model/CreateBlockedItemRequest
     */
    constructor() { 
        
        CreateBlockedItemRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateBlockedItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateBlockedItemRequest} obj Optional instance to populate.
     * @return {module:model/CreateBlockedItemRequest} The populated <code>CreateBlockedItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBlockedItemRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = BlockedItemTypes.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('customerForShopId')) {
                obj['customerForShopId'] = ApiClient.convertToType(data['customerForShopId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateBlockedItemRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateBlockedItemRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }

        return true;
    }


}



/**
 * @member {String} data
 */
CreateBlockedItemRequest.prototype['data'] = undefined;

/**
 * @member {String} note
 */
CreateBlockedItemRequest.prototype['note'] = undefined;

/**
 * @member {module:model/BlockedItemTypes} type
 */
CreateBlockedItemRequest.prototype['type'] = undefined;

/**
 * @member {Number} customerForShopId
 */
CreateBlockedItemRequest.prototype['customerForShopId'] = undefined;






export default CreateBlockedItemRequest;

