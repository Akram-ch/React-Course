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
                <small>?? 2021 Ziroll development. All rights reserved.</small>
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
            <small>?? 2021 Ziroll development. All rights reserved.</small>
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
The array.map() method returns a new array with the same size by applying the function passed in as a parameter on each element in the original array.

example :
```javascript
const array = [1,2,3,4,5];
const squared = array.map((number)=> number*number;
) //
console.log(squared) //[1,4,9,16,25]
```
___
## Conditional rendering :
```javascript
    {props.openslots === 0 && <div>SOLD OUT</div>}
    //Sold out is only rendered when props. openslots == 0
```

# Dynamic web design :

## Event Listeners : 
```javascript
    import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
```

## props vs states : 
 ###    props : property that is passed to a component in order for that component to run correctly, props are immutable.

 ### state :  values that are defined **within** a component. They are used any time a value needs to be updated on the screen

quiz : 
```markdown
1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.
```

## React.useState() :
```javascript
export default function App() {
    const result = React.useState("Yes")
    console.log(result) //["Yes", f() -- empty function]
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}
```

quiz : 
```markdown
    1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer above) to the state setter function?
Whenever you DO need the previous value to determine the new value
```
## Review - Ternary operator : 
```javascript
    let answer  // Use ternary here
    if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }
    // is equivalent to : 
    answer = isGoingOut === true ? "yes" : "no" 
```

### Quiz : Conditional rendering
```markdown
1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on a condition of some sort


2. When would you use &&?
When you want to either display something or NOT display it


3. When would you use a ternary?
When you need to decide which thing among 2 options to display


4. What if you need to decide between > 2 options on
   what to display?
Use an `if...else if... else` conditional or a `switch` statement
```

# React Forms :

```javascript
export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: ""}
    )
    
    /**
     * Challenge: add an email field/state to the form
     */
    
    console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
        return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"value
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value ={formData.lastName}
            />
        </form>
    )
}
```

textArea : 
```html
    <textarea 
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
    />
```

checkboxes : 
```html
    <input 
            type="checkbox" 
            id="isFriendly" 
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
        />
    <label htmlFor="isFriendly">Are you friendly?</label>
    //htmlFor : associates the label with the input
```

some good practices : 
```javascript
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
```

### Form quiz : 

```markdown
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
Right before the form is submitted.


2. In a React app, when do you gather all the data from
   the filled-out form?
As the form is being filled out. The data is all held in local state.


3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
`name` property.


4. What's different about saving the data from a checkbox element
   vs. other form elements?
A checkbox uses the `checked` property to determine what should
be saved in state. Other form elements use the `value` property instead.


5. How do you watch for a form submit? How can you trigger
   a form submit?
- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.
```

## Making API calls :

### Side effects : 
* local (server) storage
* API/database interactions
* subscriptions (e.g web sockets)
* syncing 2 internal states 
* basically anything that react isn't in charge of

### side effects quiz :
```markdown
1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function


``` 