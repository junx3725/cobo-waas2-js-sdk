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


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import GetToken200Response from '../model/GetToken200Response';
import GetToken4XXResponse from '../model/GetToken4XXResponse';
import RefreshTokenRequest from '../model/RefreshTokenRequest';

/**
* OAuth service.
* @module api/OAuthApi
*/
export default class OAuthApi {

    /**
    * Constructs a new OAuthApi. 
    * @alias module:api/OAuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Access Token
     * <Note>This operation is only applicable to Cobo Portal App developers. To call this operation, you need to use the OAuth authentication method that requires an App Key.</Note> This operation allows Cobo Portal Apps to get an access token and a refresh token with a specified App ID, Org ID, and grant type.   Access tokens allow the app to signal to the WaaS service that it has received permission from the organization admin to access specific resources. Once the app has been granted permission by an organization admin, it can use this operation to obtain both an access token and a refresh token.  For security purposes, access tokens expire after a certain period. Once they expire, the app need to [Refresh token](/v2/api-references/oauth/refresh-access-token) to get a new access token and a new fresh token. 
     * @param {String} client_id The App ID, a unique identifier to distinguish Cobo Portal Apps. You can get the App ID by retrieving the Manifest file after receiving the notification of app launch approval.
     * @param {String} org_id Org ID, a unique identifier to distinguish different organizations. You can get the Org ID by retrieving the Manifest file after receiving the notification of app launch approval.
     * @param {String} grant_type The type of the permission granting. To get an access token, you need to set the value as `org_implicit`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetToken200Response} and HTTP response
     */
    getTokenWithHttpInfo(client_id, org_id, grant_type) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'client_id' is set
      if (client_id === undefined || client_id === null) {
        throw new Error("Missing the required parameter 'client_id' when calling getToken");
      }
      // verify the required parameter 'org_id' is set
      if (org_id === undefined || org_id === null) {
        throw new Error("Missing the required parameter 'org_id' when calling getToken");
      }
      // verify the required parameter 'grant_type' is set
      if (grant_type === undefined || grant_type === null) {
        throw new Error("Missing the required parameter 'grant_type' when calling getToken");
      }

      let pathParams = {
      };
      let queryParams = {
        'client_id': client_id,
        'org_id': org_id,
        'grant_type': grant_type
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetToken200Response;
      return this.apiClient.callApi(
        '/oauth/token', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Access Token
     * <Note>This operation is only applicable to Cobo Portal App developers. To call this operation, you need to use the OAuth authentication method that requires an App Key.</Note> This operation allows Cobo Portal Apps to get an access token and a refresh token with a specified App ID, Org ID, and grant type.   Access tokens allow the app to signal to the WaaS service that it has received permission from the organization admin to access specific resources. Once the app has been granted permission by an organization admin, it can use this operation to obtain both an access token and a refresh token.  For security purposes, access tokens expire after a certain period. Once they expire, the app need to [Refresh token](/v2/api-references/oauth/refresh-access-token) to get a new access token and a new fresh token. 
     * @param {String} client_id The App ID, a unique identifier to distinguish Cobo Portal Apps. You can get the App ID by retrieving the Manifest file after receiving the notification of app launch approval.
     * @param {String} org_id Org ID, a unique identifier to distinguish different organizations. You can get the Org ID by retrieving the Manifest file after receiving the notification of app launch approval.
     * @param {String} grant_type The type of the permission granting. To get an access token, you need to set the value as `org_implicit`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetToken200Response}
     */
    getToken(client_id, org_id, grant_type) {
      return this.getTokenWithHttpInfo(client_id, org_id, grant_type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Refresh Access Token
     * <Note>This operation is only applicable to Cobo Portal Apps developers. To call this operation, you need to use the OAuth authentication method that requires an App Key.</Note> This operation allows Cobo Portal Apps to obtain a new access token with a specified App ID, grant type and a refresh token. For security purposes, access tokens expire after a certain period. Once they expire, the app need to use this operation to get a new access token and a new fresh token. 
     * @param {module:model/RefreshTokenRequest} RefreshTokenRequest The request body for refreshing an access token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetToken200Response} and HTTP response
     */
    refreshTokenWithHttpInfo(RefreshTokenRequest) {
      let postBody = RefreshTokenRequest;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'RefreshTokenRequest' is set
      if (RefreshTokenRequest === undefined || RefreshTokenRequest === null) {
        throw new Error("Missing the required parameter 'RefreshTokenRequest' when calling refreshToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetToken200Response;
      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Refresh Access Token
     * <Note>This operation is only applicable to Cobo Portal Apps developers. To call this operation, you need to use the OAuth authentication method that requires an App Key.</Note> This operation allows Cobo Portal Apps to obtain a new access token with a specified App ID, grant type and a refresh token. For security purposes, access tokens expire after a certain period. Once they expire, the app need to use this operation to get a new access token and a new fresh token. 
     * @param {module:model/RefreshTokenRequest} RefreshTokenRequest The request body for refreshing an access token.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetToken200Response}
     */
    refreshToken(RefreshTokenRequest) {
      return this.refreshTokenWithHttpInfo(RefreshTokenRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
