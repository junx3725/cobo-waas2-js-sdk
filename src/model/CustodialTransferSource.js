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

/**
 * The CustodialTransferSource model module.
 * @module model/CustodialTransferSource
 */
class CustodialTransferSource {
    /**
     * Constructs a new <code>CustodialTransferSource</code>.
     * The information about the transaction source types &#x60;Asset&#x60; and &#x60;Web3&#x60;.
     * @alias module:model/CustodialTransferSource
     * @param source_type {module:model/WalletSubtype} 
     * @param wallet_id {String} The wallet ID.
     */
    constructor(source_type, wallet_id) { 
        
        CustodialTransferSource.initialize(this, source_type, wallet_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type, wallet_id) { 
        obj['source_type'] = source_type;
        obj['wallet_id'] = wallet_id;
    }

    /**
     * Constructs a <code>CustodialTransferSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustodialTransferSource} obj Optional instance to populate.
     * @return {module:model/CustodialTransferSource} The populated <code>CustodialTransferSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustodialTransferSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = WalletSubtype.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustodialTransferSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustodialTransferSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustodialTransferSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }

        return true;
    }


}

CustodialTransferSource.RequiredProperties = ["source_type", "wallet_id"];

/**
 * @member {module:model/WalletSubtype} source_type
 */
CustodialTransferSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
CustodialTransferSource.prototype['wallet_id'] = undefined;






export default CustodialTransferSource;

