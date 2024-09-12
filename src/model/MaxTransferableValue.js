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
import TransactionRequestFee from './TransactionRequestFee';

/**
 * The MaxTransferableValue model module.
 * @module model/MaxTransferableValue
 */
class MaxTransferableValue {
    /**
     * Constructs a new <code>MaxTransferableValue</code>.
     * The maximum amount you can transfer from the wallet or the specified wallet address, along with the corresponding transaction fee.
     * @alias module:model/MaxTransferableValue
     */
    constructor() { 
        
        MaxTransferableValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MaxTransferableValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaxTransferableValue} obj Optional instance to populate.
     * @return {module:model/MaxTransferableValue} The populated <code>MaxTransferableValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaxTransferableValue();

            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('max_transferable_value')) {
                obj['max_transferable_value'] = ApiClient.convertToType(data['max_transferable_value'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MaxTransferableValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MaxTransferableValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['max_transferable_value'] && !(typeof data['max_transferable_value'] === 'string' || data['max_transferable_value'] instanceof String)) {
            throw new Error("Expected the field `max_transferable_value` to be a primitive type in the JSON string but got " + data['max_transferable_value']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          if (!!TransactionRequestFee.validateJSON) {
            TransactionRequestFee.validateJSON(data['fee']);
          }
        }

        return true;
    }


}



/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
MaxTransferableValue.prototype['token_id'] = undefined;

/**
 * The maximum amount you can transfer from the wallet or the specified wallet address.
 * @member {String} max_transferable_value
 */
MaxTransferableValue.prototype['max_transferable_value'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
MaxTransferableValue.prototype['fee'] = undefined;






export default MaxTransferableValue;

