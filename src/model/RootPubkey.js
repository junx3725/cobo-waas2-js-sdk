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
import CurveType from './CurveType';

/**
 * The RootPubkey model module.
 * @module model/RootPubkey
 */
class RootPubkey {
    /**
     * Constructs a new <code>RootPubkey</code>.
     * The data for MPC Root Extended Public Key information.
     * @alias module:model/RootPubkey
     */
    constructor() { 
        
        RootPubkey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RootPubkey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RootPubkey} obj Optional instance to populate.
     * @return {module:model/RootPubkey} The populated <code>RootPubkey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RootPubkey();

            if (data.hasOwnProperty('root_pubkey')) {
                obj['root_pubkey'] = ApiClient.convertToType(data['root_pubkey'], 'String');
            }
            if (data.hasOwnProperty('curve')) {
                obj['curve'] = CurveType.constructFromObject(data['curve']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RootPubkey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RootPubkey</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['root_pubkey'] && !(typeof data['root_pubkey'] === 'string' || data['root_pubkey'] instanceof String)) {
            throw new Error("Expected the field `root_pubkey` to be a primitive type in the JSON string but got " + data['root_pubkey']);
        }

        return true;
    }


}



/**
 * The vault's [root extended public key](https://manuals.cobo.com/en/portal/mpc-wallets/ocw/tss-node-deployment#tss-node-on-cobo-portal-and-mpc-root-extended-public-key).
 * @member {String} root_pubkey
 */
RootPubkey.prototype['root_pubkey'] = undefined;

/**
 * @member {module:model/CurveType} curve
 */
RootPubkey.prototype['curve'] = undefined;






export default RootPubkey;

