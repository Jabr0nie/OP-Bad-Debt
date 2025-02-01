const { Web3 } = require('web3');
const config = require('./config');
const CTokenABI = require('./Abi');

const web3 = new Web3(`https://optimism-mainnet.infura.io/v3/${config.infuraProjectId}`);

const _from = "0xDf4023c082F6E1562fb228D7b961D97aF8708d4c";
const privateKey = `${config.privateKey}`;

// Define the bot addresses

//Moonwell 

const MoonwellComptroller = "0xCa889f40aae37FFf165BccF69aeF1E82b5C511B9";

const MoonwellUSDC = "0x8E08617b0d66359D73Aa11E11017834C29155525";

const cTokenAddress[] = [MoonwellUSDC];
const cTokenAbi = [ /* ABI of the cToken contract */ ];
const cTokenContract = new web3.eth.Contract(cTokenAbi, cTokenAddress);

cTokenContract.events.Borrow({
    fromBlock: 0 // Start from the block number you are interested in
}, function(error, event) {
    if (error) {
        console.error(error);
    } else {
        console.log('Borrow event:', event);
        // Extract borrower address from event.returnValues
    }
});

// Set an interval to call checkFarmStatus every X milliseconds (e.g., 30 seconds)
setInterval(() => {
    checkFarmStatus();
}, 1800000);

const express = require('express');
const app = express();
const port = 8080; // Change to your preferred port

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Your existing routes and logic
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
