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
import ContractCallDestination from './ContractCallDestination';
import ContractCallSource from './ContractCallSource';
import TransactionRequestFee from './TransactionRequestFee';

/**
 * The ContractCallParams model module.
 * @module model/ContractCallParams
 */
class ContractCallParams {
    /**
     * Constructs a new <code>ContractCallParams</code>.
     * The information about a transaction that interacts with a smart contract
     * @alias module:model/ContractCallParams
     * @param request_id {String} The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
     * @param chain_id {String} The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
     * @param source {module:model/ContractCallSource} 
     * @param destination {module:model/ContractCallDestination} 
     */
    constructor(request_id, chain_id, source, destination) { 
        
        ContractCallParams.initialize(this, request_id, chain_id, source, destination);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request_id, chain_id, source, destination) { 
        obj['request_id'] = request_id;
        obj['chain_id'] = chain_id;
        obj['source'] = source;
        obj['destination'] = destination;
    }

    /**
     * Constructs a <code>ContractCallParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractCallParams} obj Optional instance to populate.
     * @return {module:model/ContractCallParams} The populated <code>ContractCallParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContractCallParams();

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ContractCallSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ContractCallDestination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category_names')) {
                obj['category_names'] = ApiClient.convertToType(data['category_names'], ['String']);
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContractCallParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContractCallParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContractCallParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          ContractCallSource.validateJSON(data['source']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          ContractCallDestination.validateJSON(data['destination']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['category_names'])) {
            throw new Error("Expected the field `category_names` to be an array in the JSON data but got " + data['category_names']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionRequestFee.validateJSON(data['fee']);
        }

        return true;
    }


}

ContractCallParams.RequiredProperties = ["request_id", "chain_id", "source", "destination"];

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
ContractCallParams.prototype['request_id'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
ContractCallParams.prototype['chain_id'] = undefined;

/**
 * @member {module:model/ContractCallSource} source
 */
ContractCallParams.prototype['source'] = undefined;

/**
 * @member {module:model/ContractCallDestination} destination
 */
ContractCallParams.prototype['destination'] = undefined;

/**
 * The description of the contract call transaction.
 * @member {String} description
 */
ContractCallParams.prototype['description'] = undefined;

/**
 * The custom category for you to identify your transactions.
 * @member {Array.<String>} category_names
 */
ContractCallParams.prototype['category_names'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
ContractCallParams.prototype['fee'] = undefined;






export default ContractCallParams;

