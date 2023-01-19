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
* Enum class ProductTypes.
* @enum {}
* @readonly
*/
export default class ProductTypes {
    
        /**
         * value: 0
         * @const
         */
        "0" = 0;

    
        /**
         * value: 2
         * @const
         */
        "2" = 2;

    
        /**
         * value: 3
         * @const
         */
        "3" = 3;

    

    /**
    * Returns a <code>ProductTypes</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ProductTypes} The enum <code>ProductTypes</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

