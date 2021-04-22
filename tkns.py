import os
import pathlib

sol_tmpl = '''// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../BaseCoin.sol";

contract %filename% is BaseCoin {
    constructor() ERC20("%name%", "%symbol%") {
    }

    function decimals() public override view virtual returns (uint8) {
        return %decimals%;
    }
}
'''

migration_tmpl = '''const %filename% = artifacts.require("%filename%");

module.exports = function(deployer) {
  deployer.deploy(%filename%);
};
'''

DATA = [
    ('Bitcoin', None, 'BTC', 18),
    ('Celo', None, 'CELO', 18),
    ('DODO', None, 'DODO', 18),
    ('Ethereum', None, 'ETH', 18),
    ('Flow', None, 'FLOW', 18),
    ('Keep Network', None, 'KEEP', 18),
    ('NEAR Protocol', None, 'NEAR', 18),
    ('Rally', None, 'RLY', 18),
    ('Rarible', None, 'RARI', 18),
    ('Reserve Rights', None, 'RSR', 18),
    ('Terra', None, 'LUNA', 18),
    ('UMA', None, 'UMA', 18),

    ('PancakeSwap', None, 'CAKE', 18),
    ('THORChain', None, 'RUNE', 18),
    ('Fei Protocol', None, 'FEI', 18),
    ('SushiSwap', None, 'SUSHI', 18),
    ('DeFiChain', None, 'DFI', 18),
    ('0x', 'ZeroX', 'ZRX', 18),
    ('Bancor', None, 'BNT', 18),
    ('Ren', None, 'REN', 18),
    ('Curve', None, 'CRV', 18),
    ('1inch', 'OneInch', '1INCH', 18),
    ('VENUS', None, 'XVS', 18),
    ('Loopring', None, 'LRC', 18),
    ('Kyber Network', None, 'KNC', 18),
    ('Amp', None, 'AMP', 18),
    ('ZKS', None, 'ZKS', 18),
    ('Augur', None, 'REP', 18),
    ('Balancer', None, 'BAL', 18),
    ('Raydium', None, 'RAY', 18),
    ('Alpha Finance', None, 'ALPHA', 18),
    ('Serum', None, 'SRM', 18),
    ('Tribe', None, 'TRIBE', 18),

    ('Polkadot', None, 'DOT', 18),
    ('Filecoin', None, 'FIL', 18),
    ('Zcash', None, 'ZEC', 18),
    ('ICON', None, 'ICX', 18),
    ('OMG Network', None, 'OMG', 18),
    ('Ankr Network', None, 'ANKR', 18),
    ('Flexacoin', None, 'FXC', 18),
    ('Livepeer', None, 'LPT', 18),
    ('Kyber Network', None, 'KNC', 18),
    ('XRP', None, 'XRP', 18),
    ('Origin Protocol', None, 'OGN', 18),
    ('Mirror Protocol', None, 'MIR', 18),
    ('Augur', None, 'REP', 18),
    ('Numeraire', None, 'NMR', 18),
    ('Civic', None, 'CVC', 18),
    ('FunFair', None, 'FUN', 18),
    ('Injective Protocol', None, 'INJ', 18),
    ('Kin', None, 'KIN', 18),
    ('WAX', None, 'WAXP', 18),
    ('Celer Network', None, 'CELR', 18),
    ('Ampleforth', None, 'AMPL', 18),
    ('Oasis Network', None, 'ROSE', 18),
    ('Handshake', None, 'HNS', 18),
    ('Thunder Token', None, 'TT', 18),
    ('API3', None, 'API3', 18),
    ('GIFTO', None, 'GTO', 18),
    ('DMarket', None, 'DMT', 18),
    ('PowerTrade Fuel', None, 'PTF', 18),
    ('Bloom', None, 'BLT', 18),
    ('Enigma', None, 'ENG', 18),
    ('MIR COIN', None, 'MIR', 18),
    ('Maecenas', None, 'ART', 18),
    ('Gems', None, 'GEM', 18),

    ('Wootrade Network', None, 'WOO', 18),
    ('Perpetual Protocol', None, 'PERP', 18),
    ('Hxro', None, 'HXRO', 18),
    ('Meta', None, 'MTA', 18),
    ('dHEDGE', None, 'DHT', 18),
    ('KeeperDAO', None, 'ROOK', 18),

    ('Cardano', None, 'ADA', 18),
]

def render_tmpl(tmpl, **kwargs):
    for k, v in kwargs.items():
        tmpl = tmpl.replace(f'%{k}%', str(v))

    return tmpl


def main():
    # print(render_tmpl(sol_tmpl, name='Xyz', symbol='xyz', decimals=18))
    # print(render_tmpl(migration_tmpl, name='Xyz'))

    cd = pathlib.Path(__file__).parent.absolute()

    # migration_number = 27

    migration_number = 39

    used_symbols = set([
        'AAVE', 'AR', 'AUDIO', 'BAT', 'BUSD', 'BTC', 'CELO', 'LINK',
        'CHZ', 'COMP', 'CRO', 'DAI', 'MANA', 'DODO', 'ETH',
        'FLOW', 'FTT', 'HOT', 'HT', 'KEEP', 'MKR', 'NEAR',
        'NEXO', 'MATIC', 'RLY', 'RARI', 'RSR', 'SNX', 'LUNA',
        'USDT', 'GRT', 'UMA', 'UNI', 'USDC', 'WBTC', 'WETH',
        'YFI',
    ])

    for name, filename, symbol, decimals in DATA:
        if symbol in used_symbols:
            print(f'{symbol} already added')
            print(f'migration number {migration_number}')
            continue

        if not filename:
            filename = ''.join([n.capitalize() for n in name.split(' ')])

        with open(os.path.join(cd, f'contracts/coins/{filename}.sol'), 'w+') as f:
            f.write(render_tmpl(sol_tmpl, filename=filename, name=name, symbol=symbol, decimals=decimals))

        migrationname = '_'.join([n for n in name.split(' ')])

        with open(os.path.join(cd, f'migrations/{migration_number}_deploy_{migrationname.lower()}.js'), "w+") as f:
            f.write(render_tmpl(migration_tmpl, filename=filename))

        used_symbols.add(symbol)
        migration_number += 1


if __name__ == '__main__':
    main()
