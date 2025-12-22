const imgUrl =
  "https://i.pinimg.com/736x/2c/b5/89/2cb5897bdb8cdbae0779db72cc473ed0.jpg";

const main = document.querySelector("#root");

const div = React.createElement(
  "div",
  { id: "section1" },
  React.createElement(
    "div",
    { id: "elem" },
    React.createElement("h3", { id: "projects" }, "+200 project completed"),
    React.createElement("h3", { id: "raised" }, "+50 startup raised")
  ),

  React.createElement(
    "div",
    { id: "img-wrapper" },
    React.createElement("img", { src: imgUrl, alt: "profile" })
  ),
  React.createElement("h1", { id: "hello" }, "Hello"),
  React.createElement("h5", { id: "intro" }, "-it's vikas a design wizerd")
);

const Root = ReactDOM.createRoot(main);
Root.render(div);
