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
    <h1 style="font-family: sans-serif">Hello, World!</h1>
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

---

# Components

One of the best features of React is the ability to create components. You can think of components like custom tags. The advantage of using components is separation of concerns. In traditional web dev, we separate the content, styling, and logic. But in web app dev, it makes more sense to separate based on what the code actually does. So for example, a `Button` component would have the logic for all the styling, logic and content related to a `Button`. This also allows you to abstract away the details of the button to the `Button` component, meaning that the code using it does not need to care about implementation details. You could also imagine much more complicated components like `Modal`s, `Tab`s and `Menu`s.

---

# Components

A component is just a function that returns some JSX. In JSX, custom components **must** start with a capital letters, as lowercase names are reserved for built in tags. They represeent parts of the UI.

```jsx
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
```

---

# JSX Syntax

JSX is stricter than HTML. You have to close tags like `<br />`. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper:

---

# Styles

React is not very concerned about how you add your styles. Later in this course we will look at different styling solutions, that make it easier to make beautiful websites. To add a CSS class, use `className`, which works the same way as the HTML `class` attribute.

```jsx
"use strict";

function MyButton() {
  return <button className="myButton">I'm a button</button>;
}

ReactDOM.createRoot(document.querySelector("#root")).render(
  <div>
    <h1>Welcome to my app</h1>
    <MyButton />
  </div>
);
```

```css
/* index.css */
.myButton {
  background-color: red;
}
```

---

# Understanding components

The most important thing about components is that they are 'pure functions'. This means that given the same inputs they give the same outputs. This is important because it means that React can cache the output of a component, and only re-render it when the inputs change. This is what makes React so fast.

--- section
layout: center

---

# Coming up next

Before we move on to more interesting topics, such as component states, and passing data to our components, we will need to set up some tools to make our lives easier. This will be the topic of next lesson.

--- section
layout: cover
background: https://source.unsplash.com/collection/94734566/1920x1080
download: true

---

# React Workshop

Lesson 5: Setting up a development environment

---

# Install Node.js (WSL)

Follow [this](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) guide.

---

## Install pnpm

`pnpm` is an extremely fast package manager. Most people use `npm` or `yarn`, but `pnpm` is much faster. The usage is almost identical to `npm`, so it's easy to switch.

```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```

## Create a new Vite project

Vite is a bundler that allows us to take multiple JS files and combine them into one. It has built in support for JSX and lots of other cool features. It's extremely fast, and makes it easier to build large projects. It includes a dev server, with features such as auto refresh, and easier debugging.

The command below creates a new project called `my-react-app` using the `react` template.

```bash
pnpm create vite my-react-app --template react
cd my-react-app
pnpm install
pnpm run dev # Launches the dev server
```

---

# Clean up our React project

Our React project comes with lots of starter code which we don't need.

Delete the `assets` folder. Delete all the code in `App.jsx`, `index.css` and `App.css`. Currently, there will be an error; we will fix this later.

---

# Understanding the code

Open `main.jsx`. There will be the following code:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

This is very similar to the code we wrote ourselves. Note the addition of a component, `<React.StrictMode />` wrapping our App component. This is a component that tells React to be less lenient, and helps prevent bugs. We also import `./index.css`. The great thing about bundlers is that you can even import CSS, as bundlers can bundle all kinds of files into your JS, including CSS. Currently, this code is not working since it imports an App component, which we just deleted.

---

# Building the App component
