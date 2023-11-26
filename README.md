# React

## Documentation
    - https://react.dev/learn

## Create a react app - A time consuming way
    - npx create-react-app <project_name>
    - npx: Node Package Manager
    - How to run: npm run dev

## Create a ract app - A latest and quick way: Vite
    - A bundler. Link - https://vitejs.dev
    - npm create vite@latest
    - node_module won't be created. usne npm install to create it
    - lesser library bundiling
    - How to run: npm run start

## A react project entry point - package.json
    - Entry point is - package.json
    - It contains:
        - dependencies: react, react-dom, testing libraries(jest-dom, react, user-event) and web-vitels (help gazing app performance)
        - scrips: t start, build, test and eject (to eject from react)
        - lint config
        - browser list

## React execution flow
    - https://www.youtube.com/watch?v=yNbnA5pryMg&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=3

## Creating a custom react library
    - Refer 03_custom_react

## Explorations 
    - Refer main.jsx and App.jsx to understand nuanses of few why-how. [IMP]

## React source code
    - https://github.com/facebook/react

## Hooks
    - Source code:  https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js
    - Need of hooks
        - In counter example (App.jsx), eventhough counter variabel value is incremented/decremented,  value on UI is not reflected.
        - Reason is: In React, UI updates are controlled by Hooks. And, that the need.
    - Refer source code to understand different types of hooks.
    - RECAP: Babel

## Virtual DOM, React Fiber and Reconciliation [IMP]
    - https://www.youtube.com/watch?v=MPCVGFvgVEQ&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=6 
    - https://github.com/acdlite/react-fiber-architecture

### Feature of React Fibre
    - Incremental Update: Helpful in animation areas
    - Pause, Abort or Reuse work as new updates come in.
