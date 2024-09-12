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

import ApiClient from '../ApiClient';
import PoolDetailsAllOfValidatorsInfo from './PoolDetailsAllOfValidatorsInfo';
import PoolSummary from './PoolSummary';
import StakingPoolType from './StakingPoolType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The PoolDetails model module.
 * @module model/PoolDetails
 */
class PoolDetails {
    /**
     * Constructs a new <code>PoolDetails</code>.
     * @alias module:model/PoolDetails
     * @implements module:model/PoolSummary
     * @param id {String} The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token.
     * @param chain_id {String} The chain ID.
     * @param protocol {String} The name of the protocol.
     * @param protocol_icon_url {String} The URL of the protocol's icon.
     * @param supported_wallet_types {Array.<module:model/WalletType>} The wallet type. Possible values include:  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
     * @param supported_wallet_subtypes {Array.<module:model/WalletSubtype>} The wallet subtype. Possible values include: - `Asset`: Custodial Wallets (Asset Wallets). - `Web3`: Custodial Wallets (Web3  Wallets). - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets). - `User-Controlled`: MPC Wallets (User-Controlled Wallets). - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}). - `Main`: Exchange Wallets (Main Account). - `Sub`: Exchange Wallets (Sub Account). 
     * @param token_id {String} The token ID.
     * @param est_apr {Number} The estimated annual percentage rate (APR).
     * @param validators_info {Array.<module:model/PoolDetailsAllOfValidatorsInfo>} A list of available validators.
     */
    constructor(id, chain_id, protocol, protocol_icon_url, supported_wallet_types, supported_wallet_subtypes, token_id, est_apr, validators_info) { 
        PoolSummary.initialize(this, id, chain_id, protocol, protocol_icon_url, supported_wallet_types, supported_wallet_subtypes, token_id, est_apr);
        PoolDetails.initialize(this, id, chain_id, protocol, protocol_icon_url, supported_wallet_types, supported_wallet_subtypes, token_id, est_apr, validators_info);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, chain_id, protocol, protocol_icon_url, supported_wallet_types, supported_wallet_subtypes, token_id, est_apr, validators_info) { 
        obj['id'] = id;
        obj['chain_id'] = chain_id;
        obj['protocol'] = protocol;
        obj['protocol_icon_url'] = protocol_icon_url;
        obj['supported_wallet_types'] = supported_wallet_types;
        obj['supported_wallet_subtypes'] = supported_wallet_subtypes;
        obj['token_id'] = token_id;
        obj['est_apr'] = est_apr;
        obj['validators_info'] = validators_info;
    }

    /**
     * Constructs a <code>PoolDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolDetails} obj Optional instance to populate.
     * @return {module:model/PoolDetails} The populated <code>PoolDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolDetails();
            PoolSummary.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('protocol_icon_url')) {
                obj['protocol_icon_url'] = ApiClient.convertToType(data['protocol_icon_url'], 'String');
            }
            if (data.hasOwnProperty('supported_wallet_types')) {
                obj['supported_wallet_types'] = ApiClient.convertToType(data['supported_wallet_types'], [WalletType]);
            }
            if (data.hasOwnProperty('supported_wallet_subtypes')) {
                obj['supported_wallet_subtypes'] = ApiClient.convertToType(data['supported_wallet_subtypes'], [WalletSubtype]);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('est_apr')) {
                obj['est_apr'] = ApiClient.convertToType(data['est_apr'], 'Number');
            }
            if (data.hasOwnProperty('pool_type')) {
                obj['pool_type'] = StakingPoolType.constructFromObject(data['pool_type']);
            }
            if (data.hasOwnProperty('min_amount')) {
                obj['min_amount'] = ApiClient.convertToType(data['min_amount'], 'String');
            }
            if (data.hasOwnProperty('max_amount')) {
                obj['max_amount'] = ApiClient.convertToType(data['max_amount'], 'String');
            }
            if (data.hasOwnProperty('min_stake_period')) {
                obj['min_stake_period'] = ApiClient.convertToType(data['min_stake_period'], 'Number');
            }
            if (data.hasOwnProperty('max_stake_period')) {
                obj['max_stake_period'] = ApiClient.convertToType(data['max_stake_period'], 'Number');
            }
            if (data.hasOwnProperty('min_stake_blocks')) {
                obj['min_stake_blocks'] = ApiClient.convertToType(data['min_stake_blocks'], 'Number');
            }
            if (data.hasOwnProperty('max_stake_blocks')) {
                obj['max_stake_blocks'] = ApiClient.convertToType(data['max_stake_blocks'], 'Number');
            }
            if (data.hasOwnProperty('validators_info')) {
                obj['validators_info'] = ApiClient.convertToType(data['validators_info'], [PoolDetailsAllOfValidatorsInfo]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PoolDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PoolDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PoolDetails.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['protocol'] && !(typeof data['protocol'] === 'string' || data['protocol'] instanceof String)) {
            throw new Error("Expected the field `protocol` to be a primitive type in the JSON string but got " + data['protocol']);
        }
        // ensure the json data is a string
        if (data['protocol_icon_url'] && !(typeof data['protocol_icon_url'] === 'string' || data['protocol_icon_url'] instanceof String)) {
            throw new Error("Expected the field `protocol_icon_url` to be a primitive type in the JSON string but got " + data['protocol_icon_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['supported_wallet_types'])) {
            throw new Error("Expected the field `supported_wallet_types` to be an array in the JSON data but got " + data['supported_wallet_types']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['supported_wallet_subtypes'])) {
            throw new Error("Expected the field `supported_wallet_subtypes` to be an array in the JSON data but got " + data['supported_wallet_subtypes']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['min_amount'] && !(typeof data['min_amount'] === 'string' || data['min_amount'] instanceof String)) {
            throw new Error("Expected the field `min_amount` to be a primitive type in the JSON string but got " + data['min_amount']);
        }
        // ensure the json data is a string
        if (data['max_amount'] && !(typeof data['max_amount'] === 'string' || data['max_amount'] instanceof String)) {
            throw new Error("Expected the field `max_amount` to be a primitive type in the JSON string but got " + data['max_amount']);
        }
        if (data['validators_info']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['validators_info'])) {
                throw new Error("Expected the field `validators_info` to be an array in the JSON data but got " + data['validators_info']);
            }
            // validate the optional field `validators_info` (array)
            for (const item of data['validators_info']) {
                PoolDetailsAllOfValidatorsInfo.validateJSON(item);
            };
        }

        return true;
    }


}

PoolDetails.RequiredProperties = ["id", "chain_id", "protocol", "protocol_icon_url", "supported_wallet_types", "supported_wallet_subtypes", "token_id", "est_apr", "validators_info"];

/**
 * The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token.
 * @member {String} id
 */
PoolDetails.prototype['id'] = undefined;

/**
 * The chain ID.
 * @member {String} chain_id
 */
PoolDetails.prototype['chain_id'] = undefined;

/**
 * The name of the protocol.
 * @member {String} protocol
 */
PoolDetails.prototype['protocol'] = undefined;

/**
 * The URL of the protocol's icon.
 * @member {String} protocol_icon_url
 */
PoolDetails.prototype['protocol_icon_url'] = undefined;

/**
 * The wallet type. Possible values include:  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
 * @member {Array.<module:model/WalletType>} supported_wallet_types
 */
PoolDetails.prototype['supported_wallet_types'] = undefined;

/**
 * The wallet subtype. Possible values include: - `Asset`: Custodial Wallets (Asset Wallets). - `Web3`: Custodial Wallets (Web3  Wallets). - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets). - `User-Controlled`: MPC Wallets (User-Controlled Wallets). - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}). - `Main`: Exchange Wallets (Main Account). - `Sub`: Exchange Wallets (Sub Account). 
 * @member {Array.<module:model/WalletSubtype>} supported_wallet_subtypes
 */
PoolDetails.prototype['supported_wallet_subtypes'] = undefined;

/**
 * The token ID.
 * @member {String} token_id
 */
PoolDetails.prototype['token_id'] = undefined;

/**
 * The estimated annual percentage rate (APR).
 * @member {Number} est_apr
 */
PoolDetails.prototype['est_apr'] = undefined;

/**
 * @member {module:model/StakingPoolType} pool_type
 */
PoolDetails.prototype['pool_type'] = undefined;

/**
 * The minimum amount that can be staked in one staking request.
 * @member {String} min_amount
 */
PoolDetails.prototype['min_amount'] = undefined;

/**
 * The maximum amount that can be staked in one staking request.
 * @member {String} max_amount
 */
PoolDetails.prototype['max_amount'] = undefined;

/**
 * The minimum staking period, in days.
 * @member {Number} min_stake_period
 */
PoolDetails.prototype['min_stake_period'] = undefined;

/**
 * The maximum staking period, in days.
 * @member {Number} max_stake_period
 */
PoolDetails.prototype['max_stake_period'] = undefined;

/**
 * The minimum block number. A block number indicates the number of blocks that need to be processed before the locked tokens are unlocked and become accessible.
 * @member {Number} min_stake_blocks
 */
PoolDetails.prototype['min_stake_blocks'] = undefined;

/**
 * The maximum block number. A block number indicates the number of blocks that need to be processed before the locked tokens are unlocked and become accessible.
 * @member {Number} max_stake_blocks
 */
PoolDetails.prototype['max_stake_blocks'] = undefined;

/**
 * A list of available validators.
 * @member {Array.<module:model/PoolDetailsAllOfValidatorsInfo>} validators_info
 */
PoolDetails.prototype['validators_info'] = undefined;


// Implement PoolSummary interface:
/**
 * The ID of the staking pool. A staking pool is a pairing of a staking protocol and a specific type of token.
 * @member {String} id
 */
PoolSummary.prototype['id'] = undefined;
/**
 * The chain ID.
 * @member {String} chain_id
 */
PoolSummary.prototype['chain_id'] = undefined;
/**
 * The name of the protocol.
 * @member {String} protocol
 */
PoolSummary.prototype['protocol'] = undefined;
/**
 * The URL of the protocol's icon.
 * @member {String} protocol_icon_url
 */
PoolSummary.prototype['protocol_icon_url'] = undefined;
/**
 * The wallet type. Possible values include:  - `Custodial`: [Custodial Wallets](https://manuals.cobo.com/en/portal/custodial-wallets/introduction)  - `MPC`: [MPC Wallets](https://manuals.cobo.com/en/portal/mpc-wallets/introduction)  - `SmartContract`: [Smart Contract Wallets](https://manuals.cobo.com/en/portal/smart-contract-wallets/introduction)  - `Exchange`: [Exchange Wallets](https://manuals.cobo.com/en/portal/exchange-wallets/introduction) 
 * @member {Array.<module:model/WalletType>} supported_wallet_types
 */
PoolSummary.prototype['supported_wallet_types'] = undefined;
/**
 * The wallet subtype. Possible values include: - `Asset`: Custodial Wallets (Asset Wallets). - `Web3`: Custodial Wallets (Web3  Wallets). - `Org-Controlled`: MPC Wallets (Organization-Controlled Wallets). - `User-Controlled`: MPC Wallets (User-Controlled Wallets). - `Safe{Wallet}`: Smart Contract Wallets (Safe{Wallet}). - `Main`: Exchange Wallets (Main Account). - `Sub`: Exchange Wallets (Sub Account). 
 * @member {Array.<module:model/WalletSubtype>} supported_wallet_subtypes
 */
PoolSummary.prototype['supported_wallet_subtypes'] = undefined;
/**
 * The token ID.
 * @member {String} token_id
 */
PoolSummary.prototype['token_id'] = undefined;
/**
 * The estimated annual percentage rate (APR).
 * @member {Number} est_apr
 */
PoolSummary.prototype['est_apr'] = undefined;




export default PoolDetails;

