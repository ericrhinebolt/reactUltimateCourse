Piece of data = Piece of state
JavaScript front-end frameworks exist because keeping a user interface in sync with data is really hard and a lot of work.

React is an extremely popular, declarative, component-based, state-driven JavaScript library for building user interfaces, created by Facebook.
-Components are the building blocks of user interfaces in React.
-We build complex UIs by building multiple components and combining them.
-Declarative syntax called JSX. Tells React what a cogit mponent should look like based on current data/state.
-React is abstraction away from DOM: we never touch the DOM.
-JSX: a syntax that combines HTML, CSS, JavaScript as well as referencing other components.
-State(data) - React reacts to state changes by re-rendering the UI.
-React is a library, not a framework.
-Next.js and Remix are frameworks built on top of React
-Created in 2011 and open-sourced in 2013

    -React is really good at 2 things:
        -Rendering components on a webpage (UI) based on their current state.
        -Keeping the UI in sync with stat, by re-rendering (reacting) when state changes.

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

Component is a function that starts with uppercase (App())
Functions(Components) must start with capital letter and have a return (can be null, usually JSX)
Components contain its own Data, Logic and Appearance

JSK is:
HTML sent from JS.
A delecarative syntax to describe what components looks like and how they work (Appearance)
An Extension of JS that allows us to embed JavaScript, CSS and React components into HTML

Each JSX element is converted to a React.createElement funtion call with BABEL
Can use React without JSX if you wanted

JSX works essentially like HTML, but we can enter JavaScript mod using {}
We can place JS expressions inside {}. For example, using variables, create arrays or objects, [].map(), ternary operator. Statements are not allowed (if/else, for, switch)
JSX produces a JS expression.
We can place other pieces of JSX inside {}
Can write JSX anywhere inside a component (in if/else, assign to variables, pass to functions)
A piece of JSX can only have one root element. If you need more, use <React.fragment> (or the short <>)

Imperative vs Declarative
Imperative (JS) ("How to do things")- Manual DOM element selections and DOM traversing. Step-by-step DOM mutations until we reach the desired UI
Declarative (React) ("What we want") Describe what UI should look like using JSX, based on current data. React is an abstration away from DOM; we never touch the DOM. Instead, we think of the UI as a reflection of the current data.

Strict mode will cause components to render twice, can see that when using "alert" JS function.

Props:
Props are used to pass data from parent components to child components (down the component tree)
Essential tool to configure and customize components (like function parameters)
With props, parent components control how child components look and work
Anything can be passed as props: single values, arrays, objects, functions, even other components

Props are read-only. They are immutable. This is one of React's strict rules
Props is data coming from the outsize, and can only be updated by the parent component
State is internal data that can be updated by the component's logic

A component should not mutatate any data that we write outsize it's function scope.
React uses one-way data flow. Easier to understand and debug. More performant.

If you want to use conditional rendering with multiple returns:
Use a ternary if you want to make the condition within the JSX
If you want 2 separate returns, you can use if statement outside of JSX, such as returning separate components

Detructuring props requires curly braces

Props is data from outside a component
State is data that a component can hold over time, necessary for information that it needs to remember thoughout the app's lifecycle
"Component's memory"
"State variable" / "piece of state": a Single variable in a component (component state)
Updating component state triggers React to re-render the component

All the single "components views" combined create the UI

State allows developers to:

1. update the component's view (by re-rendering it)
2. Persist local variables between renders

State is a powerful tool in React development.

Hooks (useState, use... etc.) can only be used on main level of components, not nested in functions or conditionally.

Should always use setter method to set state, not manually.

A component is re-rendered when it's state is updated.

A view is updated by re-rendering the component. React calls the component function again. State is preserved throughout re-renders unless component is unmounted (removed completely from UI)

https://react.dev/learn/react-developer-tools

When updating state based on the current value of the state, good practice is to use a callback funtion: (s) => s + 1

Each component has and manages it's own state, no matter how many times we render the same component.

Practical guidlines about state:
-Use a state variable for any data that the component should keep track of ("remember") over time. This is data that will change at some point. In Vanilla Js, that's a let variable, or and [] or {}
-Whenever you want something in the component to be dynamic, create a piece of state related to that "thing", and update the state when the "thing" should change (aka "be dynamic")
-Example: A modal window can be open or closed. So we create a state variable isOpen that tracks whether the modal is open or not. On isOpen = true we displace the window, on isOpen = false, we hide it. !isOpen to toggle.
-If you want to change the way a component looks, or the data is displays, update it's state. This usually happens in an event handler function.
-When building a component, imagine its view as a reflection of state changing over time.
-For data that should not trigger component re-renders, don't use state. Use a regular variable instead. This is a common begginer mistake.

State vs. Props

State:
Internal data, owned by component
Component "memory"
Can be updated by the component itself
Updating state causes component to re-render
Used to make components interactive

Props:
External data, owned by parent component
Similar to function parameters
Read-only
Receiving new props causes component to re-render
Usually when the parent's state has been updated

"Thinking in React" as a process

1. Break the desired UI into components and establish the component tree
2. Build a static version in React(without state)
3. Think about state-
   When to use state
   Types of state: local vs. global
   Where to place each piece of state
4. Establish data flow
   One-way data flow
   Child-to-parent communication
   Accessing global state

State Management: Deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app - Giving each piece of state a home

Types of State: Local vs Global
Local State:
State needed only by one or few components
State that is defined in a component and only that component and child components have access to it (by passing via props)
Global State:
State that many different components might need
Shared state that is accessible to every component in the entire application

Lifting up state:
Sharing state with a sibling component
Create state in a the nearest common parent component, create a handler function. Pass the handler function via props to the component that needs to update the state. Pass the state via props to the component that needs to display the state.

State example:
const [items, setItems] = useState([]);

Handler function example:
function handleAddItems(item) {
setItems((items) => [...items, item]);
}

Props example:

<Form onAddItems={handleAddItems} />
<PackingList items={items} />

Component example:
function Form({ onAddItems }) {
onAddItems(newItem);
}

Deriving state:
State that is computed from an existing piece of state or from props
For example, if there is a cart with 3 items, you would not have a numItems state. You would use a const variable with cart.length to get the array length. This would be there sincle source of truth. Works because re-rendering component will automatically re-calculate derived state.
