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
import Gateways from './Gateways';
import PartInvoiceForInvoiceRequest from './PartInvoiceForInvoiceRequest';

/**
 * The CreateInvoiceRequest model module.
 * @module model/CreateInvoiceRequest
 * @version v1
 */
class CreateInvoiceRequest {
    /**
     * Constructs a new <code>CreateInvoiceRequest</code>.
     * @alias module:model/CreateInvoiceRequest
     * @param customerEmail {String} 
     * @param gateway {module:model/Gateways} 
     * @param parts {Array.<module:model/PartInvoiceForInvoiceRequest>} 
     * @param shopId {Number} 
     * @param useragent {String} 
     * @param recaptcha {String} 
     */
    constructor(customerEmail, gateway, parts, shopId, useragent, recaptcha) { 
        
        CreateInvoiceRequest.initialize(this, customerEmail, gateway, parts, shopId, useragent, recaptcha);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customerEmail, gateway, parts, shopId, useragent, recaptcha) { 
        obj['customerEmail'] = customerEmail;
        obj['gateway'] = gateway;
        obj['parts'] = parts;
        obj['shopId'] = shopId;
        obj['useragent'] = useragent;
        obj['recaptcha'] = recaptcha;
    }

    /**
     * Constructs a <code>CreateInvoiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInvoiceRequest} obj Optional instance to populate.
     * @return {module:model/CreateInvoiceRequest} The populated <code>CreateInvoiceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInvoiceRequest();

            if (data.hasOwnProperty('customerEmail')) {
                obj['customerEmail'] = ApiClient.convertToType(data['customerEmail'], 'String');
            }
            if (data.hasOwnProperty('gateway')) {
                obj['gateway'] = Gateways.constructFromObject(data['gateway']);
            }
            if (data.hasOwnProperty('parts')) {
                obj['parts'] = ApiClient.convertToType(data['parts'], [PartInvoiceForInvoiceRequest]);
            }
            if (data.hasOwnProperty('shopId')) {
                obj['shopId'] = ApiClient.convertToType(data['shopId'], 'Number');
            }
            if (data.hasOwnProperty('coupon')) {
                obj['coupon'] = ApiClient.convertToType(data['coupon'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': 'String'});
            }
            if (data.hasOwnProperty('discordSocialConnectId')) {
                obj['discordSocialConnectId'] = ApiClient.convertToType(data['discordSocialConnectId'], 'String');
            }
            if (data.hasOwnProperty('useragent')) {
                obj['useragent'] = ApiClient.convertToType(data['useragent'], 'String');
            }
            if (data.hasOwnProperty('recaptcha')) {
                obj['recaptcha'] = ApiClient.convertToType(data['recaptcha'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateInvoiceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateInvoiceRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateInvoiceRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['customerEmail'] && !(typeof data['customerEmail'] === 'string' || data['customerEmail'] instanceof String)) {
            throw new Error("Expected the field `customerEmail` to be a primitive type in the JSON string but got " + data['customerEmail']);
        }
        if (data['parts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parts'])) {
                throw new Error("Expected the field `parts` to be an array in the JSON data but got " + data['parts']);
            }
            // validate the optional field `parts` (array)
            for (const item of data['parts']) {
                PartInvoiceForInvoiceRequest.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['coupon'] && !(typeof data['coupon'] === 'string' || data['coupon'] instanceof String)) {
            throw new Error("Expected the field `coupon` to be a primitive type in the JSON string but got " + data['coupon']);
        }
        // ensure the json data is a string
        if (data['discordSocialConnectId'] && !(typeof data['discordSocialConnectId'] === 'string' || data['discordSocialConnectId'] instanceof String)) {
            throw new Error("Expected the field `discordSocialConnectId` to be a primitive type in the JSON string but got " + data['discordSocialConnectId']);
        }
        // ensure the json data is a string
        if (data['useragent'] && !(typeof data['useragent'] === 'string' || data['useragent'] instanceof String)) {
            throw new Error("Expected the field `useragent` to be a primitive type in the JSON string but got " + data['useragent']);
        }
        // ensure the json data is a string
        if (data['recaptcha'] && !(typeof data['recaptcha'] === 'string' || data['recaptcha'] instanceof String)) {
            throw new Error("Expected the field `recaptcha` to be a primitive type in the JSON string but got " + data['recaptcha']);
        }

        return true;
    }


}

CreateInvoiceRequest.RequiredProperties = ["customerEmail", "gateway", "parts", "shopId", "useragent", "recaptcha"];

/**
 * @member {String} customerEmail
 */
CreateInvoiceRequest.prototype['customerEmail'] = undefined;

/**
 * @member {module:model/Gateways} gateway
 */
CreateInvoiceRequest.prototype['gateway'] = undefined;

/**
 * @member {Array.<module:model/PartInvoiceForInvoiceRequest>} parts
 */
CreateInvoiceRequest.prototype['parts'] = undefined;

/**
 * @member {Number} shopId
 */
CreateInvoiceRequest.prototype['shopId'] = undefined;

/**
 * @member {String} coupon
 */
CreateInvoiceRequest.prototype['coupon'] = undefined;

/**
 * @member {Object.<String, String>} customFields
 */
CreateInvoiceRequest.prototype['customFields'] = undefined;

/**
 * @member {String} discordSocialConnectId
 */
CreateInvoiceRequest.prototype['discordSocialConnectId'] = undefined;

/**
 * @member {String} useragent
 */
CreateInvoiceRequest.prototype['useragent'] = undefined;

/**
 * @member {String} recaptcha
 */
CreateInvoiceRequest.prototype['recaptcha'] = undefined;






export default CreateInvoiceRequest;
