/**
 * Cobo Wallet as a Service 2.0
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MPCVaultType from './MPCVaultType';

/**
 * The CreateMpcVaultRequest model module.
 * @module model/CreateMpcVaultRequest
 */
class CreateMpcVaultRequest {
    /**
     * Constructs a new <code>CreateMpcVaultRequest</code>.
     * @alias module:model/CreateMpcVaultRequest
     * @param name {String} The vault name.
     * @param vault_type {module:model/MPCVaultType} 
     */
    constructor(name, vault_type) { 
        
        CreateMpcVaultRequest.initialize(this, name, vault_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, vault_type) { 
        obj['name'] = name;
        obj['vault_type'] = vault_type;
    }

    /**
     * Constructs a <code>CreateMpcVaultRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMpcVaultRequest} obj Optional instance to populate.
     * @return {module:model/CreateMpcVaultRequest} The populated <code>CreateMpcVaultRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMpcVaultRequest();

            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('vault_type')) {
                obj['vault_type'] = MPCVaultType.constructFromObject(data['vault_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateMpcVaultRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateMpcVaultRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateMpcVaultRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['project_id'] && !(typeof data['project_id'] === 'string' || data['project_id'] instanceof String)) {
            throw new Error("Expected the field `project_id` to be a primitive type in the JSON string but got " + data['project_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CreateMpcVaultRequest.RequiredProperties = ["name", "vault_type"];

/**
 * The project ID, which you can retrieve by calling [List all projects](/v2/api-references/wallets--mpc-wallets/list-all-projects).  **Notes:** 1. If you set `vault_type` to `OrgControlled`, the value of `project_id` will be ignored. 2. If you set `vault_type` to `UserControlled`, then `project_id` is required. 
 * @member {String} project_id
 */
CreateMpcVaultRequest.prototype['project_id'] = undefined;

/**
 * The vault name.
 * @member {String} name
 */
CreateMpcVaultRequest.prototype['name'] = undefined;

/**
 * @member {module:model/MPCVaultType} vault_type
 */
CreateMpcVaultRequest.prototype['vault_type'] = undefined;






export default CreateMpcVaultRequest;

