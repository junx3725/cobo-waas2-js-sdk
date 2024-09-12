/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TransactionUtxo from './TransactionUtxo';
import WalletSubtype from './WalletSubtype';

/**
 * The MpcTransferSource model module.
 * @module model/MpcTransferSource
 */
class MpcTransferSource {
    /**
     * Constructs a new <code>MpcTransferSource</code>.
     * The information about the transaction source types &#x60;Org-Controlled&#x60; and &#x60;User-Controlled&#x60;. Refer to [Transaction sources and destinations](/v2/guides/transactions/sources-and-destinations) for a detailed introduction about the supported sources and destinations for each transaction type.  If you specify both the &#x60;address&#x60; or &#x60;included_utxos&#x60; properties, the specified included UTXOs must belong to the address.  Switch between the tabs to display the properties for different transaction sources. 
     * @alias module:model/MpcTransferSource
     * @param source_type {module:model/WalletSubtype} 
     * @param wallet_id {String} The wallet ID.
     */
    constructor(source_type, wallet_id) { 
        
        MpcTransferSource.initialize(this, source_type, wallet_id);
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
     * Constructs a <code>MpcTransferSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MpcTransferSource} obj Optional instance to populate.
     * @return {module:model/MpcTransferSource} The populated <code>MpcTransferSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MpcTransferSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = WalletSubtype.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('included_utxos')) {
                obj['included_utxos'] = ApiClient.convertToType(data['included_utxos'], [TransactionUtxo]);
            }
            if (data.hasOwnProperty('excluded_utxos')) {
                obj['excluded_utxos'] = ApiClient.convertToType(data['excluded_utxos'], [TransactionUtxo]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MpcTransferSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MpcTransferSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MpcTransferSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        if (data['included_utxos']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['included_utxos'])) {
                throw new Error("Expected the field `included_utxos` to be an array in the JSON data but got " + data['included_utxos']);
            }
            // validate the optional field `included_utxos` (array)
            for (const item of data['included_utxos']) {
                TransactionUtxo.validateJSON(item);
            };
        }
        if (data['excluded_utxos']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['excluded_utxos'])) {
                throw new Error("Expected the field `excluded_utxos` to be an array in the JSON data but got " + data['excluded_utxos']);
            }
            // validate the optional field `excluded_utxos` (array)
            for (const item of data['excluded_utxos']) {
                TransactionUtxo.validateJSON(item);
            };
        }

        return true;
    }


}

MpcTransferSource.RequiredProperties = ["source_type", "wallet_id"];

/**
 * @member {module:model/WalletSubtype} source_type
 */
MpcTransferSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
MpcTransferSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
MpcTransferSource.prototype['address'] = undefined;

/**
 * @member {Array.<module:model/TransactionUtxo>} included_utxos
 */
MpcTransferSource.prototype['included_utxos'] = undefined;

/**
 * @member {Array.<module:model/TransactionUtxo>} excluded_utxos
 */
MpcTransferSource.prototype['excluded_utxos'] = undefined;






export default MpcTransferSource;

