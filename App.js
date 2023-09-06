const root= ReactDOM.createRoot(document.getElementById('root'));
const heading= React.createElement(
    "h1", //type (tag or element)
    {id:"heading"}, // props (attributes or child)
    "hello from react!!" // value
);
console.log(heading); // object- react element
// root.render(heading); //render is responsible to create react element -heading to HTML tag and render inside root

// To create nested HTML using react
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h1 tag</h2>
//     </div>
// </div>

const parent= React.createElement("div", 
    {id: "parent"}, 
    React.createElement("div", 
        {id: "child"},
        [React.createElement("h1", {}, "I am h1 tag"), //array to create multiple child of a parent
        React.createElement("h2", {}, "I am h2 tag")]
    )
);
root.render(parent);