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
 * The AnswerFeedbackRequest model module.
 * @module model/AnswerFeedbackRequest
 * @version v1
 */
class AnswerFeedbackRequest {
    /**
     * Constructs a new <code>AnswerFeedbackRequest</code>.
     * @alias module:model/AnswerFeedbackRequest
     * @param answer {String} 
     */
    constructor(answer) { 
        
        AnswerFeedbackRequest.initialize(this, answer);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, answer) { 
        obj['answer'] = answer;
    }

    /**
     * Constructs a <code>AnswerFeedbackRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnswerFeedbackRequest} obj Optional instance to populate.
     * @return {module:model/AnswerFeedbackRequest} The populated <code>AnswerFeedbackRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnswerFeedbackRequest();

            if (data.hasOwnProperty('answer')) {
                obj['answer'] = ApiClient.convertToType(data['answer'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnswerFeedbackRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnswerFeedbackRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AnswerFeedbackRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['answer'] && !(typeof data['answer'] === 'string' || data['answer'] instanceof String)) {
            throw new Error("Expected the field `answer` to be a primitive type in the JSON string but got " + data['answer']);
        }

        return true;
    }


}

AnswerFeedbackRequest.RequiredProperties = ["answer"];

/**
 * @member {String} answer
 */
AnswerFeedbackRequest.prototype['answer'] = undefined;






export default AnswerFeedbackRequest;

