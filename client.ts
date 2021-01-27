import { Socket } from 'net';
import osc from 'osc-min';

const socket = new Socket();

socket.connect(3333, '127.0.0.1');
socket.write(osc.toBuffer('/random/address', [{
    value: 123,
}]));