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
import StakeSourceType from './StakeSourceType';

/**
 * The BaseStakeSource model module.
 * @module model/BaseStakeSource
 */
class BaseStakeSource {
    /**
     * Constructs a new <code>BaseStakeSource</code>.
     * The information about the staking source.
     * @alias module:model/BaseStakeSource
     * @param source_type {module:model/StakeSourceType} 
     * @param wallet_id {String} The wallet ID.
     * @param address {String} The wallet address.
     */
    constructor(source_type, wallet_id, address) { 
        
        BaseStakeSource.initialize(this, source_type, wallet_id, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type, wallet_id, address) { 
        obj['source_type'] = source_type;
        obj['wallet_id'] = wallet_id;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>BaseStakeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseStakeSource} obj Optional instance to populate.
     * @return {module:model/BaseStakeSource} The populated <code>BaseStakeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseStakeSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = StakeSourceType.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseStakeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseStakeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BaseStakeSource.RequiredProperties) {
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

        return true;
    }


}

BaseStakeSource.RequiredProperties = ["source_type", "wallet_id", "address"];

/**
 * @member {module:model/StakeSourceType} source_type
 */
BaseStakeSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
BaseStakeSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
BaseStakeSource.prototype['address'] = undefined;






export default BaseStakeSource;

