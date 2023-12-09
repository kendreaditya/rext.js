// Stores the state of the application
const states = {};
// Maps the virtual DOM to the real DOM
const render = (vdom, container)=>{
    const renderedElement = document.createElement(vdom.tag);
    if (vdom.props) Object.keys(vdom.props).filter((key)=>key !== "children").forEach((name)=>renderedElement[name] = vdom.props[name]);
    if (vdom.props.children) vdom.props.children.forEach((child)=>typeof child === "object" ? render(child, renderedElement) : renderedElement.appendChild(document.createTextNode(child)));
    container.appendChild(renderedElement);
};
const App = ()=>{
    const [state, setState] = React.useState(0, "counter");
    return /*#__PURE__*/ React.createElement("div", {
        className: "foo",
        __source: {
            fileName: "index.tsx",
            lineNumber: 26,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 27,
            columnNumber: 9
        },
        __self: this
    }, "Hello World"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 28,
            columnNumber: 9
        },
        __self: this
    }, "This is my first virtual DOM"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 30,
            columnNumber: 9
        },
        __self: this
    }, "State: ", state), /*#__PURE__*/ React.createElement("button", {
        onclick: (...all)=>setState(state + 1),
        __source: {
            fileName: "index.tsx",
            lineNumber: 31,
            columnNumber: 9
        },
        __self: this
    }, "+"), /*#__PURE__*/ React.createElement("button", {
        onclick: ()=>setState(state - 1),
        __source: {
            fileName: "index.tsx",
            lineNumber: 32,
            columnNumber: 9
        },
        __self: this
    }, "-"));
};
window.onload = ()=>render(/*#__PURE__*/ React.createElement(App, {
        __source: {
            fileName: "index.tsx",
            lineNumber: 37,
            columnNumber: 30
        },
        __self: this
    }), document.getElementById("app"));

//# sourceMappingURL=index.ad9a7e97.js.map
