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
const react_1 = __importStar(require("./react"));
const App_1 = require("./App");
// const App = () =>  {
//     const [state, setState] = useState(0, 'counter');
//     return (
//     <div className="foo">
//         <div id="about-me-container">
//             <h1>About Me</h1>
//             <p>Hello! I'm [Your Name], a passionate [Your Profession] based in [Your Location]. I love [Your Interests] and enjoy [Your Hobbies].</p>
//             <p id="dynamic-content">I am constantly exploring new things and pushing my boundaries to learn and grow.</p>
//             <hr></hr>
//             <p>State: {state}</p>
//             <button onclick={(...all) => setState(state + 1, App)}>+</button>
//             <button onclick={() => setState(state - 1, App)}>-</button>
//         </div>
//     </div>
//     );
// }
window.onload = () => (0, react_1.render)(react_1.default.createElement(App_1.App, { path: window.location.pathname }), document.getElementById('app'));
