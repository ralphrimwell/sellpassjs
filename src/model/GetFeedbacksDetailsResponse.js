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
import FeedbackForGetInvoiceResponse from './FeedbackForGetInvoiceResponse';

/**
 * The GetFeedbacksDetailsResponse model module.
 * @module model/GetFeedbacksDetailsResponse
 * @version v1
 */
class GetFeedbacksDetailsResponse {
    /**
     * Constructs a new <code>GetFeedbacksDetailsResponse</code>.
     * @alias module:model/GetFeedbacksDetailsResponse
     */
    constructor() { 
        
        GetFeedbacksDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFeedbacksDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFeedbacksDetailsResponse} obj Optional instance to populate.
     * @return {module:model/GetFeedbacksDetailsResponse} The populated <code>GetFeedbacksDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFeedbacksDetailsResponse();

            if (data.hasOwnProperty('feedbacks')) {
                obj['feedbacks'] = ApiClient.convertToType(data['feedbacks'], [FeedbackForGetInvoiceResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetFeedbacksDetailsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetFeedbacksDetailsResponse</code>.
     */
    static validateJSON(data) {
        if (data['feedbacks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['feedbacks'])) {
                throw new Error("Expected the field `feedbacks` to be an array in the JSON data but got " + data['feedbacks']);
            }
            // validate the optional field `feedbacks` (array)
            for (const item of data['feedbacks']) {
                FeedbackForGetInvoiceResponse.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/FeedbackForGetInvoiceResponse>} feedbacks
 */
GetFeedbacksDetailsResponse.prototype['feedbacks'] = undefined;






export default GetFeedbacksDetailsResponse;
