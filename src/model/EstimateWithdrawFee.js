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
import ActivityType from './ActivityType';
import BaseEstimateStakingFee from './BaseEstimateStakingFee';
import CreateWithdrawActivity from './CreateWithdrawActivity';
import TransactionRequestFee from './TransactionRequestFee';

/**
 * The EstimateWithdrawFee model module.
 * @module model/EstimateWithdrawFee
 */
class EstimateWithdrawFee {
    /**
     * Constructs a new <code>EstimateWithdrawFee</code>.
     * @alias module:model/EstimateWithdrawFee
     * @implements module:model/BaseEstimateStakingFee
     * @implements module:model/CreateWithdrawActivity
     * @param activity_type {module:model/ActivityType} 
     * @param staking_id {String} The id of the related staking.
     * @param fee {module:model/TransactionRequestFee} 
     */
    constructor(activity_type, staking_id, fee) { 
        BaseEstimateStakingFee.initialize(this, activity_type);CreateWithdrawActivity.initialize(this, staking_id, fee);
        EstimateWithdrawFee.initialize(this, activity_type, staking_id, fee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activity_type, staking_id, fee) { 
        obj['activity_type'] = activity_type;
        obj['staking_id'] = staking_id;
        obj['fee'] = fee;
    }

    /**
     * Constructs a <code>EstimateWithdrawFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateWithdrawFee} obj Optional instance to populate.
     * @return {module:model/EstimateWithdrawFee} The populated <code>EstimateWithdrawFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateWithdrawFee();
            BaseEstimateStakingFee.constructFromObject(data, obj);
            CreateWithdrawActivity.constructFromObject(data, obj);

            if (data.hasOwnProperty('activity_type')) {
                obj['activity_type'] = ActivityType.constructFromObject(data['activity_type']);
            }
            if (data.hasOwnProperty('staking_id')) {
                obj['staking_id'] = ApiClient.convertToType(data['staking_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimateWithdrawFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimateWithdrawFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimateWithdrawFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['staking_id'] && !(typeof data['staking_id'] === 'string' || data['staking_id'] instanceof String)) {
            throw new Error("Expected the field `staking_id` to be a primitive type in the JSON string but got " + data['staking_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionRequestFee.validateJSON(data['fee']);
        }

        return true;
    }


}

EstimateWithdrawFee.RequiredProperties = ["activity_type", "staking_id", "fee"];

/**
 * @member {module:model/ActivityType} activity_type
 */
EstimateWithdrawFee.prototype['activity_type'] = undefined;

/**
 * The id of the related staking.
 * @member {String} staking_id
 */
EstimateWithdrawFee.prototype['staking_id'] = undefined;

/**
 * The amount to stake
 * @member {String} amount
 */
EstimateWithdrawFee.prototype['amount'] = undefined;

/**
 * The withdraw to address.
 * @member {String} address
 */
EstimateWithdrawFee.prototype['address'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
EstimateWithdrawFee.prototype['fee'] = undefined;


// Implement BaseEstimateStakingFee interface:
/**
 * @member {module:model/ActivityType} activity_type
 */
BaseEstimateStakingFee.prototype['activity_type'] = undefined;
// Implement CreateWithdrawActivity interface:
/**
 * The id of the related staking.
 * @member {String} staking_id
 */
CreateWithdrawActivity.prototype['staking_id'] = undefined;
/**
 * The amount to stake
 * @member {String} amount
 */
CreateWithdrawActivity.prototype['amount'] = undefined;
/**
 * The withdraw to address.
 * @member {String} address
 */
CreateWithdrawActivity.prototype['address'] = undefined;
/**
 * @member {module:model/TransactionRequestFee} fee
 */
CreateWithdrawActivity.prototype['fee'] = undefined;




export default EstimateWithdrawFee;

