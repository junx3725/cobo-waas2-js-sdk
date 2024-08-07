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
import CustodialWalletInfo from './CustodialWalletInfo';
import ExchangeId from './ExchangeId';
import ExchangeWalletInfo from './ExchangeWalletInfo';
import MPCWalletInfo from './MPCWalletInfo';
import SmartContractInitiator from './SmartContractInitiator';
import SmartContractWalletInfo from './SmartContractWalletInfo';
import SmartContractWalletType from './SmartContractWalletType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The WalletInfo model module.
 * @module model/WalletInfo
 */
class WalletInfo {
    /**
     * Constructs a new <code>WalletInfo</code>.
     * @alias module:model/WalletInfo
     * @param {(module:model/CustodialWalletInfo|module:model/ExchangeWalletInfo|module:model/MPCWalletInfo|module:model/SmartContractWalletInfo)} instance The actual instance to initialize WalletInfo.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof CustodialWalletInfo) {
                this.actualInstance = instance;
            } else if(CustodialWalletInfo.validateJSON(instance)){
                // plain JS object
                // create CustodialWalletInfo from JS object
                this.actualInstance = CustodialWalletInfo.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CustodialWalletInfo
            errorMessages.push("Failed to construct CustodialWalletInfo: " + err)
        }

        try {
            if (instance instanceof MPCWalletInfo) {
                this.actualInstance = instance;
            } else if(MPCWalletInfo.validateJSON(instance)){
                // plain JS object
                // create MPCWalletInfo from JS object
                this.actualInstance = MPCWalletInfo.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MPCWalletInfo
            errorMessages.push("Failed to construct MPCWalletInfo: " + err)
        }

        try {
            if (instance instanceof SmartContractWalletInfo) {
                this.actualInstance = instance;
            } else if(SmartContractWalletInfo.validateJSON(instance)){
                // plain JS object
                // create SmartContractWalletInfo from JS object
                this.actualInstance = SmartContractWalletInfo.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SmartContractWalletInfo
            errorMessages.push("Failed to construct SmartContractWalletInfo: " + err)
        }

        try {
            if (instance instanceof ExchangeWalletInfo) {
                this.actualInstance = instance;
            } else if(ExchangeWalletInfo.validateJSON(instance)){
                // plain JS object
                // create ExchangeWalletInfo from JS object
                this.actualInstance = ExchangeWalletInfo.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ExchangeWalletInfo
            errorMessages.push("Failed to construct ExchangeWalletInfo: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `WalletInfo` with oneOf schemas CustodialWalletInfo, ExchangeWalletInfo, MPCWalletInfo, SmartContractWalletInfo. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `WalletInfo` with oneOf schemas CustodialWalletInfo, ExchangeWalletInfo, MPCWalletInfo, SmartContractWalletInfo. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>WalletInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletInfo} obj Optional instance to populate.
     * @return {module:model/WalletInfo} The populated <code>WalletInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        return new WalletInfo(data);
    }

    /**
     * Gets the actual instance, which can be <code>CustodialWalletInfo</code>, <code>ExchangeWalletInfo</code>, <code>MPCWalletInfo</code>, <code>SmartContractWalletInfo</code>.
     * @return {(module:model/CustodialWalletInfo|module:model/ExchangeWalletInfo|module:model/MPCWalletInfo|module:model/SmartContractWalletInfo)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CustodialWalletInfo</code>, <code>ExchangeWalletInfo</code>, <code>MPCWalletInfo</code>, <code>SmartContractWalletInfo</code>.
     * @param {(module:model/CustodialWalletInfo|module:model/ExchangeWalletInfo|module:model/MPCWalletInfo|module:model/SmartContractWalletInfo)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = WalletInfo.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of WalletInfo from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/WalletInfo} An instance of WalletInfo.
     */
    static fromJSON = function(json_string){
        return WalletInfo.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
WalletInfo.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
WalletInfo.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
WalletInfo.prototype['wallet_subtype'] = undefined;

/**
 * The wallet name.
 * @member {String} name
 */
WalletInfo.prototype['name'] = undefined;

/**
 * The ID of the owning organization.
 * @member {String} org_id
 */
WalletInfo.prototype['org_id'] = undefined;

/**
 * The project ID.
 * @member {String} project_id
 */
WalletInfo.prototype['project_id'] = undefined;

/**
 * The ID of the owning vault.
 * @member {String} vault_id
 */
WalletInfo.prototype['vault_id'] = undefined;

/**
 * The API key of your exchange account.
 * @member {String} apikey
 */
WalletInfo.prototype['apikey'] = undefined;

/**
 * @member {module:model/ExchangeId} exchange_id
 */
WalletInfo.prototype['exchange_id'] = undefined;

/**
 * The wallet ID of the Main Account associated with the Sub Account. This property is returned only if you are creating or querying an Exchange Wallet (Sub Account).
 * @member {String} main_wallet_id
 */
WalletInfo.prototype['main_wallet_id'] = undefined;


WalletInfo.OneOf = ["CustodialWalletInfo", "ExchangeWalletInfo", "MPCWalletInfo", "SmartContractWalletInfo"];

export default WalletInfo;

