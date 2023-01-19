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
import GroupForListingForGetShopResponse from './GroupForListingForGetShopResponse';
import ListingSeo from './ListingSeo';
import ListingTypes from './ListingTypes';
import ListingVisibilities from './ListingVisibilities';
import PriceData from './PriceData';
import ProductForListingsData from './ProductForListingsData';

/**
 * The ItemInListingsData model module.
 * @module model/ItemInListingsData
 * @version v1
 */
class ItemInListingsData {
    /**
     * Constructs a new <code>ItemInListingsData</code>.
     * @alias module:model/ItemInListingsData
     */
    constructor() { 
        
        ItemInListingsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemInListingsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemInListingsData} obj Optional instance to populate.
     * @return {module:model/ItemInListingsData} The populated <code>ItemInListingsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemInListingsData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('searchWordsMeta')) {
                obj['searchWordsMeta'] = ApiClient.convertToType(data['searchWordsMeta'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('minPriceDetails')) {
                obj['minPriceDetails'] = PriceData.constructFromObject(data['minPriceDetails']);
            }
            if (data.hasOwnProperty('seo')) {
                obj['seo'] = ListingSeo.constructFromObject(data['seo']);
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ListingVisibilities.constructFromObject(data['visibility']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ListingTypes.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ProductForListingsData.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = GroupForListingForGetShopResponse.constructFromObject(data['group']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemInListingsData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemInListingsData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['searchWordsMeta'] && !(typeof data['searchWordsMeta'] === 'string' || data['searchWordsMeta'] instanceof String)) {
            throw new Error("Expected the field `searchWordsMeta` to be a primitive type in the JSON string but got " + data['searchWordsMeta']);
        }
        // validate the optional field `minPriceDetails`
        if (data['minPriceDetails']) { // data not null
          PriceData.validateJSON(data['minPriceDetails']);
        }
        // validate the optional field `seo`
        if (data['seo']) { // data not null
          ListingSeo.validateJSON(data['seo']);
        }
        // validate the optional field `product`
        if (data['product']) { // data not null
          ProductForListingsData.validateJSON(data['product']);
        }
        // validate the optional field `group`
        if (data['group']) { // data not null
          GroupForListingForGetShopResponse.validateJSON(data['group']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
ItemInListingsData.prototype['id'] = undefined;

/**
 * @member {String} path
 */
ItemInListingsData.prototype['path'] = undefined;

/**
 * @member {String} searchWordsMeta
 */
ItemInListingsData.prototype['searchWordsMeta'] = undefined;

/**
 * @member {Number} position
 */
ItemInListingsData.prototype['position'] = undefined;

/**
 * @member {module:model/PriceData} minPriceDetails
 */
ItemInListingsData.prototype['minPriceDetails'] = undefined;

/**
 * @member {module:model/ListingSeo} seo
 */
ItemInListingsData.prototype['seo'] = undefined;

/**
 * @member {module:model/ListingVisibilities} visibility
 */
ItemInListingsData.prototype['visibility'] = undefined;

/**
 * @member {module:model/ListingTypes} type
 */
ItemInListingsData.prototype['type'] = undefined;

/**
 * @member {module:model/ProductForListingsData} product
 */
ItemInListingsData.prototype['product'] = undefined;

/**
 * @member {module:model/GroupForListingForGetShopResponse} group
 */
ItemInListingsData.prototype['group'] = undefined;






export default ItemInListingsData;
