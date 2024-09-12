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
import FeeType from './FeeType';
import UtxoFeeBasePrice from './UtxoFeeBasePrice';

/**
 * The UtxoFeeRate model module.
 * @module model/UtxoFeeRate
 */
class UtxoFeeRate {
    /**
     * Constructs a new <code>UtxoFeeRate</code>.
     * The transaction fee rate for UTXO-based chains.
     * @alias module:model/UtxoFeeRate
     * @param fee_type {module:model/FeeType} 
     * @param token_id {String} The token ID of the transaction fee.
     * @param recommended {module:model/UtxoFeeBasePrice} 
     */
    constructor(fee_type, token_id, recommended) { 
        
        UtxoFeeRate.initialize(this, fee_type, token_id, recommended);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee_type, token_id, recommended) { 
        obj['fee_type'] = fee_type;
        obj['token_id'] = token_id;
        obj['recommended'] = recommended;
    }

    /**
     * Constructs a <code>UtxoFeeRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UtxoFeeRate} obj Optional instance to populate.
     * @return {module:model/UtxoFeeRate} The populated <code>UtxoFeeRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UtxoFeeRate();

            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = ApiClient.convertToType(data['slow'], UtxoFeeBasePrice);
            }
            if (data.hasOwnProperty('recommended')) {
                obj['recommended'] = ApiClient.convertToType(data['recommended'], UtxoFeeBasePrice);
            }
            if (data.hasOwnProperty('fast')) {
                obj['fast'] = ApiClient.convertToType(data['fast'], UtxoFeeBasePrice);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UtxoFeeRate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UtxoFeeRate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UtxoFeeRate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // validate the optional field `slow`
        if (data['slow']) { // data not null
          if (!!UtxoFeeBasePrice.validateJSON) {
            UtxoFeeBasePrice.validateJSON(data['slow']);
          }
        }
        // validate the optional field `recommended`
        if (data['recommended']) { // data not null
          if (!!UtxoFeeBasePrice.validateJSON) {
            UtxoFeeBasePrice.validateJSON(data['recommended']);
          }
        }
        // validate the optional field `fast`
        if (data['fast']) { // data not null
          if (!!UtxoFeeBasePrice.validateJSON) {
            UtxoFeeBasePrice.validateJSON(data['fast']);
          }
        }

        return true;
    }


}

UtxoFeeRate.RequiredProperties = ["fee_type", "token_id", "recommended"];

/**
 * @member {module:model/FeeType} fee_type
 */
UtxoFeeRate.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
UtxoFeeRate.prototype['token_id'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} slow
 */
UtxoFeeRate.prototype['slow'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} recommended
 */
UtxoFeeRate.prototype['recommended'] = undefined;

/**
 * @member {module:model/UtxoFeeBasePrice} fast
 */
UtxoFeeRate.prototype['fast'] = undefined;






export default UtxoFeeRate;

