import { createServer } from 'net';
import osc from 'osc-min';
import colors from 'colors';

export default async function oscServer(port: number) {

    const server = createServer();

    server.on('connection', (socket) => {
        dlog(`Client connected from ${colors.green(socket.localAddress.split(':')[3])}`);

        socket.on('data', (data) => {
            const { address, args } = osc.fromBuffer(data);
            const mappedArgs = args.map((arg: any) => `${arg.value} (${arg.type})`);
            dlog(`${colors.blue(address)} ${mappedArgs[0]}`);
        });

        socket.on('error', (error) => {
            dlog('Client force disconnected');
        });

        socket.on('end', () => {
            dlog('Client disconnected');
        });
    });

    server.on('error', (error) => {
        dlog(error);
    });

    server.listen(port, () => {
        dlog(`Listening on port ${colors.green(port.toString())} for incoming connections`);
    });

}

const dlog = (message?: any) => {
    console.log(`[${new Date().toTimeString().split(' ')[0]}] `.gray + message);
}