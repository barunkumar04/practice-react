// This file is equivalent of index.js/man.js

// Under the hood, for any tag, react create/manage metadata as below
// lets say it a <a>...</a> tag
const reactElement = {
    type : 'a',
    props : {
        href : 'www.google.com',
        target : '_blank',
    },
    children : 'Click me to visit google.com'
}


function constomRander(reactElement, mainContainter){
    const domElementOfTypeA = document.createElement(reactElement.type);
    
    domElementOfTypeA.innerHTML = reactElement.children;
    
    domElementOfTypeA.setAttribute('href', reactElement.props.href);
    domElementOfTypeA.setAttribute('target',reactElement.props.target);

    mainContainter.appendChild(domElementOfTypeA);
}


const mainContainter = document.getElementById(".root");



// Logic to rander this element
constomRander(reactElement, mainContainter)
