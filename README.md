# Decentralized Lottery Contract

This repository contains a Solidity smart contract for a simple decentralized lottery.

## Contract Overview

The Lottery contract allows participants to join the lottery by sending 1 Ether to the contract. Once a minimum number of participants is reached, the contract randomly selects a winner and transfers the contract balance (minus a fee) to the winner.

## Features

- Participants can join the lottery by sending 1 Ether.
- The contract randomly selects a winner when a minimum number of participants is reached.
- A fee is deducted from the contract balance before transferring it to the winner.
- Only the contract manager can initiate the winner selection process.

## Contract Functions

- `joinLottery`: Allows participants to join the lottery by sending 1 Ether.
- `selectWinner`: Initiates the process of randomly selecting a winner and transferring the contract balance to them. Only the contract manager can call this function.

## Getting Started

1. Clone the repository:
   ```bash
   gh repo clone jishnu2021/DeFiPolygon

2. Compile the Lottery.sol file using your preferred Solidity compiler
3. Deploy the compiled contract to your preferred blockchain network
4. Deploy the compiled contract to your preferred blockchain network
5. Use tools like Remix IDE or Truffle to interact with the deployed contract


License
- This project is licensed under the MIT License. See the LICENSE file for details.



