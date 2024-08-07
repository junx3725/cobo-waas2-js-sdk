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
import EvmEip1559FeeBasePrice from './EvmEip1559FeeBasePrice';
import FeeGasLimit from './FeeGasLimit';

/**
 * The EstimatedEvmEip1559FeeSlow model module.
 * @module model/EstimatedEvmEip1559FeeSlow
 */
class EstimatedEvmEip1559FeeSlow {
    /**
     * Constructs a new <code>EstimatedEvmEip1559FeeSlow</code>.
     * @alias module:model/EstimatedEvmEip1559FeeSlow
     * @implements module:model/EvmEip1559FeeBasePrice
     * @implements module:model/FeeGasLimit
     * @param max_fee_per_gas {String} The maximum gas fee per gas unit used on the chain, in wei.
     * @param max_priority_fee_per_gas {String} The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
     * @param gas_limit {String} The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
     */
    constructor(max_fee_per_gas, max_priority_fee_per_gas, gas_limit) { 
        EvmEip1559FeeBasePrice.initialize(this);FeeGasLimit.initialize(this);
        EstimatedEvmEip1559FeeSlow.initialize(this, max_fee_per_gas, max_priority_fee_per_gas, gas_limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, max_fee_per_gas, max_priority_fee_per_gas, gas_limit) { 
        obj['max_fee_per_gas'] = max_fee_per_gas;
        obj['max_priority_fee_per_gas'] = max_priority_fee_per_gas;
        obj['gas_limit'] = gas_limit || '21000';
    }

    /**
     * Constructs a <code>EstimatedEvmEip1559FeeSlow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimatedEvmEip1559FeeSlow} obj Optional instance to populate.
     * @return {module:model/EstimatedEvmEip1559FeeSlow} The populated <code>EstimatedEvmEip1559FeeSlow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimatedEvmEip1559FeeSlow();
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimatedEvmEip1559FeeSlow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimatedEvmEip1559FeeSlow</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimatedEvmEip1559FeeSlow.RequiredProperties) {
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

        return true;
    }


}

EstimatedEvmEip1559FeeSlow.RequiredProperties = ["max_fee_per_gas", "max_priority_fee_per_gas", "gas_limit"];

/**
 * The maximum gas fee per gas unit used on the chain, in wei.
 * @member {String} max_fee_per_gas
 */
EstimatedEvmEip1559FeeSlow.prototype['max_fee_per_gas'] = undefined;

/**
 * The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee_per_gas
 */
EstimatedEvmEip1559FeeSlow.prototype['max_priority_fee_per_gas'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 * @default '21000'
 */
EstimatedEvmEip1559FeeSlow.prototype['gas_limit'] = '21000';


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




export default EstimatedEvmEip1559FeeSlow;

