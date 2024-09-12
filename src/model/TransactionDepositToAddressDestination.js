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
import TransactionDestinationType from './TransactionDestinationType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The TransactionDepositToAddressDestination model module.
 * @module model/TransactionDepositToAddressDestination
 */
class TransactionDepositToAddressDestination {
    /**
     * Constructs a new <code>TransactionDepositToAddressDestination</code>.
     * Information about the transaction destination type &#x60;DepositToAddress&#x60;. Refer to [Transaction sources and destinations](/v2/guides/transactions/sources-and-destinations) for a detailed introduction about the supported sources and destinations for each transaction type.  Switch between the tabs to display the properties for different transaction destinations. 
     * @alias module:model/TransactionDepositToAddressDestination
     * @param destination_type {module:model/TransactionDestinationType} 
     * @param wallet_id {String} The wallet ID.
     * @param wallet_type {module:model/WalletType} 
     * @param address {String} The destination address.
     * @param amount {String} The transfer amount. For example, if you trade 1.5 BTC, then the value is `1.5`. 
     */
    constructor(destination_type, wallet_id, wallet_type, address, amount) { 
        
        TransactionDepositToAddressDestination.initialize(this, destination_type, wallet_id, wallet_type, address, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type, wallet_id, wallet_type, address, amount) { 
        obj['destination_type'] = destination_type;
        obj['wallet_id'] = wallet_id;
        obj['wallet_type'] = wallet_type;
        obj['address'] = address;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>TransactionDepositToAddressDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDepositToAddressDestination} obj Optional instance to populate.
     * @return {module:model/TransactionDepositToAddressDestination} The populated <code>TransactionDepositToAddressDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDepositToAddressDestination();

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
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionDepositToAddressDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionDepositToAddressDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionDepositToAddressDestination.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

TransactionDepositToAddressDestination.RequiredProperties = ["destination_type", "wallet_id", "wallet_type", "address", "amount"];

/**
 * @member {module:model/TransactionDestinationType} destination_type
 */
TransactionDepositToAddressDestination.prototype['destination_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionDepositToAddressDestination.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
TransactionDepositToAddressDestination.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
TransactionDepositToAddressDestination.prototype['wallet_subtype'] = undefined;

/**
 * The destination address.
 * @member {String} address
 */
TransactionDepositToAddressDestination.prototype['address'] = undefined;

/**
 * The memo that identifies a transaction in order to credit the correct account. For transfers out of Cobo Portal, it is highly recommended to include a memo for the chains such as XRP, EOS, XLM, IOST, BNB_BNB, ATOM, LUNA, and TON.
 * @member {String} memo
 */
TransactionDepositToAddressDestination.prototype['memo'] = undefined;

/**
 * The transfer amount. For example, if you trade 1.5 BTC, then the value is `1.5`. 
 * @member {String} amount
 */
TransactionDepositToAddressDestination.prototype['amount'] = undefined;






export default TransactionDepositToAddressDestination;

