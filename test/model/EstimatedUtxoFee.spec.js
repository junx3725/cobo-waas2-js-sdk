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
    instance = new CoboWaas2.EstimatedUtxoFee();
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

  describe('EstimatedUtxoFee', function() {
    it('should create an instance of EstimatedUtxoFee', function() {
      // uncomment below and update the code to test EstimatedUtxoFee
      //var instance = new CoboWaas2.EstimatedUtxoFee();
      //expect(instance).to.be.a(CoboWaas2.EstimatedUtxoFee);
    });

    it('should have the property fee_type (base name: "fee_type")', function() {
      // uncomment below and update the code to test the property fee_type
      //var instance = new CoboWaas2.EstimatedUtxoFee();
      //expect(instance).to.be();
    });

    it('should have the property token_id (base name: "token_id")', function() {
      // uncomment below and update the code to test the property token_id
      //var instance = new CoboWaas2.EstimatedUtxoFee();
      //expect(instance).to.be();
    });

    it('should have the property slow (base name: "slow")', function() {
      // uncomment below and update the code to test the property slow
      //var instance = new CoboWaas2.EstimatedUtxoFee();
      //expect(instance).to.be();
    });

    it('should have the property recommended (base name: "recommended")', function() {
      // uncomment below and update the code to test the property recommended
      //var instance = new CoboWaas2.EstimatedUtxoFee();
      //expect(instance).to.be();
    });

    it('should have the property fast (base name: "fast")', function() {
      // uncomment below and update the code to test the property fast
      //var instance = new CoboWaas2.EstimatedUtxoFee();
      //expect(instance).to.be();
    });

  });

}));
