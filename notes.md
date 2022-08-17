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

example: 
```Javascript
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
)
```

## Importing React the "right" way :
cli command: 

```
npx create-react-app my-app
```
Javascript file :
```Javascript
import React from "react"
import ReactDOM from "react-dom/client"
```

### Update Heads up
```Javascript
//version 17
ReactDOM.render(<p></p>,document.getElementById("root")) 
//version 18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)
```

____

## Parent/Child components

```Javascript
function Header() { //child component
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}
function Page() { //Parent component
    return (
        <div>
            <Header /> //calling the child component
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
    ReactDOM.render(<Page />, document.getElementById('root'));

}
```

## Organizing components : 

header.js :
```javascript
import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
```

index.js : 
```javascript
import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
```

# Data driven React :

## React props :

props is shor for 'properties' .

**App.js** :
```javascript
function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}
```

**Contacts.js** : 
```javascript
    export default function Contact(props) {
        /* 
            {
                img: "./images/mr-whiskerson.png", 
                name: "Mr. Whiskerson", 
                phone: "(212) 555-1234", 
                email: "mr.whiskaz@catnap.meow"
            }
        */
    
        console.log(props)
        return (
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{props.email}</p>
                </div>
            </div>
        )
}
```

## Review - Destructuring objects :
```javascript
const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

const {img, name} = person;
console.log(name) //Mr. Whiskerson
```
___
## Review - array.map() method : 
