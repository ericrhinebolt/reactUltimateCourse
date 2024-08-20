Piece of data = Piece of state
JavaScript front-end frameworks exist because keeping a user interface in sync with data is really hard and a lot of work.
JSX is html sent from JS.

React is an extremely popular, declarative, component-based, state-driven JavaScript library for building user interfaces, created by Facebook.
-Components are the building blocks of user interfaces in React.
-We build complex UIs by building multiple components and combining them.
-Declarative syntax called JSX. Tells React what a component should look like based on current data/state.
-React is abstraction away from DOM: we never touch the DOM.
-JSX: a syntax that combines HTML, CSS, JavaScript as well as referencing other components.
-State(data) - React reacts to state changes by re-rendering the UI.
-React is a library, not a framework.
-Next.js and Remix are frameworks built on top of React
-Created in 2011 and open-sourced in 2013

    -React is really good at 2 things:
        -Rendering components on a webpage (UI) based on their current state.
        -Keeping the UI in sync with stat, by re-rendering (reacting) when state changes.

Component is a function that starts with uppercase (App())

State is necessary when we want to update anything on the screen

create-react-app - Complete starter kit for React applications - Everything is already configured: ES Lint, Prettier, Jest Babel etc. - Uses slow and outdated technologies - Good for tutorials or experiments - DO NOT USE for real-world apps

Vite - Modern build tool that contains a template for setting up React applications - Need to manually set up ESLint and others - Extremely fast hot module replacements (HMR) and bundling

React team now advises using a React framework like Next.js or Remix

npx create-react-app@5 pizza-menu - @5 is to create project with version 5 - cd to project folder - npm run start (npm start)

-All React does is take components and drawn them onto UI
-React renders a view for each component and all views together makes up UI
-Component is a piece of UI
-Each component has data, JS logic and appearance.
-Build complex UIs by building muliple components and combining them
-Components can be reused, nested inside each other, and pass data between them.
-Create a component tree to map relations between components

Functions must start with capital letter and have a return (can be null, usually JSX)
