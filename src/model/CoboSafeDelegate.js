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
import CoboSafeDelegateType from './CoboSafeDelegateType';
import MPCDelegate from './MPCDelegate';

/**
 * The CoboSafeDelegate model module.
 * @module model/CoboSafeDelegate
 */
class CoboSafeDelegate {
    /**
     * Constructs a new <code>CoboSafeDelegate</code>.
     * @alias module:model/CoboSafeDelegate
     * @param {(module:model/MPCDelegate)} instance The actual instance to initialize CoboSafeDelegate.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof MPCDelegate) {
                this.actualInstance = instance;
            } else if(MPCDelegate.validateJSON(instance)){
                // plain JS object
                // create MPCDelegate from JS object
                this.actualInstance = MPCDelegate.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MPCDelegate
            errorMessages.push("Failed to construct MPCDelegate: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `CoboSafeDelegate` with oneOf schemas MPCDelegate. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `CoboSafeDelegate` with oneOf schemas MPCDelegate. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>CoboSafeDelegate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoboSafeDelegate} obj Optional instance to populate.
     * @return {module:model/CoboSafeDelegate} The populated <code>CoboSafeDelegate</code> instance.
     */
    static constructFromObject(data, obj) {
        return new CoboSafeDelegate(data);
    }

    /**
     * Gets the actual instance, which can be <code>MPCDelegate</code>.
     * @return {(module:model/MPCDelegate)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>MPCDelegate</code>.
     * @param {(module:model/MPCDelegate)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = CoboSafeDelegate.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of CoboSafeDelegate from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/CoboSafeDelegate} An instance of CoboSafeDelegate.
     */
    static fromJSON = function(json_string){
        return CoboSafeDelegate.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/CoboSafeDelegateType} delegate_type
 */
CoboSafeDelegate.prototype['delegate_type'] = undefined;

/**
 * The wallet ID of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}).
 * @member {String} wallet_id
 */
CoboSafeDelegate.prototype['wallet_id'] = undefined;

/**
 * The wallet address of the Delegate. This is required when initiating a transfer from Smart Contract Wallets (Safe{Wallet}).
 * @member {String} address
 */
CoboSafeDelegate.prototype['address'] = undefined;


CoboSafeDelegate.OneOf = ["MPCDelegate"];

export default CoboSafeDelegate;

