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
