//Nested html in React

{/* <div id ="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h1 tag</h2>
  </div>

<div id ="child2">
  <h1>I'm h1 tag</h1>
  <h2>I'm h1 tag</h2>
</div>
</div> */}

/* const header = React.createElement("div",{ id: "parent" }, [
  React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm an h10 tag"),
      React.createElement("h2", {}, "I am an h12 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm an h11 tag"),
      React.createElement("h2", {}, "I am an h12 tag"),
        ]),
     ]); */



const parent = React.createElement("div",{ id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
          ]),
       ]);



// const heading = React.createElement(
//   'h1',
//   {id: "heading", xyz:"abc"},
//   "Hello Pavan this how i learn how to code!"
// );

console.log(parent);

/* creating an element with three props and then assigning that to DOM browser to the root and display them on the screen. Everything we will render inside the r
oot what is root document.getElement by ID is the root */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
