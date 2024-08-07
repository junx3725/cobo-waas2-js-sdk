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
import AddressEncoding from './AddressEncoding';

/**
 * The CreateAddressRequest model module.
 * @module model/CreateAddressRequest
 */
class CreateAddressRequest {
    /**
     * Constructs a new <code>CreateAddressRequest</code>.
     * @alias module:model/CreateAddressRequest
     * @param chain_id {String} The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
     * @param count {Number} The number of addresses to create.
     */
    constructor(chain_id, count) { 
        
        CreateAddressRequest.initialize(this, chain_id, count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, chain_id, count) { 
        obj['chain_id'] = chain_id;
        obj['count'] = count || 1;
    }

    /**
     * Constructs a <code>CreateAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAddressRequest} obj Optional instance to populate.
     * @return {module:model/CreateAddressRequest} The populated <code>CreateAddressRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAddressRequest();

            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('encoding')) {
                obj['encoding'] = AddressEncoding.constructFromObject(data['encoding']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAddressRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAddressRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateAddressRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }

        return true;
    }


}

CreateAddressRequest.RequiredProperties = ["chain_id", "count"];

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
CreateAddressRequest.prototype['chain_id'] = undefined;

/**
 * The number of addresses to create.
 * @member {Number} count
 * @default 1
 */
CreateAddressRequest.prototype['count'] = 1;

/**
 * @member {module:model/AddressEncoding} encoding
 */
CreateAddressRequest.prototype['encoding'] = undefined;






export default CreateAddressRequest;

