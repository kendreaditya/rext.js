const states = {};

// Maps the virtual DOM to the real DOM
export const render = (vdom, container) => {
    if (typeof vdom !== 'object')
        return container.appendChild(document.createTextNode(vdom));

    const renderedElement = document.createElement(vdom.tag);

    if (vdom.props) {
        Object.keys(vdom.props)
            .filter(key => key !== 'children')
            .forEach(name => renderedElement[name] = vdom.props[name]);
    }

    if (vdom.props.children) {
        vdom.props.children.forEach(child => (Array.isArray(child)) ? child.forEach(c => render(c, renderedElement)) : render(child, renderedElement));
    }

    container.appendChild(renderedElement);
}


const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === 'function') {
            return tag(props);
        }

        const element = { tag, props: { ...props, children } };
        return element;
    }
}

export const useState = (initialState, stateName) => {
    // initialState.name = stateName;
    // initialState.callbacks = []
    states[stateName] = states[stateName] || initialState;

    const setState = (newState, app) => {
        states[stateName] = newState;
        // states[stateName].callbacks.forEach(callback => callback());

        // TODO: Make a real diffing algorithm
        document.getElementById('app').innerHTML = '';
        render(app(), document.getElementById('app'));
    }

        return [states[stateName], setState];
}

// export const createContext = (context) => {
//     Object.keys(context).forEach(key => contexts[key] = context[key]);
//     console.log(contexts);
//     return context;
// };
// export const useContext = (context) => {
//     console.log(contexts);
//     return Object.keys(context).map(key => contexts[key]);
// };


export default React;