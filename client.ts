import { Socket } from 'net';
import osc from 'osc-min';
import colors from 'colors';

const socket = new Socket();

socket.connect(3333, '127.0.0.1');

const types = [
    true,
    false,
    10,
    'a string',
    123.43,
];

setInterval(() => {
    const address = '/random/address';
    const value = types[Math.round(Math.random() * 4)];
    console.log(`Sending ${colors.green(value.toString())} to ${colors.green(address)}`);
    socket.write(osc.toBuffer(address, [{ value: value }]));
}, 2000);
