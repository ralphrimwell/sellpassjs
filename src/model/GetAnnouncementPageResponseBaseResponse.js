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
import GetAnnouncementPageResponse from './GetAnnouncementPageResponse';

/**
 * The GetAnnouncementPageResponseBaseResponse model module.
 * @module model/GetAnnouncementPageResponseBaseResponse
 * @version v1
 */
class GetAnnouncementPageResponseBaseResponse {
    /**
     * Constructs a new <code>GetAnnouncementPageResponseBaseResponse</code>.
     * @alias module:model/GetAnnouncementPageResponseBaseResponse
     */
    constructor() { 
        
        GetAnnouncementPageResponseBaseResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAnnouncementPageResponseBaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAnnouncementPageResponseBaseResponse} obj Optional instance to populate.
     * @return {module:model/GetAnnouncementPageResponseBaseResponse} The populated <code>GetAnnouncementPageResponseBaseResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAnnouncementPageResponseBaseResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = GetAnnouncementPageResponse.constructFromObject(data['data']);
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
     * Validates the JSON data with respect to <code>GetAnnouncementPageResponseBaseResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAnnouncementPageResponseBaseResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          GetAnnouncementPageResponse.validateJSON(data['data']);
        }
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
 * @member {module:model/GetAnnouncementPageResponse} data
 */
GetAnnouncementPageResponseBaseResponse.prototype['data'] = undefined;

/**
 * @member {String} message
 */
GetAnnouncementPageResponseBaseResponse.prototype['message'] = undefined;

/**
 * @member {Array.<String>} errors
 */
GetAnnouncementPageResponseBaseResponse.prototype['errors'] = undefined;

/**
 * @member {String} log
 */
GetAnnouncementPageResponseBaseResponse.prototype['log'] = undefined;






export default GetAnnouncementPageResponseBaseResponse;

