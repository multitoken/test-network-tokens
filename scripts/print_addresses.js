const {getContracts} = require("./utils");


for (let contract of getContracts()) {
    console.log(`* ${contract.name}: \`${contract.address}\``);
}
