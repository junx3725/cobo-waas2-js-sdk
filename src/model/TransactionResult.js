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
import TransactionResultType from './TransactionResultType';
import TransactionSignatureResult from './TransactionSignatureResult';

/**
 * The TransactionResult model module.
 * @module model/TransactionResult
 */
class TransactionResult {
    /**
     * Constructs a new <code>TransactionResult</code>.
     * @alias module:model/TransactionResult
     * @param {(module:model/TransactionSignatureResult)} instance The actual instance to initialize TransactionResult.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof TransactionSignatureResult) {
                this.actualInstance = instance;
            } else if(TransactionSignatureResult.validateJSON(instance)){
                // plain JS object
                // create TransactionSignatureResult from JS object
                this.actualInstance = TransactionSignatureResult.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionSignatureResult
            errorMessages.push("Failed to construct TransactionSignatureResult: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `TransactionResult` with oneOf schemas TransactionSignatureResult. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `TransactionResult` with oneOf schemas TransactionSignatureResult. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>TransactionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionResult} obj Optional instance to populate.
     * @return {module:model/TransactionResult} The populated <code>TransactionResult</code> instance.
     */
    static constructFromObject(data, obj) {
        return new TransactionResult(data);
    }

    /**
     * Gets the actual instance, which can be <code>TransactionSignatureResult</code>.
     * @return {(module:model/TransactionSignatureResult)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>TransactionSignatureResult</code>.
     * @param {(module:model/TransactionSignatureResult)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = TransactionResult.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of TransactionResult from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/TransactionResult} An instance of TransactionResult.
     */
    static fromJSON = function(json_string){
        return TransactionResult.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/TransactionResultType} result_type
 */
TransactionResult.prototype['result_type'] = undefined;

/**
 * The raw data of the signature.
 * @member {String} signature
 */
TransactionResult.prototype['signature'] = undefined;


TransactionResult.OneOf = ["TransactionSignatureResult"];

export default TransactionResult;

