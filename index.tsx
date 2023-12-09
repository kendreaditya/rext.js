import React, { render, useState } from './react';
import { App } from './App';

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

window.onload = () => render(<App path={window.location.pathname} />, document.getElementById('app'));
