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
/**
* Enum class EstimateFeeRequestType.
* @enum {}
* @readonly
*/
export default class EstimateFeeRequestType {
    
        /**
         * value: "Transfer"
         * @const
         */
        "Transfer" = "Transfer";

    
        /**
         * value: "ContractCall"
         * @const
         */
        "ContractCall" = "ContractCall";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>EstimateFeeRequestType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EstimateFeeRequestType} The enum <code>EstimateFeeRequestType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

