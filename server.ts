import { createServer } from 'net';
import osc from 'osc-min';
import colors from 'colors';

export default async function oscServer(port: number) {

    const server = createServer((socket) => {

        console.log(`A client has connected from ${colors.green(socket.localAddress.split(':')[3])}`);
    
        socket.on('data', (data) => {
            const { address, args } = osc.fromBuffer(data);
            const mappedArgs = args.map((arg: any) => `${arg.value} (${arg.type})`);
            console.log(`${colors.blue(address)} ${mappedArgs[0]}`);
        });

        socket.on('error', (error) => {
            console.log('Client disconnected with error');
        });

        socket.on('end', () => {
            console.log('Client disconnected');
        });

    });

    server.on('error', (error) => {
        console.log(error);
    });

    server.listen(port, () => {
        console.log(`Server is now listening on port ${colors.green(port.toString())} for incoming connections.`);
    });

}