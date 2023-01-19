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
import CreateProductV2Variant from './CreateProductV2Variant';
import SeoRequest from './SeoRequest';

/**
 * The CreateProductV2Request model module.
 * @module model/CreateProductV2Request
 * @version v1
 */
class CreateProductV2Request {
    /**
     * Constructs a new <code>CreateProductV2Request</code>.
     * @alias module:model/CreateProductV2Request
     * @param title {String} Title of the product
     * @param description {String} Description of the product
     * @param variants {Array.<module:model/CreateProductV2Variant>} At least 1 variant is required
     * @param path {String} Path/Slug of the product
     * @param seo {module:model/SeoRequest} 
     * @param unlisted {Boolean} Is product unlisted
     * @param _private {Boolean} Is product private
     * @param onHold {Boolean} Is product on hold
     */
    constructor(title, description, variants, path, seo, unlisted, _private, onHold) { 
        
        CreateProductV2Request.initialize(this, title, description, variants, path, seo, unlisted, _private, onHold);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, description, variants, path, seo, unlisted, _private, onHold) { 
        obj['title'] = title;
        obj['description'] = description;
        obj['variants'] = variants;
        obj['path'] = path;
        obj['seo'] = seo;
        obj['unlisted'] = unlisted;
        obj['private'] = _private;
        obj['onHold'] = onHold;
    }

    /**
     * Constructs a <code>CreateProductV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProductV2Request} obj Optional instance to populate.
     * @return {module:model/CreateProductV2Request} The populated <code>CreateProductV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProductV2Request();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('shortDescription')) {
                obj['shortDescription'] = ApiClient.convertToType(data['shortDescription'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('variants')) {
                obj['variants'] = ApiClient.convertToType(data['variants'], [CreateProductV2Variant]);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('seo')) {
                obj['seo'] = SeoRequest.constructFromObject(data['seo']);
            }
            if (data.hasOwnProperty('unlisted')) {
                obj['unlisted'] = ApiClient.convertToType(data['unlisted'], 'Boolean');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('onHold')) {
                obj['onHold'] = ApiClient.convertToType(data['onHold'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProductV2Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProductV2Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateProductV2Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['shortDescription'] && !(typeof data['shortDescription'] === 'string' || data['shortDescription'] instanceof String)) {
            throw new Error("Expected the field `shortDescription` to be a primitive type in the JSON string but got " + data['shortDescription']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['variants']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variants'])) {
                throw new Error("Expected the field `variants` to be an array in the JSON data but got " + data['variants']);
            }
            // validate the optional field `variants` (array)
            for (const item of data['variants']) {
                CreateProductV2Variant.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // validate the optional field `seo`
        if (data['seo']) { // data not null
          SeoRequest.validateJSON(data['seo']);
        }

        return true;
    }


}

CreateProductV2Request.RequiredProperties = ["title", "description", "variants", "path", "seo", "unlisted", "private", "onHold"];

/**
 * Title of the product
 * @member {String} title
 */
CreateProductV2Request.prototype['title'] = undefined;

/**
 * Short Description of the product
 * @member {String} shortDescription
 */
CreateProductV2Request.prototype['shortDescription'] = undefined;

/**
 * Description of the product
 * @member {String} description
 */
CreateProductV2Request.prototype['description'] = undefined;

/**
 * At least 1 variant is required
 * @member {Array.<module:model/CreateProductV2Variant>} variants
 */
CreateProductV2Request.prototype['variants'] = undefined;

/**
 * Path/Slug of the product
 * @member {String} path
 */
CreateProductV2Request.prototype['path'] = undefined;

/**
 * @member {module:model/SeoRequest} seo
 */
CreateProductV2Request.prototype['seo'] = undefined;

/**
 * Is product unlisted
 * @member {Boolean} unlisted
 */
CreateProductV2Request.prototype['unlisted'] = undefined;

/**
 * Is product private
 * @member {Boolean} private
 */
CreateProductV2Request.prototype['private'] = undefined;

/**
 * Is product on hold
 * @member {Boolean} onHold
 */
CreateProductV2Request.prototype['onHold'] = undefined;






export default CreateProductV2Request;

