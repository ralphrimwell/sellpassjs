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
import GuildForDiscordSocialConnectSettingsForVariantProducRequest from './GuildForDiscordSocialConnectSettingsForVariantProducRequest';

/**
 * The DiscordSocialConnectSettingsForVariantProductRequest model module.
 * @module model/DiscordSocialConnectSettingsForVariantProductRequest
 * @version v1
 */
class DiscordSocialConnectSettingsForVariantProductRequest {
    /**
     * Constructs a new <code>DiscordSocialConnectSettingsForVariantProductRequest</code>.
     * @alias module:model/DiscordSocialConnectSettingsForVariantProductRequest
     * @param enabled {Boolean} Is Discord social connect enabled
     * @param required {Boolean} Is Discord social connect required
     */
    constructor(enabled, required) { 
        
        DiscordSocialConnectSettingsForVariantProductRequest.initialize(this, enabled, required);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, required) { 
        obj['enabled'] = enabled;
        obj['required'] = required;
    }

    /**
     * Constructs a <code>DiscordSocialConnectSettingsForVariantProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscordSocialConnectSettingsForVariantProductRequest} obj Optional instance to populate.
     * @return {module:model/DiscordSocialConnectSettingsForVariantProductRequest} The populated <code>DiscordSocialConnectSettingsForVariantProductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscordSocialConnectSettingsForVariantProductRequest();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('beforePurchaseRequireRoles')) {
                obj['beforePurchaseRequireRoles'] = GuildForDiscordSocialConnectSettingsForVariantProducRequest.constructFromObject(data['beforePurchaseRequireRoles']);
            }
            if (data.hasOwnProperty('beforePurchaseServer')) {
                obj['beforePurchaseServer'] = GuildForDiscordSocialConnectSettingsForVariantProducRequest.constructFromObject(data['beforePurchaseServer']);
            }
            if (data.hasOwnProperty('afterPurchaseServer')) {
                obj['afterPurchaseServer'] = GuildForDiscordSocialConnectSettingsForVariantProducRequest.constructFromObject(data['afterPurchaseServer']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscordSocialConnectSettingsForVariantProductRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscordSocialConnectSettingsForVariantProductRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DiscordSocialConnectSettingsForVariantProductRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `beforePurchaseRequireRoles`
        if (data['beforePurchaseRequireRoles']) { // data not null
          GuildForDiscordSocialConnectSettingsForVariantProducRequest.validateJSON(data['beforePurchaseRequireRoles']);
        }
        // validate the optional field `beforePurchaseServer`
        if (data['beforePurchaseServer']) { // data not null
          GuildForDiscordSocialConnectSettingsForVariantProducRequest.validateJSON(data['beforePurchaseServer']);
        }
        // validate the optional field `afterPurchaseServer`
        if (data['afterPurchaseServer']) { // data not null
          GuildForDiscordSocialConnectSettingsForVariantProducRequest.validateJSON(data['afterPurchaseServer']);
        }

        return true;
    }


}

DiscordSocialConnectSettingsForVariantProductRequest.RequiredProperties = ["enabled", "required"];

/**
 * Is Discord social connect enabled
 * @member {Boolean} enabled
 */
DiscordSocialConnectSettingsForVariantProductRequest.prototype['enabled'] = undefined;

/**
 * Is Discord social connect required
 * @member {Boolean} required
 */
DiscordSocialConnectSettingsForVariantProductRequest.prototype['required'] = undefined;

/**
 * @member {module:model/GuildForDiscordSocialConnectSettingsForVariantProducRequest} beforePurchaseRequireRoles
 */
DiscordSocialConnectSettingsForVariantProductRequest.prototype['beforePurchaseRequireRoles'] = undefined;

/**
 * @member {module:model/GuildForDiscordSocialConnectSettingsForVariantProducRequest} beforePurchaseServer
 */
DiscordSocialConnectSettingsForVariantProductRequest.prototype['beforePurchaseServer'] = undefined;

/**
 * @member {module:model/GuildForDiscordSocialConnectSettingsForVariantProducRequest} afterPurchaseServer
 */
DiscordSocialConnectSettingsForVariantProductRequest.prototype['afterPurchaseServer'] = undefined;






export default DiscordSocialConnectSettingsForVariantProductRequest;
