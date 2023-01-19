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
import GatewayRules from './GatewayRules';

/**
 * The ChangeVirtualPaymentsRequest model module.
 * @module model/ChangeVirtualPaymentsRequest
 * @version v1
 */
class ChangeVirtualPaymentsRequest {
    /**
     * Constructs a new <code>ChangeVirtualPaymentsRequest</code>.
     * @alias module:model/ChangeVirtualPaymentsRequest
     */
    constructor() { 
        
        ChangeVirtualPaymentsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeVirtualPaymentsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeVirtualPaymentsRequest} obj Optional instance to populate.
     * @return {module:model/ChangeVirtualPaymentsRequest} The populated <code>ChangeVirtualPaymentsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeVirtualPaymentsRequest();

            if (data.hasOwnProperty('privateKey')) {
                obj['privateKey'] = ApiClient.convertToType(data['privateKey'], 'String');
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
            if (data.hasOwnProperty('receiveCurrency')) {
                obj['receiveCurrency'] = ApiClient.convertToType(data['receiveCurrency'], 'String');
            }
            if (data.hasOwnProperty('gatewayRules')) {
                obj['gatewayRules'] = GatewayRules.constructFromObject(data['gatewayRules']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeVirtualPaymentsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeVirtualPaymentsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['privateKey'] && !(typeof data['privateKey'] === 'string' || data['privateKey'] instanceof String)) {
            throw new Error("Expected the field `privateKey` to be a primitive type in the JSON string but got " + data['privateKey']);
        }
        // ensure the json data is a string
        if (data['publicKey'] && !(typeof data['publicKey'] === 'string' || data['publicKey'] instanceof String)) {
            throw new Error("Expected the field `publicKey` to be a primitive type in the JSON string but got " + data['publicKey']);
        }
        // ensure the json data is a string
        if (data['receiveCurrency'] && !(typeof data['receiveCurrency'] === 'string' || data['receiveCurrency'] instanceof String)) {
            throw new Error("Expected the field `receiveCurrency` to be a primitive type in the JSON string but got " + data['receiveCurrency']);
        }
        // validate the optional field `gatewayRules`
        if (data['gatewayRules']) { // data not null
          GatewayRules.validateJSON(data['gatewayRules']);
        }

        return true;
    }


}



/**
 * @member {String} privateKey
 */
ChangeVirtualPaymentsRequest.prototype['privateKey'] = undefined;

/**
 * @member {String} publicKey
 */
ChangeVirtualPaymentsRequest.prototype['publicKey'] = undefined;

/**
 * @member {String} receiveCurrency
 */
ChangeVirtualPaymentsRequest.prototype['receiveCurrency'] = undefined;

/**
 * @member {module:model/GatewayRules} gatewayRules
 */
ChangeVirtualPaymentsRequest.prototype['gatewayRules'] = undefined;






export default ChangeVirtualPaymentsRequest;

