const React = require("react");
const Default = require("./layouts/default");

function Index({ breads }) {
  // Destructure breads from the props
  return (
    // Make sure to return the JSX from the function
    <Default>
      <h2>Index Page</h2>
      {/* This is a JSX comment. */}
      <ul>
        {breads.map(
          (
            bread,
            index // Remove the extra curly braces
          ) => (
            <li key={index}>
              <a href={`/breads/${index}`}>{bread.name}</a>
            </li>
          )
        )}
      </ul>
    </Default>
  );
}

module.exports = Index;
