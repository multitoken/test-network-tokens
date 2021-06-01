const fs = require('fs');
const path = require('path')

const getContracts = () => {
    const contractsPath = path.resolve(__dirname, '../build/contracts');
    const fileNames = fs.readdirSync(contractsPath);

    const addresses = []
    for (const fileName of fileNames) {
        if (fileName == 'Migrations.json') {
            continue;
        }

        const filePath = path.resolve(contractsPath, fileName);
        let rawData = fs.readFileSync(filePath);
        let jsonData = JSON.parse(rawData);

        if (jsonData['networks']['80001']) {
            addresses.push({
                name: jsonData['contractName'],
                address: jsonData['networks']['80001']['address'],
            });
        }
    }

    return addresses;
}

module.exports = {
    getContracts,
};
