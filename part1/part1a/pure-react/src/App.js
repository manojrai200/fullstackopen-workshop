const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Pixel Perfect Pizzas")
  );
};

const react = document.getElementById("root");
const root = ReactDOM.createRoot(react);
root.render(React.createElement(App));