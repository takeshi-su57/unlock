// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

/**
 * UnlockManager receives and send instructions from bridges 
 * to Unlock contracts deployed on various chains. It triggers upgrades
 * and settings, following orders coming from mainnet.
 */


import {IXReceiver} from "@connext/nxtp-contracts/contracts/core/connext/interfaces/IXReceiver.sol";
import {IConnext} from "@connext/nxtp-contracts/contracts/core/connext/interfaces/IConnext.sol";
import '../interfaces/IUnlock.sol';

contract UnlockManager {

  address public bridgeAddress;

  // the chain id => address of Unlock receiver on the destination chain
  mapping (uint => address) public unlockAddresses;

  // the mapping 
  mapping(uint => uint32) public domains; 
  mapping(uint32 => uint) public chainIds; 

  // Errors
  error OnlyUnlock();
  error ChainNotSet();
  error LengthMismatch();
  error Unauthorized(address sender);
  error InsufficientApproval(uint requiredAmount);
  error InsufficientBalance();

  constructor (address _bridgeAddress) {
    bridgeAddress = _bridgeAddress;
  }

  /**
   * MODIFIERS
   */
  
  // Make sure sender is an existing Unlock contract on another chain
  function _isUnlock(
    address _originSender,
    uint32 _originDomain
  ) internal view returns (bool) {
    if(
        _chainIsSet(chainIds[_originDomain]) || // domain is set
        _originSender != unlockAddresses[chainIds[_originDomain]] ||
        msg.sender != bridgeAddress
    ) {
      revert OnlyUnlock();
    }
    return true;
  }


  // Check is sender is current chain Unlock multisig address
  function _isUnlockOwner() internal view returns (bool) {    
    return IUnlock(unlockAddresses[block.chainid]).owner() == msg.sender;
  }

  // Make sure Unlock receiver contract exists on dest chain
  function _chainIsSet(uint _chainId) internal view returns (bool) {
    if(domains[_chainId] == 0 || unlockAddresses[_chainId] == address(0)) {
      revert ChainNotSet();
    }
    return true;
  }

  /**
   * SETTERS
   */

  /**
   * @param _unlockAddresses addresses of the Unlock contract on all chains
   * @param _chainIds ID of the chain where the corresponding Unlock contract is deployed
   * @param _domains Domain IDs mapped to chains as used by the Connext Bridge https://docs.connext.network/resources/supported-chains
   */
  function setUnlockAddresses(
    address[] calldata _unlockAddresses,
    uint[] calldata _chainIds, 
    uint32[] calldata _domains
  ) internal {
    if( _unlockAddresses.length != _chainIds.length || _chainIds.length != _domains.length ){
      revert LengthMismatch();
    }
    for (uint i = 0; i < _unlockAddresses.length; i++) {
      domains[_chainIds[i]] = _domains[i];
      chainIds[_domains[i]] = _chainIds[i];
      unlockAddresses[_chainIds[i]] = _unlockAddresses[i];
    }
  }

  /** 
   * @notice The receiver function as required by the IXReceiver interface.
   * @dev The Connext bridge contract will call this function.
   */
  function xReceive(
    bytes32 transferId,
    uint256 amount,
    address currency,
    address originSender, // address of the contract on the origin chain
    uint32 origin, // 	Domain ID of the origin chain
    bytes memory callData
  ) external returns (bytes memory) {
    
    if(
      ! _isUnlock(originSender, origin) 
      && 
      ! _isUnlockOwner()
      ) {
        revert Unauthorized(msg.sender);
      }

    // emit BridgeCallReceived(
    //   chainIds[origin],
    //   lockAddress, 
    //   uint(transferId)
    // );
  }

}