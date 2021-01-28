"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = require("net");
var osc_min_1 = __importDefault(require("osc-min"));
var colors_1 = __importDefault(require("colors"));
var socket = new net_1.Socket();
socket.connect(3333, '127.0.0.1');
var types = [
    true,
    false,
    10,
    'a string',
    123.43,
];
setInterval(function () {
    var address = '/random/address';
    var value = types[Math.round(Math.random() * 4)];
    console.log("Sending " + colors_1.default.green(value.toString()) + " to " + colors_1.default.green(address));
    socket.write(osc_min_1.default.toBuffer(address, [{ value: value }]));
}, 2000);
