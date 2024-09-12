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
 * The SourceGroup model module.
 * @module model/SourceGroup
 */
class SourceGroup {
    /**
     * Constructs a new <code>SourceGroup</code>.
     * The source key share holder group.  **Note:** &#x60;source_key_share_holder_group&#x60; is used only when &#x60;type&#x60; is set to either &#x60;KeyGenfromKeyGroup&#x60; or &#x60;Recovery&#x60;. This is to specify the key share holder group to be used as the source key share holder group to create key shares for the &#x60;target_key_share_holder_group&#x60;. 
     * @alias module:model/SourceGroup
     * @param key_share_holder_group_id {String} The source key share holder group ID.
     */
    constructor(key_share_holder_group_id) { 
        
        SourceGroup.initialize(this, key_share_holder_group_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key_share_holder_group_id) { 
        obj['key_share_holder_group_id'] = key_share_holder_group_id;
    }

    /**
     * Constructs a <code>SourceGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceGroup} obj Optional instance to populate.
     * @return {module:model/SourceGroup} The populated <code>SourceGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceGroup();

            if (data.hasOwnProperty('key_share_holder_group_id')) {
                obj['key_share_holder_group_id'] = ApiClient.convertToType(data['key_share_holder_group_id'], 'String');
            }
            if (data.hasOwnProperty('tss_node_ids')) {
                obj['tss_node_ids'] = ApiClient.convertToType(data['tss_node_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SourceGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SourceGroup</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SourceGroup.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key_share_holder_group_id'] && !(typeof data['key_share_holder_group_id'] === 'string' || data['key_share_holder_group_id'] instanceof String)) {
            throw new Error("Expected the field `key_share_holder_group_id` to be a primitive type in the JSON string but got " + data['key_share_holder_group_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tss_node_ids'])) {
            throw new Error("Expected the field `tss_node_ids` to be an array in the JSON data but got " + data['tss_node_ids']);
        }

        return true;
    }


}

SourceGroup.RequiredProperties = ["key_share_holder_group_id"];

/**
 * The source key share holder group ID.
 * @member {String} key_share_holder_group_id
 */
SourceGroup.prototype['key_share_holder_group_id'] = undefined;

/**
 * The TSS Node IDs participating in creating a new key share holder group when `type` is set to either `KeyGenFromKeyGroup` or `Recovery`.   **Note:** In any [Threshold Signature Schemes (TSS)](https://manuals.cobo.com/en/portal/mpc-wallets/introduction#threshold-signature-scheme-tss) such as the 2-2, 2-3, and 3-3 schemes (in the \"threshold - participants\" format), for `tss_node_ids`, you only need to fill in 1 Cobo TSS Node ID and enough non-Cobo TSS Node IDs to satisfy the number of approvers specified in `threshold`. To obtain the Cobo TSS Node ID, run [List all Cobo key share holders](/v2/api-references/wallets--mpc-wallets/list-all-cobo-key-share-holders). 
 * @member {Array.<String>} tss_node_ids
 */
SourceGroup.prototype['tss_node_ids'] = undefined;






export default SourceGroup;

