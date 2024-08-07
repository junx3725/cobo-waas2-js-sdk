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
import WebhookEventType from './WebhookEventType';

/**
 * The UpdateWebhookEndpointByIdRequest model module.
 * @module model/UpdateWebhookEndpointByIdRequest
 */
class UpdateWebhookEndpointByIdRequest {
    /**
     * Constructs a new <code>UpdateWebhookEndpointByIdRequest</code>.
     * @alias module:model/UpdateWebhookEndpointByIdRequest
     */
    constructor() { 
        
        UpdateWebhookEndpointByIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateWebhookEndpointByIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWebhookEndpointByIdRequest} obj Optional instance to populate.
     * @return {module:model/UpdateWebhookEndpointByIdRequest} The populated <code>UpdateWebhookEndpointByIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWebhookEndpointByIdRequest();

            if (data.hasOwnProperty('subscribed_events')) {
                obj['subscribed_events'] = ApiClient.convertToType(data['subscribed_events'], [WebhookEventType]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateWebhookEndpointByIdRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateWebhookEndpointByIdRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['subscribed_events'])) {
            throw new Error("Expected the field `subscribed_events` to be an array in the JSON data but got " + data['subscribed_events']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}



/**
 * The new event types you want to subscribe to for this webhook endpoint. You can call [Get webhook event types](/v2/api-references/developers--webhooks/get-webhook-event-types) to retrieve all available event types.
 * @member {Array.<module:model/WebhookEventType>} subscribed_events
 */
UpdateWebhookEndpointByIdRequest.prototype['subscribed_events'] = undefined;

/**
 * The new status you want to set the webhook endpoint to. If you set `status` to `STATUS_INACTIVE`, the endpoint will be revoked, meaning it will no longer receive any webhook events.
 * @member {module:model/UpdateWebhookEndpointByIdRequest.StatusEnum} status
 */
UpdateWebhookEndpointByIdRequest.prototype['status'] = undefined;

/**
 * The webhook endpoint description.
 * @member {String} description
 */
UpdateWebhookEndpointByIdRequest.prototype['description'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
UpdateWebhookEndpointByIdRequest['StatusEnum'] = {

    /**
     * value: "STATUS_INACTIVE"
     * @const
     */
    "STATUS_INACTIVE": "STATUS_INACTIVE",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};



export default UpdateWebhookEndpointByIdRequest;

