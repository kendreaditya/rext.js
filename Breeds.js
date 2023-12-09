"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breeds = void 0;
const react_1 = __importStar(require("./react"));
const Breeds = () => {
    const [breeds, setBreeds] = (0, react_1.useState)([], "breeds");
    const [fetchComplete, setFetchComplete] = (0, react_1.useState)(false, 'fetch');
    // Check if fetchComplete is false before performing the fetch
    if (!fetchComplete) {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => response.json())
            .then((data) => {
            setBreeds(Object.keys(data.message), exports.Breeds);
            setFetchComplete(true, exports.Breeds);
        });
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Good Bois \uD83D\uDC36"),
        react_1.default.createElement("ul", null, breeds.map((breed) => (react_1.default.createElement("li", { key: breed },
            react_1.default.createElement("a", { href: `/breed?b=${breed}` }, breed)))))));
};
exports.Breeds = Breeds;
