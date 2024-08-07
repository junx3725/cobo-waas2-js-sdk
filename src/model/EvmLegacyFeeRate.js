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
import EvmLegacyFeeBasePrice from './EvmLegacyFeeBasePrice';
import FeeType from './FeeType';

/**
 * The EvmLegacyFeeRate model module.
 * @module model/EvmLegacyFeeRate
 */
class EvmLegacyFeeRate {
    /**
     * Constructs a new <code>EvmLegacyFeeRate</code>.
     * The transaction fee rate based on the legacy fee model.
     * @alias module:model/EvmLegacyFeeRate
     * @param fee_type {module:model/FeeType} 
     * @param token_id {String} The token ID of the transaction fee.
     * @param recommended {module:model/EvmLegacyFeeBasePrice} 
     */
    constructor(fee_type, token_id, recommended) { 
        
        EvmLegacyFeeRate.initialize(this, fee_type, token_id, recommended);
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
     * Constructs a <code>EvmLegacyFeeRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmLegacyFeeRate} obj Optional instance to populate.
     * @return {module:model/EvmLegacyFeeRate} The populated <code>EvmLegacyFeeRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmLegacyFeeRate();

            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = ApiClient.convertToType(data['slow'], EvmLegacyFeeBasePrice);
            }
            if (data.hasOwnProperty('recommended')) {
                obj['recommended'] = ApiClient.convertToType(data['recommended'], EvmLegacyFeeBasePrice);
            }
            if (data.hasOwnProperty('fast')) {
                obj['fast'] = ApiClient.convertToType(data['fast'], EvmLegacyFeeBasePrice);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmLegacyFeeRate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmLegacyFeeRate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmLegacyFeeRate.RequiredProperties) {
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
          EvmLegacyFeeBasePrice.validateJSON(data['slow']);
        }
        // validate the optional field `recommended`
        if (data['recommended']) { // data not null
          EvmLegacyFeeBasePrice.validateJSON(data['recommended']);
        }
        // validate the optional field `fast`
        if (data['fast']) { // data not null
          EvmLegacyFeeBasePrice.validateJSON(data['fast']);
        }

        return true;
    }


}

EvmLegacyFeeRate.RequiredProperties = ["fee_type", "token_id", "recommended"];

/**
 * @member {module:model/FeeType} fee_type
 */
EvmLegacyFeeRate.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
EvmLegacyFeeRate.prototype['token_id'] = undefined;

/**
 * @member {module:model/EvmLegacyFeeBasePrice} slow
 */
EvmLegacyFeeRate.prototype['slow'] = undefined;

/**
 * @member {module:model/EvmLegacyFeeBasePrice} recommended
 */
EvmLegacyFeeRate.prototype['recommended'] = undefined;

/**
 * @member {module:model/EvmLegacyFeeBasePrice} fast
 */
EvmLegacyFeeRate.prototype['fast'] = undefined;






export default EvmLegacyFeeRate;

