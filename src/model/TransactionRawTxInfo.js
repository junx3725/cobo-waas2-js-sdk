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

/**
 * The TransactionRawTxInfo model module.
 * @module model/TransactionRawTxInfo
 */
class TransactionRawTxInfo {
    /**
     * Constructs a new <code>TransactionRawTxInfo</code>.
     * The raw transaction information.
     * @alias module:model/TransactionRawTxInfo
     */
    constructor() { 
        
        TransactionRawTxInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionRawTxInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRawTxInfo} obj Optional instance to populate.
     * @return {module:model/TransactionRawTxInfo} The populated <code>TransactionRawTxInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRawTxInfo();

            if (data.hasOwnProperty('used_nonce')) {
                obj['used_nonce'] = ApiClient.convertToType(data['used_nonce'], 'Number');
            }
            if (data.hasOwnProperty('selected_utxos')) {
                obj['selected_utxos'] = ApiClient.convertToType(data['selected_utxos'], [TransactionUtxo]);
            }
            if (data.hasOwnProperty('raw_tx')) {
                obj['raw_tx'] = ApiClient.convertToType(data['raw_tx'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionRawTxInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionRawTxInfo</code>.
     */
    static validateJSON(data) {
        if (data['selected_utxos']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['selected_utxos'])) {
                throw new Error("Expected the field `selected_utxos` to be an array in the JSON data but got " + data['selected_utxos']);
            }
            // validate the optional field `selected_utxos` (array)
            for (const item of data['selected_utxos']) {
                TransactionUtxo.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['raw_tx'] && !(typeof data['raw_tx'] === 'string' || data['raw_tx'] instanceof String)) {
            throw new Error("Expected the field `raw_tx` to be a primitive type in the JSON string but got " + data['raw_tx']);
        }

        return true;
    }


}



/**
 * The transaction nonce.
 * @member {Number} used_nonce
 */
TransactionRawTxInfo.prototype['used_nonce'] = undefined;

/**
 * The selected UTXOs to be consumed in the transaction.
 * @member {Array.<module:model/TransactionUtxo>} selected_utxos
 */
TransactionRawTxInfo.prototype['selected_utxos'] = undefined;

/**
 * The raw transaction data.
 * @member {String} raw_tx
 */
TransactionRawTxInfo.prototype['raw_tx'] = undefined;






export default TransactionRawTxInfo;

