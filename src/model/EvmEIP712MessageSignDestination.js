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
import MessageSignDestinationType from './MessageSignDestinationType';

/**
 * The EvmEIP712MessageSignDestination model module.
 * @module model/EvmEIP712MessageSignDestination
 */
class EvmEIP712MessageSignDestination {
    /**
     * Constructs a new <code>EvmEIP712MessageSignDestination</code>.
     * The information about the destination &#x60;EVM_EIP_712_Signature&#x60;.
     * @alias module:model/EvmEIP712MessageSignDestination
     * @param destination_type {module:model/MessageSignDestinationType} 
     * @param structured_data {Object.<String, Object>} The structured data to be signed, formatted as a JSON object according to the EIP-712 standard.
     */
    constructor(destination_type, structured_data) { 
        
        EvmEIP712MessageSignDestination.initialize(this, destination_type, structured_data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type, structured_data) { 
        obj['destination_type'] = destination_type;
        obj['structured_data'] = structured_data;
    }

    /**
     * Constructs a <code>EvmEIP712MessageSignDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmEIP712MessageSignDestination} obj Optional instance to populate.
     * @return {module:model/EvmEIP712MessageSignDestination} The populated <code>EvmEIP712MessageSignDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmEIP712MessageSignDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = MessageSignDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('structured_data')) {
                obj['structured_data'] = ApiClient.convertToType(data['structured_data'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmEIP712MessageSignDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmEIP712MessageSignDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EvmEIP712MessageSignDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

EvmEIP712MessageSignDestination.RequiredProperties = ["destination_type", "structured_data"];

/**
 * @member {module:model/MessageSignDestinationType} destination_type
 */
EvmEIP712MessageSignDestination.prototype['destination_type'] = undefined;

/**
 * The structured data to be signed, formatted as a JSON object according to the EIP-712 standard.
 * @member {Object.<String, Object>} structured_data
 */
EvmEIP712MessageSignDestination.prototype['structured_data'] = undefined;






export default EvmEIP712MessageSignDestination;

