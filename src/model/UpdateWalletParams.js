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
import UpdateCustodialWalletParams from './UpdateCustodialWalletParams';
import UpdateExchangeWalletParams from './UpdateExchangeWalletParams';
import UpdateMpcWalletParams from './UpdateMpcWalletParams';
import UpdateSmartContractWalletParams from './UpdateSmartContractWalletParams';
import WalletType from './WalletType';

/**
 * The UpdateWalletParams model module.
 * @module model/UpdateWalletParams
 */
class UpdateWalletParams {
    /**
     * Constructs a new <code>UpdateWalletParams</code>.
     * @alias module:model/UpdateWalletParams
     * @param {(module:model/UpdateCustodialWalletParams|module:model/UpdateExchangeWalletParams|module:model/UpdateMpcWalletParams|module:model/UpdateSmartContractWalletParams)} instance The actual instance to initialize UpdateWalletParams.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["wallet_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "Custodial":
                    this.actualInstance = UpdateCustodialWalletParams.constructFromObject(instance);
                    match++;
                    break;
                case "Exchange":
                    this.actualInstance = UpdateExchangeWalletParams.constructFromObject(instance);
                    match++;
                    break;
                case "MPC":
                    this.actualInstance = UpdateMpcWalletParams.constructFromObject(instance);
                    match++;
                    break;
                case "SmartContract":
                    this.actualInstance = UpdateSmartContractWalletParams.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof UpdateCustodialWalletParams) {
                this.actualInstance = instance;
            } else if(!!UpdateCustodialWalletParams.validateJSON && UpdateCustodialWalletParams.validateJSON(instance)){
                // plain JS object
                // create UpdateCustodialWalletParams from JS object
                this.actualInstance = UpdateCustodialWalletParams.constructFromObject(instance);
            } else {
                if(UpdateCustodialWalletParams.constructFromObject(instance)) {
                    if (!!UpdateCustodialWalletParams.constructFromObject(instance).toJSON) {
                        if (UpdateCustodialWalletParams.constructFromObject(instance).toJSON()) {
                            this.actualInstance = UpdateCustodialWalletParams.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = UpdateCustodialWalletParams.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UpdateCustodialWalletParams
            errorMessages.push("Failed to construct UpdateCustodialWalletParams: " + err)
        }

        try {
            if (instance instanceof UpdateMpcWalletParams) {
                this.actualInstance = instance;
            } else if(!!UpdateMpcWalletParams.validateJSON && UpdateMpcWalletParams.validateJSON(instance)){
                // plain JS object
                // create UpdateMpcWalletParams from JS object
                this.actualInstance = UpdateMpcWalletParams.constructFromObject(instance);
            } else {
                if(UpdateMpcWalletParams.constructFromObject(instance)) {
                    if (!!UpdateMpcWalletParams.constructFromObject(instance).toJSON) {
                        if (UpdateMpcWalletParams.constructFromObject(instance).toJSON()) {
                            this.actualInstance = UpdateMpcWalletParams.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = UpdateMpcWalletParams.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UpdateMpcWalletParams
            errorMessages.push("Failed to construct UpdateMpcWalletParams: " + err)
        }

        try {
            if (instance instanceof UpdateSmartContractWalletParams) {
                this.actualInstance = instance;
            } else if(!!UpdateSmartContractWalletParams.validateJSON && UpdateSmartContractWalletParams.validateJSON(instance)){
                // plain JS object
                // create UpdateSmartContractWalletParams from JS object
                this.actualInstance = UpdateSmartContractWalletParams.constructFromObject(instance);
            } else {
                if(UpdateSmartContractWalletParams.constructFromObject(instance)) {
                    if (!!UpdateSmartContractWalletParams.constructFromObject(instance).toJSON) {
                        if (UpdateSmartContractWalletParams.constructFromObject(instance).toJSON()) {
                            this.actualInstance = UpdateSmartContractWalletParams.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = UpdateSmartContractWalletParams.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UpdateSmartContractWalletParams
            errorMessages.push("Failed to construct UpdateSmartContractWalletParams: " + err)
        }

        try {
            if (instance instanceof UpdateExchangeWalletParams) {
                this.actualInstance = instance;
            } else if(!!UpdateExchangeWalletParams.validateJSON && UpdateExchangeWalletParams.validateJSON(instance)){
                // plain JS object
                // create UpdateExchangeWalletParams from JS object
                this.actualInstance = UpdateExchangeWalletParams.constructFromObject(instance);
            } else {
                if(UpdateExchangeWalletParams.constructFromObject(instance)) {
                    if (!!UpdateExchangeWalletParams.constructFromObject(instance).toJSON) {
                        if (UpdateExchangeWalletParams.constructFromObject(instance).toJSON()) {
                            this.actualInstance = UpdateExchangeWalletParams.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = UpdateExchangeWalletParams.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UpdateExchangeWalletParams
            errorMessages.push("Failed to construct UpdateExchangeWalletParams: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `UpdateWalletParams` with oneOf schemas UpdateCustodialWalletParams, UpdateExchangeWalletParams, UpdateMpcWalletParams, UpdateSmartContractWalletParams. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `UpdateWalletParams` with oneOf schemas UpdateCustodialWalletParams, UpdateExchangeWalletParams, UpdateMpcWalletParams, UpdateSmartContractWalletParams. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>UpdateWalletParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWalletParams} obj Optional instance to populate.
     * @return {module:model/UpdateWalletParams} The populated <code>UpdateWalletParams</code> instance.
     */
    static constructFromObject(data, obj) {
        return new UpdateWalletParams(data);
    }

    /**
     * Gets the actual instance, which can be <code>UpdateCustodialWalletParams</code>, <code>UpdateExchangeWalletParams</code>, <code>UpdateMpcWalletParams</code>, <code>UpdateSmartContractWalletParams</code>.
     * @return {(module:model/UpdateCustodialWalletParams|module:model/UpdateExchangeWalletParams|module:model/UpdateMpcWalletParams|module:model/UpdateSmartContractWalletParams)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>UpdateCustodialWalletParams</code>, <code>UpdateExchangeWalletParams</code>, <code>UpdateMpcWalletParams</code>, <code>UpdateSmartContractWalletParams</code>.
     * @param {(module:model/UpdateCustodialWalletParams|module:model/UpdateExchangeWalletParams|module:model/UpdateMpcWalletParams|module:model/UpdateSmartContractWalletParams)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = UpdateWalletParams.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of UpdateWalletParams from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/UpdateWalletParams} An instance of UpdateWalletParams.
     */
    static fromJSON = function(json_string){
        return UpdateWalletParams.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/WalletType} wallet_type
 */
UpdateWalletParams.prototype['wallet_type'] = undefined;

/**
 * The wallet name.
 * @member {String} name
 */
UpdateWalletParams.prototype['name'] = undefined;


UpdateWalletParams.OneOf = ["UpdateCustodialWalletParams", "UpdateExchangeWalletParams", "UpdateMpcWalletParams", "UpdateSmartContractWalletParams"];

export default UpdateWalletParams;

