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
import FeeType from './FeeType';
import MaxFeeAmount from './MaxFeeAmount';

/**
 * The TransactionRequestFixedFee model module.
 * @module model/TransactionRequestFixedFee
 */
class TransactionRequestFixedFee {
    /**
     * Constructs a new <code>TransactionRequestFixedFee</code>.
     * In the fixed fee model, the transaction fee is a fixed amount within a certain amount of period regardless of the transaction size or network congestion, which can vary between different chains.  You can specify the maximum fee amount to limit the transaction fee. The transaction will fail if the transaction fee exceeds the specified maximum fee amount. 
     * @alias module:model/TransactionRequestFixedFee
     * @implements module:model/MaxFeeAmount
     * @param fee_type {module:model/FeeType} 
     * @param token_id {String} The token ID of the transaction fee.
     */
    constructor(fee_type, token_id) { 
        MaxFeeAmount.initialize(this);
        TransactionRequestFixedFee.initialize(this, fee_type, token_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee_type, token_id) { 
        obj['fee_type'] = fee_type;
        obj['token_id'] = token_id;
    }

    /**
     * Constructs a <code>TransactionRequestFixedFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestFixedFee} obj Optional instance to populate.
     * @return {module:model/TransactionRequestFixedFee} The populated <code>TransactionRequestFixedFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionRequestFixedFee();
            MaxFeeAmount.constructFromObject(data, obj);

            if (data.hasOwnProperty('max_fee_amount')) {
                obj['max_fee_amount'] = ApiClient.convertToType(data['max_fee_amount'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionRequestFixedFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionRequestFixedFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionRequestFixedFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['max_fee_amount'] && !(typeof data['max_fee_amount'] === 'string' || data['max_fee_amount'] instanceof String)) {
            throw new Error("Expected the field `max_fee_amount` to be a primitive type in the JSON string but got " + data['max_fee_amount']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}

TransactionRequestFixedFee.RequiredProperties = ["fee_type", "token_id"];

/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
TransactionRequestFixedFee.prototype['max_fee_amount'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
TransactionRequestFixedFee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
TransactionRequestFixedFee.prototype['token_id'] = undefined;


// Implement MaxFeeAmount interface:
/**
 * The maximum fee that you are willing to pay for the transaction. The transaction will fail if the transaction fee exceeds the maximum fee.
 * @member {String} max_fee_amount
 */
MaxFeeAmount.prototype['max_fee_amount'] = undefined;




export default TransactionRequestFixedFee;

