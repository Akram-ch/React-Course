# React course
### How to import React into your project :
```html
<head>
    ...
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</head>
```
CDN links page : https://reactjs.org/docs/cdn-links.html

this is the "easy" way.

preferrably you should also import babel
```html
<head>
    ...
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="index.js" type="text/babel">
</head>
```

adding the attribute type="text/babel" allows you to use JSX in any script tag

## Why use React? : 
___
## **Write composable code**:
### Creating and rendering React web components:

index.js :
```Javascript
//Creating a component
function MainContent(){
    return (<h1>I'm learning React!</h1>);
}

//rendering a component
ReactDOM.render(
    <div>
        <MainComponent />
    </div>
    , document.getElementById("root")
)
```
index.html
```html
<body>
    <div id = "root">
        <!--This is where my component will be displayed-->
    </div>
</body>
```
## **React is declarative :**
```Javascript
const h1 = document.createElement(h1);
const root = document.getElementById("root");
h1.textContent = "some Text";
h1.className = "Header";
root.appendChild(h1);

//this code can be reduced to a single line using React !

ReactDOM.render(<h1 className="header">some text</h1>,
document.getElementById("root"));
```

## JSX syntax : 
