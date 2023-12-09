(() => {
  // react.ts
  var states = {};
  var render = (vdom, container) => {
    if (typeof vdom !== "object")
      return container.appendChild(document.createTextNode(vdom));
    const renderedElement = document.createElement(vdom.tag);
    if (vdom.props) {
      Object.keys(vdom.props).filter((key) => key !== "children").forEach((name) => renderedElement[name] = vdom.props[name]);
    }
    if (vdom.props.children) {
      vdom.props.children.forEach((child) => Array.isArray(child) ? child.forEach((c) => render(c, renderedElement, document)) : render(child, renderedElement, document));
    }
    container.appendChild(renderedElement);
  };
  var React = {
    createElement: (tag, props, ...children) => {
      if (typeof tag === "function") {
        return tag(props);
      }
      const element = { tag, props: { ...props, children } };
      return element;
    }
  };
  var useState = (initialState, stateName) => {
    states[stateName] = states[stateName] || initialState;
    const setState = (newState, app) => {
      states[stateName] = newState;
      document.getElementById("app").innerHTML = "";
      render(app(), document.getElementById("app"));
    };
    return [states[stateName], setState];
  };
  var react_default = React;

  // Breeds.tsx
  var Breeds = () => {
    const [breeds, setBreeds] = useState([], "breeds");
    const [fetchComplete, setFetchComplete] = useState(false, "fetch");
    if (!fetchComplete) {
      fetch("https://dog.ceo/api/breeds/list/all").then((response) => response.json()).then((data) => {
        setBreeds(Object.keys(data.message), Breeds);
        setFetchComplete(true, Breeds);
      });
    }
    return /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement("h1", null, "Good Bois \u{1F436}"), /* @__PURE__ */ react_default.createElement("ul", null, breeds.map((breed) => /* @__PURE__ */ react_default.createElement("li", { key: breed }, /* @__PURE__ */ react_default.createElement("a", { href: `/breed?b=${breed}` }, breed)))));
  };

  // Breed.tsx
  var Breed = (path) => {
    const [breed, setBreed] = useState("", "breed");
    const [image, setImage] = useState("", "image");
    const [loading, setLoading] = useState(false, "loading");
    if (!loading) {
      const params = new URLSearchParams(path);
      const b = params.get("b");
      if (b) {
        fetch(`https://dog.ceo/api/breed/${b}/images/random`).then((response) => response.json()).then((data) => {
          setBreed(b, Breed);
          setImage(data.message, Breed);
          setLoading(true, Breed);
        });
      }
      return /* @__PURE__ */ react_default.createElement("div", null, "Loading...");
    } else {
      return /* @__PURE__ */ react_default.createElement("div", null, /* @__PURE__ */ react_default.createElement("a", { href: "/" }, "Go Back"), /* @__PURE__ */ react_default.createElement("h1", null, breed), /* @__PURE__ */ react_default.createElement("img", { width: "400", src: image, alt: breed }));
    }
  };

  // App.tsx
  var App = ({ path }) => {
    if (path === "/") {
      return /* @__PURE__ */ react_default.createElement(Breeds, { document });
    } else if (path === "/breed") {
      return /* @__PURE__ */ react_default.createElement(Breed, { path });
    }
  };

  // index.tsx
  window.onload = () => render(/* @__PURE__ */ react_default.createElement(App, { path: window.location.pathname }), document.getElementById("app"));
})();
