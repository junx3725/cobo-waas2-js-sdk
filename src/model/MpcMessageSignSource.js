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
import MessageSignSourceType from './MessageSignSourceType';

/**
 * The MpcMessageSignSource model module.
 * @module model/MpcMessageSignSource
 */
class MpcMessageSignSource {
    /**
     * Constructs a new <code>MpcMessageSignSource</code>.
     * @alias module:model/MpcMessageSignSource
     * @param source_type {module:model/MessageSignSourceType} 
     * @param wallet_id {String} The wallet ID.
     * @param address {String} The wallet address.
     */
    constructor(source_type, wallet_id, address) { 
        
        MpcMessageSignSource.initialize(this, source_type, wallet_id, address);
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
     * Constructs a <code>MpcMessageSignSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MpcMessageSignSource} obj Optional instance to populate.
     * @return {module:model/MpcMessageSignSource} The populated <code>MpcMessageSignSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MpcMessageSignSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = MessageSignSourceType.constructFromObject(data['source_type']);
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
     * Validates the JSON data with respect to <code>MpcMessageSignSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MpcMessageSignSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MpcMessageSignSource.RequiredProperties) {
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

MpcMessageSignSource.RequiredProperties = ["source_type", "wallet_id", "address"];

/**
 * @member {module:model/MessageSignSourceType} source_type
 */
MpcMessageSignSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
MpcMessageSignSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
MpcMessageSignSource.prototype['address'] = undefined;






export default MpcMessageSignSource;

