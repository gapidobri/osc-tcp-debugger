import { prompt } from 'inquirer';
import yargs from 'yargs';
import oscServer from './server';
import colors from 'colors';

yargs
    .usage(
        'OSC Debugger'
    )
    .command(
        'server [options...]',
        'OSC TCP Server',
        {
            port: {
                alias: 'p',
                default: '3333',
                demandOption: true,
                describe: 'The port that you want the server to listen on'
            },
        },
        async ({ port }) => await oscServer(Number.parseInt(port)),
    )
    .help()
    .alias('h', 'help')
    .parse();