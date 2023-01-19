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
import FaqDetails from './FaqDetails';
import MainDetailsInternal from './MainDetailsInternal';

/**
 * The GetFaqsPageResponse model module.
 * @module model/GetFaqsPageResponse
 * @version v1
 */
class GetFaqsPageResponse {
    /**
     * Constructs a new <code>GetFaqsPageResponse</code>.
     * @alias module:model/GetFaqsPageResponse
     */
    constructor() { 
        
        GetFaqsPageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFaqsPageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFaqsPageResponse} obj Optional instance to populate.
     * @return {module:model/GetFaqsPageResponse} The populated <code>GetFaqsPageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFaqsPageResponse();

            if (data.hasOwnProperty('faqs')) {
                obj['faqs'] = ApiClient.convertToType(data['faqs'], [FaqDetails]);
            }
            if (data.hasOwnProperty('mainDetails')) {
                obj['mainDetails'] = MainDetailsInternal.constructFromObject(data['mainDetails']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetFaqsPageResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetFaqsPageResponse</code>.
     */
    static validateJSON(data) {
        if (data['faqs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['faqs'])) {
                throw new Error("Expected the field `faqs` to be an array in the JSON data but got " + data['faqs']);
            }
            // validate the optional field `faqs` (array)
            for (const item of data['faqs']) {
                FaqDetails.validateJsonObject(item);
            };
        }
        // validate the optional field `mainDetails`
        if (data['mainDetails']) { // data not null
          MainDetailsInternal.validateJSON(data['mainDetails']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/FaqDetails>} faqs
 */
GetFaqsPageResponse.prototype['faqs'] = undefined;

/**
 * @member {module:model/MainDetailsInternal} mainDetails
 */
GetFaqsPageResponse.prototype['mainDetails'] = undefined;






export default GetFaqsPageResponse;
