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
 * The LoginUserBasicRequest model module.
 * @module model/LoginUserBasicRequest
 * @version v1
 */
class LoginUserBasicRequest {
    /**
     * Constructs a new <code>LoginUserBasicRequest</code>.
     * @alias module:model/LoginUserBasicRequest
     * @param email {String} 
     * @param password {String} 
     * @param recaptcha {String} 
     */
    constructor(email, password, recaptcha) { 
        
        LoginUserBasicRequest.initialize(this, email, password, recaptcha);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password, recaptcha) { 
        obj['email'] = email;
        obj['password'] = password;
        obj['recaptcha'] = recaptcha;
    }

    /**
     * Constructs a <code>LoginUserBasicRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginUserBasicRequest} obj Optional instance to populate.
     * @return {module:model/LoginUserBasicRequest} The populated <code>LoginUserBasicRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginUserBasicRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('tfaCode')) {
                obj['tfaCode'] = ApiClient.convertToType(data['tfaCode'], 'String');
            }
            if (data.hasOwnProperty('recaptcha')) {
                obj['recaptcha'] = ApiClient.convertToType(data['recaptcha'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LoginUserBasicRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LoginUserBasicRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LoginUserBasicRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['tfaCode'] && !(typeof data['tfaCode'] === 'string' || data['tfaCode'] instanceof String)) {
            throw new Error("Expected the field `tfaCode` to be a primitive type in the JSON string but got " + data['tfaCode']);
        }
        // ensure the json data is a string
        if (data['recaptcha'] && !(typeof data['recaptcha'] === 'string' || data['recaptcha'] instanceof String)) {
            throw new Error("Expected the field `recaptcha` to be a primitive type in the JSON string but got " + data['recaptcha']);
        }

        return true;
    }


}

LoginUserBasicRequest.RequiredProperties = ["email", "password", "recaptcha"];

/**
 * @member {String} email
 */
LoginUserBasicRequest.prototype['email'] = undefined;

/**
 * @member {String} password
 */
LoginUserBasicRequest.prototype['password'] = undefined;

/**
 * @member {String} tfaCode
 */
LoginUserBasicRequest.prototype['tfaCode'] = undefined;

/**
 * @member {String} recaptcha
 */
LoginUserBasicRequest.prototype['recaptcha'] = undefined;






export default LoginUserBasicRequest;
