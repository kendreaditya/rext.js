const React = {
    createElement: (tag, props, ...children)=>{
        if (typeof tag === "function") return tag(props);
        const element = {
            tag,
            props: {
                ...props,
                children
            }
        };
        return element;
    }
};
// Maps the virtual DOM to the real DOM
const render = (vdom, container)=>{
    const renderedElement = document.createElement(vdom.tag);
    if (vdom.props) Object.keys(vdom.props).filter((key)=>key !== "children").forEach((name)=>renderedElement[name] = vdom.props[name]);
    if (vdom.props.children) vdom.props.children.forEach((child)=>typeof child === "object" ? render(child, renderedElement) : container.appendChild(document.createTextNode(child)));
    container.appendChild(renderedElement);
};
const App = ()=>/*#__PURE__*/ React.createElement("div", {
        className: "foo",
        __source: {
            fileName: "index.js",
            lineNumber: 31,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.js",
            lineNumber: 32,
            columnNumber: 9
        },
        __self: this
    }, "Hello World"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.js",
            lineNumber: 33,
            columnNumber: 9
        },
        __self: this
    }, "This is my first virtual DOM"));
window.onload = ()=>render(/*#__PURE__*/ React.createElement(App, {
        __source: {
            fileName: "index.js",
            lineNumber: 37,
            columnNumber: 30
        },
        __self: this
    }), document.getElementById("app"));

//# sourceMappingURL=index.c36f364e.js.map
