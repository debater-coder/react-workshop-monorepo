"use strict";

function MyButton() {
  return <button>I'm a button</button>;
}

ReactDOM.createRoot(document.querySelector("#root")).render(
  <div>
    <h1>Welcome to my app</h1>
    <MyButton />
  </div>
);
