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
/**
* Enum class ExchangeId.
* @enum {}
* @readonly
*/
export default class ExchangeId {
    
        /**
         * value: "binance"
         * @const
         */
        "binance" = "binance";

    
        /**
         * value: "okx"
         * @const
         */
        "okx" = "okx";

    
        /**
         * value: "deribit"
         * @const
         */
        "deribit" = "deribit";

    
        /**
         * value: "bybit"
         * @const
         */
        "bybit" = "bybit";

    
        /**
         * value: "gate"
         * @const
         */
        "gate" = "gate";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>ExchangeId</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ExchangeId} The enum <code>ExchangeId</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

