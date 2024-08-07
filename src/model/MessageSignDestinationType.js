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
/**
* Enum class MessageSignDestinationType.
* @enum {}
* @readonly
*/
export default class MessageSignDestinationType {
    
        /**
         * value: "EVM_EIP_191_Signature"
         * @const
         */
        "191_Signature" = "EVM_EIP_191_Signature";

    
        /**
         * value: "EVM_EIP_712_Signature"
         * @const
         */
        "712_Signature" = "EVM_EIP_712_Signature";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>MessageSignDestinationType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MessageSignDestinationType} The enum <code>MessageSignDestinationType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

