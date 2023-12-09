"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("./react"));
const Breeds_1 = require("./Breeds");
const Breed_1 = require("./Breed");
const App = ({ path }) => {
    if (path === "/") {
        return react_1.default.createElement(Breeds_1.Breeds, { document: document });
    }
    else if (path === "/breed") {
        return react_1.default.createElement(Breed_1.Breed, { path: path });
    }
};
exports.App = App;
