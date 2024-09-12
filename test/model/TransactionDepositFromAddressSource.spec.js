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
    instance = new CoboWaas2.TransactionDepositFromAddressSource();
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

  describe('TransactionDepositFromAddressSource', function() {
    it('should create an instance of TransactionDepositFromAddressSource', function() {
      // uncomment below and update the code to test TransactionDepositFromAddressSource
      //var instance = new CoboWaas2.TransactionDepositFromAddressSource();
      //expect(instance).to.be.a(CoboWaas2.TransactionDepositFromAddressSource);
    });

    it('should have the property source_type (base name: "source_type")', function() {
      // uncomment below and update the code to test the property source_type
      //var instance = new CoboWaas2.TransactionDepositFromAddressSource();
      //expect(instance).to.be();
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.TransactionDepositFromAddressSource();
      //expect(instance).to.be();
    });

    it('should have the property wallet_type (base name: "wallet_type")', function() {
      // uncomment below and update the code to test the property wallet_type
      //var instance = new CoboWaas2.TransactionDepositFromAddressSource();
      //expect(instance).to.be();
    });

    it('should have the property wallet_subtype (base name: "wallet_subtype")', function() {
      // uncomment below and update the code to test the property wallet_subtype
      //var instance = new CoboWaas2.TransactionDepositFromAddressSource();
      //expect(instance).to.be();
    });

    it('should have the property addresses (base name: "addresses")', function() {
      // uncomment below and update the code to test the property addresses
      //var instance = new CoboWaas2.TransactionDepositFromAddressSource();
      //expect(instance).to.be();
    });

  });

}));
