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
    instance = new CoboWaas2.PoolDetails();
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

  describe('PoolDetails', function() {
    it('should create an instance of PoolDetails', function() {
      // uncomment below and update the code to test PoolDetails
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be.a(CoboWaas2.PoolDetails);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property chain_id (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chain_id
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property protocol_icon_url (base name: "protocol_icon_url")', function() {
      // uncomment below and update the code to test the property protocol_icon_url
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property supported_wallet_types (base name: "supported_wallet_types")', function() {
      // uncomment below and update the code to test the property supported_wallet_types
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property supported_wallet_subtypes (base name: "supported_wallet_subtypes")', function() {
      // uncomment below and update the code to test the property supported_wallet_subtypes
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property token_id (base name: "token_id")', function() {
      // uncomment below and update the code to test the property token_id
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property est_apr (base name: "est_apr")', function() {
      // uncomment below and update the code to test the property est_apr
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property pool_type (base name: "pool_type")', function() {
      // uncomment below and update the code to test the property pool_type
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property min_amount (base name: "min_amount")', function() {
      // uncomment below and update the code to test the property min_amount
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property max_amount (base name: "max_amount")', function() {
      // uncomment below and update the code to test the property max_amount
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property min_stake_period (base name: "min_stake_period")', function() {
      // uncomment below and update the code to test the property min_stake_period
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property max_stake_period (base name: "max_stake_period")', function() {
      // uncomment below and update the code to test the property max_stake_period
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property min_stake_blocks (base name: "min_stake_blocks")', function() {
      // uncomment below and update the code to test the property min_stake_blocks
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property max_stake_blocks (base name: "max_stake_blocks")', function() {
      // uncomment below and update the code to test the property max_stake_blocks
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

    it('should have the property validators_info (base name: "validators_info")', function() {
      // uncomment below and update the code to test the property validators_info
      //var instance = new CoboWaas2.PoolDetails();
      //expect(instance).to.be();
    });

  });

}));
