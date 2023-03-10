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

/**
 * The CreateCouponRequest model module.
 * @module model/CreateCouponRequest
 * @version v1
 */
class CreateCouponRequest {
    /**
     * Constructs a new <code>CreateCouponRequest</code>.
     * @alias module:model/CreateCouponRequest
     * @param name {String} 
     * @param discount {Number} 
     * @param isFixed {Boolean} 
     */
    constructor(name, discount, isFixed) { 
        
        CreateCouponRequest.initialize(this, name, discount, isFixed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, discount, isFixed) { 
        obj['name'] = name;
        obj['discount'] = discount;
        obj['isFixed'] = isFixed;
    }

    /**
     * Constructs a <code>CreateCouponRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCouponRequest} obj Optional instance to populate.
     * @return {module:model/CreateCouponRequest} The populated <code>CreateCouponRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCouponRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('isFixed')) {
                obj['isFixed'] = ApiClient.convertToType(data['isFixed'], 'Boolean');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('restrictToProducts')) {
                obj['restrictToProducts'] = ApiClient.convertToType(data['restrictToProducts'], ['Number']);
            }
            if (data.hasOwnProperty('restrictToGateways')) {
                obj['restrictToGateways'] = ApiClient.convertToType(data['restrictToGateways'], [Gateways]);
            }
            if (data.hasOwnProperty('maxUses')) {
                obj['maxUses'] = ApiClient.convertToType(data['maxUses'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCouponRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCouponRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateCouponRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['restrictToProducts'])) {
            throw new Error("Expected the field `restrictToProducts` to be an array in the JSON data but got " + data['restrictToProducts']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['restrictToGateways'])) {
            throw new Error("Expected the field `restrictToGateways` to be an array in the JSON data but got " + data['restrictToGateways']);
        }

        return true;
    }


}

CreateCouponRequest.RequiredProperties = ["name", "discount", "isFixed"];

/**
 * @member {String} name
 */
CreateCouponRequest.prototype['name'] = undefined;

/**
 * @member {String} note
 */
CreateCouponRequest.prototype['note'] = undefined;

/**
 * @member {Number} discount
 */
CreateCouponRequest.prototype['discount'] = undefined;

/**
 * @member {Boolean} isFixed
 */
CreateCouponRequest.prototype['isFixed'] = undefined;

/**
 * @member {Date} startDate
 */
CreateCouponRequest.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
CreateCouponRequest.prototype['endDate'] = undefined;

/**
 * @member {Array.<Number>} restrictToProducts
 */
CreateCouponRequest.prototype['restrictToProducts'] = undefined;

/**
 * @member {Array.<module:model/Gateways>} restrictToGateways
 */
CreateCouponRequest.prototype['restrictToGateways'] = undefined;

/**
 * @member {Number} maxUses
 */
CreateCouponRequest.prototype['maxUses'] = undefined;






export default CreateCouponRequest;

