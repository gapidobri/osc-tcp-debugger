import { prompt } from 'inquirer';
import yargs from 'yargs';
import oscServer from './server';
import colors from 'colors';

yargs
    .usage(
        'OSC TCP Debugger'
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
    .command(
        'client [options...]',
        'OSC TCP Client',
        {
            ip: {
                alias: 'i',
                default: '127.0.0.1',
                demandOption: true,
                describe: 'IP of the OSC server'
            },
            port: {
                alias: 'p',
                default: '3333',
                demandOption: true,
                describe: 'Port of the OSC server'
            }
        }
    )
    .help()
    .alias('h', 'help')
    .parse();