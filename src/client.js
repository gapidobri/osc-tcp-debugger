"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = require("net");
var osc_min_1 = __importDefault(require("osc-min"));
var socket = new net_1.Socket();
socket.connect(3333, '127.0.0.1');
socket.write(osc_min_1.default.toBuffer('/random/address', [{
        value: 123,
    }]));
