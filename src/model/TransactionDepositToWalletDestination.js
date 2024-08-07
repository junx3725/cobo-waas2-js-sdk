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
import ExchangeId from './ExchangeId';
import TransactionDestinationType from './TransactionDestinationType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The TransactionDepositToWalletDestination model module.
 * @module model/TransactionDepositToWalletDestination
 */
class TransactionDepositToWalletDestination {
    /**
     * Constructs a new <code>TransactionDepositToWalletDestination</code>.
     * Information about the transaction destination type &#x60;DepositToWallet&#x60;. 
     * @alias module:model/TransactionDepositToWalletDestination
     * @param destination_type {module:model/TransactionDestinationType} 
     * @param wallet_id {String} The wallet ID.
     * @param wallet_type {module:model/WalletType} 
     * @param wallet_subtype {module:model/WalletSubtype} 
     * @param amount {String} The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is `1.5`. 
     */
    constructor(destination_type, wallet_id, wallet_type, wallet_subtype, amount) { 
        
        TransactionDepositToWalletDestination.initialize(this, destination_type, wallet_id, wallet_type, wallet_subtype, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type, wallet_id, wallet_type, wallet_subtype, amount) { 
        obj['destination_type'] = destination_type;
        obj['wallet_id'] = wallet_id;
        obj['wallet_type'] = wallet_type;
        obj['wallet_subtype'] = wallet_subtype;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>TransactionDepositToWalletDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDepositToWalletDestination} obj Optional instance to populate.
     * @return {module:model/TransactionDepositToWalletDestination} The populated <code>TransactionDepositToWalletDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDepositToWalletDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TransactionDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('sub_wallet_id')) {
                obj['sub_wallet_id'] = ApiClient.convertToType(data['sub_wallet_id'], 'String');
            }
            if (data.hasOwnProperty('exchange_id')) {
                obj['exchange_id'] = ExchangeId.constructFromObject(data['exchange_id']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionDepositToWalletDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionDepositToWalletDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionDepositToWalletDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is a string
        if (data['sub_wallet_id'] && !(typeof data['sub_wallet_id'] === 'string' || data['sub_wallet_id'] instanceof String)) {
            throw new Error("Expected the field `sub_wallet_id` to be a primitive type in the JSON string but got " + data['sub_wallet_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

TransactionDepositToWalletDestination.RequiredProperties = ["destination_type", "wallet_id", "wallet_type", "wallet_subtype", "amount"];

/**
 * @member {module:model/TransactionDestinationType} destination_type
 */
TransactionDepositToWalletDestination.prototype['destination_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionDepositToWalletDestination.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
TransactionDepositToWalletDestination.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
TransactionDepositToWalletDestination.prototype['wallet_subtype'] = undefined;

/**
 * The exchange trading account or the sub-wallet ID.
 * @member {String} sub_wallet_id
 */
TransactionDepositToWalletDestination.prototype['sub_wallet_id'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
TransactionDepositToWalletDestination.prototype['exchange_id'] = undefined;

/**
 * The quantity of the token in the transaction. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} amount
 */
TransactionDepositToWalletDestination.prototype['amount'] = undefined;






export default TransactionDepositToWalletDestination;

