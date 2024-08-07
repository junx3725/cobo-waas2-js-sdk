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
    instance = new CoboWaas2.FixedFeeRate();
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

  describe('FixedFeeRate', function() {
    it('should create an instance of FixedFeeRate', function() {
      // uncomment below and update the code to test FixedFeeRate
      //var instance = new CoboWaas2.FixedFeeRate();
      //expect(instance).to.be.a(CoboWaas2.FixedFeeRate);
    });

    it('should have the property fee_amount (base name: "fee_amount")', function() {
      // uncomment below and update the code to test the property fee_amount
      //var instance = new CoboWaas2.FixedFeeRate();
      //expect(instance).to.be();
    });

    it('should have the property fee_type (base name: "fee_type")', function() {
      // uncomment below and update the code to test the property fee_type
      //var instance = new CoboWaas2.FixedFeeRate();
      //expect(instance).to.be();
    });

    it('should have the property token_id (base name: "token_id")', function() {
      // uncomment below and update the code to test the property token_id
      //var instance = new CoboWaas2.FixedFeeRate();
      //expect(instance).to.be();
    });

  });

}));
