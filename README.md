## Creating the project
* See: https://hardhat.org/tutorial/creating-a-new-hardhat-project

1. Command prompt
    mkdir week3-hello 
    cd .\week3-hello\
    npm init
    npm install --save-dev hardhat    
2. Add the empty hardhat.config.js
    npx hardhat
3. Add Nomic
    npm install --save-dev @nomicfoundation/hardhat-toolbox
    Add this into the hardhard.config.js: require("@nomicfoundation/hardhat-toolbox");
