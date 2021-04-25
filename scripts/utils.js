const fs = require('fs');
const path = require('path')

const getContracts = () => {
    const contractsPath = path.resolve(__dirname, '../build/contracts');
    const fileNames = fs.readdirSync(contractsPath);

    const addresses = []
    for (const fileName of fileNames) {
        const filePath = path.resolve(contractsPath, fileName);
        let rawData = fs.readFileSync(filePath);
        let jsonData = JSON.parse(rawData);

        if (jsonData['networks']['42']) {
            addresses.push({
                name: jsonData['contractName'],
                address: jsonData['networks']['42']['address'],
            });
        }
    }

    return addresses;
}

export {
    getContracts,
};
