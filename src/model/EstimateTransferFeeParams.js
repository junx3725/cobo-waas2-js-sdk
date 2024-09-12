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
import EstimateFeeRequestType from './EstimateFeeRequestType';
import FeeType from './FeeType';
import TransferDestination from './TransferDestination';
import TransferSource from './TransferSource';

/**
 * The EstimateTransferFeeParams model module.
 * @module model/EstimateTransferFeeParams
 */
class EstimateTransferFeeParams {
    /**
     * Constructs a new <code>EstimateTransferFeeParams</code>.
     * The information about a token transfer.
     * @alias module:model/EstimateTransferFeeParams
     * @param request_id {String} The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
     * @param request_type {module:model/EstimateFeeRequestType} 
     * @param source {module:model/TransferSource} 
     * @param token_id {String} The token ID of the transferred token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
     * @param destination {module:model/TransferDestination} 
     */
    constructor(request_id, request_type, source, token_id, destination) { 
        
        EstimateTransferFeeParams.initialize(this, request_id, request_type, source, token_id, destination);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request_id, request_type, source, token_id, destination) { 
        obj['request_id'] = request_id;
        obj['request_type'] = request_type;
        obj['source'] = source;
        obj['token_id'] = token_id;
        obj['destination'] = destination;
    }

    /**
     * Constructs a <code>EstimateTransferFeeParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateTransferFeeParams} obj Optional instance to populate.
     * @return {module:model/EstimateTransferFeeParams} The populated <code>EstimateTransferFeeParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateTransferFeeParams();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('request_type')) {
                obj['request_type'] = EstimateFeeRequestType.constructFromObject(data['request_type']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = TransferSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = TransferDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimateTransferFeeParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimateTransferFeeParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimateTransferFeeParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          if (!!TransferSource.validateJSON) {
            TransferSource.validateJSON(data['source']);
          }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          if (!!TransferDestination.validateJSON) {
            TransferDestination.validateJSON(data['destination']);
          }
        }

        return true;
    }


}

EstimateTransferFeeParams.RequiredProperties = ["request_id", "request_type", "source", "token_id", "destination"];

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
EstimateTransferFeeParams.prototype['request_id'] = undefined;

/**
 * @member {module:model/EstimateFeeRequestType} request_type
 */
EstimateTransferFeeParams.prototype['request_type'] = undefined;

/**
 * @member {module:model/TransferSource} source
 */
EstimateTransferFeeParams.prototype['source'] = undefined;

/**
 * The token ID of the transferred token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
EstimateTransferFeeParams.prototype['token_id'] = undefined;

/**
 * @member {module:model/TransferDestination} destination
 */
EstimateTransferFeeParams.prototype['destination'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
EstimateTransferFeeParams.prototype['fee_type'] = undefined;






export default EstimateTransferFeeParams;

