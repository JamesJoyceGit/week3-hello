See: https://hardhat.org/tutorial/creating-a-new-hardhat-project

# Command prompt
```
mkdir week3-hello 
cd .\week3-hello
npm init 
npm install --save-dev hardhat
```
# Add the empty hardhat.config.js
```
npx hardhat
```
# Add Nomic 
```
npm install --save-dev @nomicfoundation/hardhat-toolbox 
```
Add this into the hardhard.config.js: require("@nomicfoundation/hardhat-toolbox");