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
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The CustodialWalletInfo model module.
 * @module model/CustodialWalletInfo
 */
class CustodialWalletInfo {
    /**
     * Constructs a new <code>CustodialWalletInfo</code>.
     * The basic information of a wallet.
     * @alias module:model/CustodialWalletInfo
     * @param wallet_id {String} The wallet ID.
     * @param wallet_type {module:model/WalletType} 
     * @param wallet_subtype {module:model/WalletSubtype} 
     * @param name {String} The wallet name.
     * @param org_id {String} The ID of the owning organization.
     */
    constructor(wallet_id, wallet_type, wallet_subtype, name, org_id) { 
        
        CustodialWalletInfo.initialize(this, wallet_id, wallet_type, wallet_subtype, name, org_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, wallet_id, wallet_type, wallet_subtype, name, org_id) { 
        obj['wallet_id'] = wallet_id;
        obj['wallet_type'] = wallet_type;
        obj['wallet_subtype'] = wallet_subtype;
        obj['name'] = name;
        obj['org_id'] = org_id;
    }

    /**
     * Constructs a <code>CustodialWalletInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustodialWalletInfo} obj Optional instance to populate.
     * @return {module:model/CustodialWalletInfo} The populated <code>CustodialWalletInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustodialWalletInfo();

            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustodialWalletInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustodialWalletInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustodialWalletInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['org_id'] && !(typeof data['org_id'] === 'string' || data['org_id'] instanceof String)) {
            throw new Error("Expected the field `org_id` to be a primitive type in the JSON string but got " + data['org_id']);
        }

        return true;
    }


}

CustodialWalletInfo.RequiredProperties = ["wallet_id", "wallet_type", "wallet_subtype", "name", "org_id"];

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
CustodialWalletInfo.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
CustodialWalletInfo.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
CustodialWalletInfo.prototype['wallet_subtype'] = undefined;

/**
 * The wallet name.
 * @member {String} name
 */
CustodialWalletInfo.prototype['name'] = undefined;

/**
 * The ID of the owning organization.
 * @member {String} org_id
 */
CustodialWalletInfo.prototype['org_id'] = undefined;






export default CustodialWalletInfo;

