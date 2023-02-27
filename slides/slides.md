---
layout: cover
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# React Workshop

Lesson 4: Setup

---

# HTML

Setting up HTML (scripts are from: https://beta.reactjs.org/learn/add-react-to-a-website)

```html {all|10}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Workshop</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="./index.js"></script>
  </body>
</html>
```

---

# JS

Setting up JS

```js {all|5|6|7|13}
"use strict";

ReactDOM.createRoot(document.querySelector("#root")).render(
  React.createElement(
    "h1", // tag name
    { style: { fontFamily: "sans-serif" } }, // attributes
    "Hello, World!" // children
  )
);

// React writes the following to the actual DOM:
/*
    <h1>Hello, World!</h1>
*/
```

---

# Nested Elements

```js
"use strict";

ReactDOM.createRoot(document.querySelector("#root")).render(
  React.createElement(
    "div", // tag name
    { style: { fontFamily: "sans-serif" } }, // attributes
    [
      React.createElement("h1", null, "Hello, World!"), // (null here just means no attributes)
      React.createElement("p", null, "This is a paragraph"),
    ] // Children
  )
);
```

---

# JSX

It is quite annoying to have to keep writing `React.createElement` all the time. Wouldn't it be nice if we could just write:

```jsx
"use strict";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <div style={{ fontFamily: "sans-serif" }}>
    <h1>Hello, World!</h1>
    <p>This is a paragraph</p>
  </div>
);
```

Well, we can! It's called JSX, and it's a syntax extension to JavaScript. It looks a lot like HTML, but it's actually just JavaScript.

JSX will take the above code and convert it back into `React.createElement` calls.

---

# Adding JSX

To use JSX, we need to add a Babel transform to our project. Babel is a JavaScript compiler that converts modern JavaScript into older versions that are compatible with older browsers. It can also convert JSX into `React.createElement` calls.

```html {19-20} {maxHeight:'300px'}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Workshop</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="./index.js" type="text/babel"></script>
  </body>
</html>
```

Don't forget to add `type="text/babel"` to tell Babel to transform the script.
