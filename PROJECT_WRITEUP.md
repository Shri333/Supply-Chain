# Project Writeup - Shrihan Dadi

## UML Diagrams

Generally speaking, the item in the supply chain transitions from the farmer to the distributor to the retailer to the consumer. However, each role does not hold on to the item for the same amount of time. The farmer controls harvesting, processing, packing, and selling to the distributor. The distributor handles buying the item from the farmer and shipping the item to the retailer. The retailer handles receiving the item from the distributor, and the customer handles purchasing the item from the retailer. These relationships are detailed in the UML diagrams below.

![image info](./Supply%20Chain%20UML%20Activity.png)
![image info](./Supply%20Chain%20UML%20Sequence.png)
![image info](./Supply%20Chain%20UML%20State.png)
![image info](./Supply%20Chain%20UML%20Class.png)

## Libraries

Truffle is used to configure the project for ease-of-use and the ability to consolidate the backend and frontend in one mono repository. The backend (smart contracts) is written in Solidity, and the contracts run on the Ethereum Virtual Machine. The Ethereum network was chosen because of its stability and the fact that transactions do not take too long to be added to the blockchain (around 15-30 seconds). For the frontend, HTML/CSS/JavaScript (a project was scaffolded using Node.js) was used in combination with web3.js to provide access to blockchain functionality through the browser. Web3.js was used because of its ability to directly detect injected providers such as MetaMask and its ease of use for interacting with Ethereum smart contracts through the contracts' ABIs (application binary interfaces). The contracts are publicly deployed to the Rinkeby test network, but for local testing, Ganache was used to create a local Ethereum network.

## IPFS

**TODO**

## Steps

To run a local version of this project, follow the following steps:
1. Install Node.js v12+, Ganache CLI, Truffle v4.2.4, and MetaMask (if not already installed)
2. Clone this repository and `cd` into the `project-6` directory
3. Install the prerequisite packages with `npm install`
4. Launch `ganache-cli` with the following seed: `spirit supply whale amount human item harsh scare congress discover talent hamster`
5. Compile and migrate the smart contracts with `truffle compile` and `truffle migrate`
6. In another terminal window, launch the frontend with `npm run dev`

## Contract Addresses (Rinkeby)

**TODO**