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
    instance = new CoboWaas2.SmartContractWalletInfo();
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

  describe('SmartContractWalletInfo', function() {
    it('should create an instance of SmartContractWalletInfo', function() {
      // uncomment below and update the code to test SmartContractWalletInfo
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be.a(CoboWaas2.SmartContractWalletInfo);
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property wallet_type (base name: "wallet_type")', function() {
      // uncomment below and update the code to test the property wallet_type
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property wallet_subtype (base name: "wallet_subtype")', function() {
      // uncomment below and update the code to test the property wallet_subtype
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property org_id (base name: "org_id")', function() {
      // uncomment below and update the code to test the property org_id
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property chain_id (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chain_id
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property smart_contract_wallet_type (base name: "smart_contract_wallet_type")', function() {
      // uncomment below and update the code to test the property smart_contract_wallet_type
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property safe_address (base name: "safe_address")', function() {
      // uncomment below and update the code to test the property safe_address
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property signers (base name: "signers")', function() {
      // uncomment below and update the code to test the property signers
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property threshold (base name: "threshold")', function() {
      // uncomment below and update the code to test the property threshold
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property cobo_safe_address (base name: "cobo_safe_address")', function() {
      // uncomment below and update the code to test the property cobo_safe_address
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instance = new CoboWaas2.SmartContractWalletInfo();
      //expect(instance).to.be();
    });

  });

}));
