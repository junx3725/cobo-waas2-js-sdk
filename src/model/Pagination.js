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

/**
 * The Pagination model module.
 * @module model/Pagination
 */
class Pagination {
    /**
     * Constructs a new <code>Pagination</code>.
     * The pagination information of the returned data.
     * @alias module:model/Pagination
     * @param before {String} An object ID that serves as a starting point for retrieving data in reverse chronological order for the next request.   If this property is empty, it means that you have reached the start of the data records. 
     * @param after {String} An object ID that acts as a starting point for retrieving data in chronological order for the next request.  If this property is empty, it means that you have reached the end of the data records. 
     * @param total_count {Number} The total number of records that match the query, across all pages.
     */
    constructor(before, after, total_count) { 
        
        Pagination.initialize(this, before, after, total_count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, before, after, total_count) { 
        obj['before'] = before;
        obj['after'] = after;
        obj['total_count'] = total_count;
    }

    /**
     * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pagination} obj Optional instance to populate.
     * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pagination();

            if (data.hasOwnProperty('before')) {
                obj['before'] = ApiClient.convertToType(data['before'], 'String');
            }
            if (data.hasOwnProperty('after')) {
                obj['after'] = ApiClient.convertToType(data['after'], 'String');
            }
            if (data.hasOwnProperty('total_count')) {
                obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Pagination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Pagination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Pagination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['before'] && !(typeof data['before'] === 'string' || data['before'] instanceof String)) {
            throw new Error("Expected the field `before` to be a primitive type in the JSON string but got " + data['before']);
        }
        // ensure the json data is a string
        if (data['after'] && !(typeof data['after'] === 'string' || data['after'] instanceof String)) {
            throw new Error("Expected the field `after` to be a primitive type in the JSON string but got " + data['after']);
        }

        return true;
    }


}

Pagination.RequiredProperties = ["before", "after", "total_count"];

/**
 * An object ID that serves as a starting point for retrieving data in reverse chronological order for the next request.   If this property is empty, it means that you have reached the start of the data records. 
 * @member {String} before
 */
Pagination.prototype['before'] = undefined;

/**
 * An object ID that acts as a starting point for retrieving data in chronological order for the next request.  If this property is empty, it means that you have reached the end of the data records. 
 * @member {String} after
 */
Pagination.prototype['after'] = undefined;

/**
 * The total number of records that match the query, across all pages.
 * @member {Number} total_count
 */
Pagination.prototype['total_count'] = undefined;






export default Pagination;

