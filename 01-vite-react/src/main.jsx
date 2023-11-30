import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './Welcome'
import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//       <>
//         <App />
//         <Welcome/>
//         <MyCustomReactApp/> {/* This has worked! */}
//       </>

//       // reactElement // Won't work
      
// )


// Exploration#1 - Basically <App/> is an function, so can we not write a function her itself and use? - Yes.

function MyCustomReactApp(){

  return (
    <h1> My Custom React App </h1>
  );

}

// Exploration#2 - React parse content of render() method in blow format. So can we not use directly? 
// No, because react doesn't understand 'type', 'props' etc

const reactElement = {
  type : 'a',
  props : {
      href : 'www.google.com',
      target : '_blank',
  },
  children : 'Click me to visit google.com'
}

// Exploration#3 - Custom React elemt didn't work. Will a standard react element work?

// const arefElement = (
//   <a href='www.google.com' target='_blank'> Click me to visit Google</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   arefElement
// )

// Exploration#3 Works! Uncomment line#42 to #48 to check

// Exploration#4 - Lets create a react element from api, check if that works.
// const aHrefEleent = React.createElement(
//   'a',
//   {href:'wwww.google.com', target:'_blank'},
//   'Click to visit google'
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   aHrefEleent
// )

// Exploration#4 Works! Uncomment line#53 to #61 to check

// Exploration#5 - How to use evalation expresion and why we can't use evaluation.
const userName = 'Barun'
const aHrefEleent = React.createElement(
  'a',
  {href:'wwww.google.com', target:'_blank'},
  'Click to visit google',
  userName // Variables goes here.
  // Here we can't write if-else, for etc
);

ReactDOM.createRoot(document.getElementById('root')).render(
  aHrefEleent
)