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
import ModifyListingPosition from './ModifyListingPosition';

/**
 * The ModifyListingsPositionRequest model module.
 * @module model/ModifyListingsPositionRequest
 * @version v1
 */
class ModifyListingsPositionRequest {
    /**
     * Constructs a new <code>ModifyListingsPositionRequest</code>.
     * @alias module:model/ModifyListingsPositionRequest
     */
    constructor() { 
        
        ModifyListingsPositionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModifyListingsPositionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyListingsPositionRequest} obj Optional instance to populate.
     * @return {module:model/ModifyListingsPositionRequest} The populated <code>ModifyListingsPositionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyListingsPositionRequest();

            if (data.hasOwnProperty('listings')) {
                obj['listings'] = ApiClient.convertToType(data['listings'], [ModifyListingPosition]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModifyListingsPositionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModifyListingsPositionRequest</code>.
     */
    static validateJSON(data) {
        if (data['listings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['listings'])) {
                throw new Error("Expected the field `listings` to be an array in the JSON data but got " + data['listings']);
            }
            // validate the optional field `listings` (array)
            for (const item of data['listings']) {
                ModifyListingPosition.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ModifyListingPosition>} listings
 */
ModifyListingsPositionRequest.prototype['listings'] = undefined;






export default ModifyListingsPositionRequest;

