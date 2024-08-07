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


import {ApiClient, Env} from "../../src/index.js";

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
    var apiClient = new ApiClient()
    apiClient.setEnv(new Env("https://api[.xxx].cobo.com/v2"));
    apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
    instance = new CoboWaas2.TransactionsApi(apiClient);
  });

  describe('TransactionsApi', function() {
    describe('cancelTransactionById', function() {
      it('should call cancelTransactionById successfully', function() {
        //uncomment below and update the code to test cancelTransactionById
        //instance.cancelTransactionById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createContractCallTransaction', function() {
      it('should call createContractCallTransaction successfully', function() {
        //uncomment below and update the code to test createContractCallTransaction
        //instance.createContractCallTransaction().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createMessageSignTransaction', function() {
      it('should call createMessageSignTransaction successfully', function() {
        //uncomment below and update the code to test createMessageSignTransaction
        //instance.createMessageSignTransaction().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createTransferTransaction', function() {
      it('should call createTransferTransaction successfully', function() {
        //uncomment below and update the code to test createTransferTransaction
        //instance.createTransferTransaction().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('dropTransactionById', function() {
      it('should call dropTransactionById successfully', function() {
        //uncomment below and update the code to test dropTransactionById
        //instance.dropTransactionById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('estimateFee', function() {
      it('should call estimateFee successfully', function() {
        //uncomment below and update the code to test estimateFee
        //instance.estimateFee().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getTransactionById', function() {
      it('should call getTransactionById successfully', function() {
        //uncomment below and update the code to test getTransactionById
        //instance.getTransactionById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listTransactions', function() {
      it('should call listTransactions successfully', function() {
        //uncomment below and update the code to test listTransactions
        //instance.listTransactions().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('resendTransactionById', function() {
      it('should call resendTransactionById successfully', function() {
        //uncomment below and update the code to test resendTransactionById
        //instance.resendTransactionById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('speedupTransactionById', function() {
      it('should call speedupTransactionById successfully', function() {
        //uncomment below and update the code to test speedupTransactionById
        //instance.speedupTransactionById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
  });

}));
