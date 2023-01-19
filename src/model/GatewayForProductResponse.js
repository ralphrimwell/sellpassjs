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
import Gateways from './Gateways';
import Price from './Price';

/**
 * The GatewayForProductResponse model module.
 * @module model/GatewayForProductResponse
 * @version v1
 */
class GatewayForProductResponse {
    /**
     * Constructs a new <code>GatewayForProductResponse</code>.
     * @alias module:model/GatewayForProductResponse
     */
    constructor() { 
        
        GatewayForProductResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayForProductResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayForProductResponse} obj Optional instance to populate.
     * @return {module:model/GatewayForProductResponse} The populated <code>GatewayForProductResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayForProductResponse();

            if (data.hasOwnProperty('gateway')) {
                obj['gateway'] = Gateways.constructFromObject(data['gateway']);
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = GatewayRules.constructFromObject(data['rules']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = Price.constructFromObject(data['price']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayForProductResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayForProductResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `rules`
        if (data['rules']) { // data not null
          GatewayRules.validateJSON(data['rules']);
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          Price.validateJSON(data['price']);
        }

        return true;
    }


}



/**
 * @member {module:model/Gateways} gateway
 */
GatewayForProductResponse.prototype['gateway'] = undefined;

/**
 * @member {module:model/GatewayRules} rules
 */
GatewayForProductResponse.prototype['rules'] = undefined;

/**
 * @member {module:model/Price} price
 */
GatewayForProductResponse.prototype['price'] = undefined;






export default GatewayForProductResponse;

