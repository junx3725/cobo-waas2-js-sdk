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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoboWaas2);
  }
}(this, function(expect, CoboWaas2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2.GetToken200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetToken200Response', function() {
    it('should create an instance of GetToken200Response', function() {
      // uncomment below and update the code to test GetToken200Response
      //var instance = new CoboWaas2.GetToken200Response();
      //expect(instance).to.be.a(CoboWaas2.GetToken200Response);
    });

    it('should have the property access_token (base name: "access_token")', function() {
      // uncomment below and update the code to test the property access_token
      //var instance = new CoboWaas2.GetToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property token_type (base name: "token_type")', function() {
      // uncomment below and update the code to test the property token_type
      //var instance = new CoboWaas2.GetToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new CoboWaas2.GetToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property expires_in (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expires_in
      //var instance = new CoboWaas2.GetToken200Response();
      //expect(instance).to.be();
    });

    it('should have the property refresh_token (base name: "refresh_token")', function() {
      // uncomment below and update the code to test the property refresh_token
      //var instance = new CoboWaas2.GetToken200Response();
      //expect(instance).to.be();
    });

  });

}));
