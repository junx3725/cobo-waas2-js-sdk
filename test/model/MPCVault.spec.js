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
    instance = new CoboWaas2.MPCVault();
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

  describe('MPCVault', function() {
    it('should create an instance of MPCVault', function() {
      // uncomment below and update the code to test MPCVault
      //var instance = new CoboWaas2.MPCVault();
      //expect(instance).to.be.a(CoboWaas2.MPCVault);
    });

    it('should have the property vault_id (base name: "vault_id")', function() {
      // uncomment below and update the code to test the property vault_id
      //var instance = new CoboWaas2.MPCVault();
      //expect(instance).to.be();
    });

    it('should have the property project_id (base name: "project_id")', function() {
      // uncomment below and update the code to test the property project_id
      //var instance = new CoboWaas2.MPCVault();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CoboWaas2.MPCVault();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoboWaas2.MPCVault();
      //expect(instance).to.be();
    });

    it('should have the property root_pubkeys (base name: "root_pubkeys")', function() {
      // uncomment below and update the code to test the property root_pubkeys
      //var instance = new CoboWaas2.MPCVault();
      //expect(instance).to.be();
    });

    it('should have the property created_timestamp (base name: "created_timestamp")', function() {
      // uncomment below and update the code to test the property created_timestamp
      //var instance = new CoboWaas2.MPCVault();
      //expect(instance).to.be();
    });

  });

}));
