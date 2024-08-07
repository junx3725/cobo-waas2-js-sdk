/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EvmEip1559FeeBasePrice from './EvmEip1559FeeBasePrice';
import FeeGasLimit from './FeeGasLimit';
import FeeType from './FeeType';

/**
 * The TransactionEvmEip1559Fee model module.
 * @module model/TransactionEvmEip1559Fee
 */
class TransactionEvmEip1559Fee {
    /**
     * Constructs a new <code>TransactionEvmEip1559Fee</code>.
     * The transaction fee actually charged by the chain that uses the EIP-1559 fee model.  The transaction fee is calculated by multiplying the gas price by the used gas units. This can be expressed as: Transaction fee &#x3D; gas price * used gas units. 
     * @alias module:model/TransactionEvmEip1559Fee
     * @implements module:model/EvmEip1559FeeBasePrice
     * @implements module:model/FeeGasLimit
     * @param fee_type {module:model/FeeType} 
     */
    constructor(fee_type) { 
        EvmEip1559FeeBasePrice.initialize(this);FeeGasLimit.initialize(this);
        TransactionEvmEip1559Fee.initialize(this, fee_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee_type) { 
        obj['fee_type'] = fee_type;
    }

    /**
     * Constructs a <code>TransactionEvmEip1559Fee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionEvmEip1559Fee} obj Optional instance to populate.
     * @return {module:model/TransactionEvmEip1559Fee} The populated <code>TransactionEvmEip1559Fee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionEvmEip1559Fee();
            EvmEip1559FeeBasePrice.constructFromObject(data, obj);
            FeeGasLimit.constructFromObject(data, obj);

            if (data.hasOwnProperty('max_fee_per_gas')) {
                obj['max_fee_per_gas'] = ApiClient.convertToType(data['max_fee_per_gas'], 'String');
            }
            if (data.hasOwnProperty('max_priority_fee_per_gas')) {
                obj['max_priority_fee_per_gas'] = ApiClient.convertToType(data['max_priority_fee_per_gas'], 'String');
            }
            if (data.hasOwnProperty('gas_limit')) {
                obj['gas_limit'] = ApiClient.convertToType(data['gas_limit'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('effective_gas_price')) {
                obj['effective_gas_price'] = ApiClient.convertToType(data['effective_gas_price'], 'String');
            }
            if (data.hasOwnProperty('fee_used')) {
                obj['fee_used'] = ApiClient.convertToType(data['fee_used'], 'String');
            }
            if (data.hasOwnProperty('gas_used')) {
                obj['gas_used'] = ApiClient.convertToType(data['gas_used'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionEvmEip1559Fee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionEvmEip1559Fee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionEvmEip1559Fee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['max_fee_per_gas'] && !(typeof data['max_fee_per_gas'] === 'string' || data['max_fee_per_gas'] instanceof String)) {
            throw new Error("Expected the field `max_fee_per_gas` to be a primitive type in the JSON string but got " + data['max_fee_per_gas']);
        }
        // ensure the json data is a string
        if (data['max_priority_fee_per_gas'] && !(typeof data['max_priority_fee_per_gas'] === 'string' || data['max_priority_fee_per_gas'] instanceof String)) {
            throw new Error("Expected the field `max_priority_fee_per_gas` to be a primitive type in the JSON string but got " + data['max_priority_fee_per_gas']);
        }
        // ensure the json data is a string
        if (data['gas_limit'] && !(typeof data['gas_limit'] === 'string' || data['gas_limit'] instanceof String)) {
            throw new Error("Expected the field `gas_limit` to be a primitive type in the JSON string but got " + data['gas_limit']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['effective_gas_price'] && !(typeof data['effective_gas_price'] === 'string' || data['effective_gas_price'] instanceof String)) {
            throw new Error("Expected the field `effective_gas_price` to be a primitive type in the JSON string but got " + data['effective_gas_price']);
        }
        // ensure the json data is a string
        if (data['fee_used'] && !(typeof data['fee_used'] === 'string' || data['fee_used'] instanceof String)) {
            throw new Error("Expected the field `fee_used` to be a primitive type in the JSON string but got " + data['fee_used']);
        }
        // ensure the json data is a string
        if (data['gas_used'] && !(typeof data['gas_used'] === 'string' || data['gas_used'] instanceof String)) {
            throw new Error("Expected the field `gas_used` to be a primitive type in the JSON string but got " + data['gas_used']);
        }

        return true;
    }


}

TransactionEvmEip1559Fee.RequiredProperties = ["fee_type"];

/**
 * The maximum gas fee per gas unit used on the chain, in wei.
 * @member {String} max_fee_per_gas
 */
TransactionEvmEip1559Fee.prototype['max_fee_per_gas'] = undefined;

/**
 * The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee_per_gas
 */
TransactionEvmEip1559Fee.prototype['max_priority_fee_per_gas'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
TransactionEvmEip1559Fee.prototype['gas_limit'] = '21000';

/**
 * @member {module:model/FeeType} fee_type
 */
TransactionEvmEip1559Fee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
TransactionEvmEip1559Fee.prototype['token_id'] = undefined;

/**
 * The gas price (gas fee per gas unit) on the chain, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions.
 * @member {String} effective_gas_price
 */
TransactionEvmEip1559Fee.prototype['effective_gas_price'] = undefined;

/**
 * The transaction fee.
 * @member {String} fee_used
 */
TransactionEvmEip1559Fee.prototype['fee_used'] = undefined;

/**
 * The number of gas units used in the transaction.
 * @member {String} gas_used
 */
TransactionEvmEip1559Fee.prototype['gas_used'] = undefined;


// Implement EvmEip1559FeeBasePrice interface:
/**
 * The maximum gas fee per gas unit used on the chain, in wei.
 * @member {String} max_fee_per_gas
 */
EvmEip1559FeeBasePrice.prototype['max_fee_per_gas'] = undefined;
/**
 * The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee_per_gas
 */
EvmEip1559FeeBasePrice.prototype['max_priority_fee_per_gas'] = undefined;
// Implement FeeGasLimit interface:
/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
FeeGasLimit.prototype['gas_limit'] = '21000';




export default TransactionEvmEip1559Fee;

