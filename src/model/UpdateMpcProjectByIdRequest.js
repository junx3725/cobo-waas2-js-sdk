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

/**
 * The UpdateMpcProjectByIdRequest model module.
 * @module model/UpdateMpcProjectByIdRequest
 */
class UpdateMpcProjectByIdRequest {
    /**
     * Constructs a new <code>UpdateMpcProjectByIdRequest</code>.
     * @alias module:model/UpdateMpcProjectByIdRequest
     * @param name {String} The project's new name.
     */
    constructor(name) { 
        
        UpdateMpcProjectByIdRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateMpcProjectByIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMpcProjectByIdRequest} obj Optional instance to populate.
     * @return {module:model/UpdateMpcProjectByIdRequest} The populated <code>UpdateMpcProjectByIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMpcProjectByIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateMpcProjectByIdRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateMpcProjectByIdRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateMpcProjectByIdRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

UpdateMpcProjectByIdRequest.RequiredProperties = ["name"];

/**
 * The project's new name.
 * @member {String} name
 */
UpdateMpcProjectByIdRequest.prototype['name'] = undefined;






export default UpdateMpcProjectByIdRequest;

