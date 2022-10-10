//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;


// This is the main building block for smart contracts.
contract Hello {
    // Some string type variables to identify the token.
    string public name = "My Hardhat Hello";
    string public symbol = "MHH";

    // An address type variable is used to store ethereum accounts.
    address public owner;

    string public greeting;

    /**
     * Contract initialization.
     */
    constructor() {
        owner = msg.sender;
        greeting = "Hello World";
    }

    /**
     * A function to transfer tokens.
     *
     * The `external` modifier makes a function *only* callable from *outside*
     * the contract.
     */
    function call() public view returns (string memory) {
        return greeting;
    }

    function sayHelloWorld() public pure returns (string memory) {
        return 
        
        "Hello World";
    }

    function change(string memory updated) external {
        greeting = updated;
    }

}