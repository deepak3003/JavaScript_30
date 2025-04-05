🧱 HTML Breakdown

<form class="search-form">
  <input type="text" class="search" placeholder="City or State">
  <ul class="suggestions">
    <li>Filter for a city</li>
    <li>or a state</li>
  </ul>
</form>
Key Elements:
<input class="search">: Text field where the user types their query.

<ul class="suggestions">: Displays search results in a dropdown-like list.

Wrapped in a <form> with class search-form.

🎨 CSS Breakdown
🔹 Global Styles
html {
  box-sizing: border-box;
  background: #ffc600;
  font-family: 'helvetica neue';
  font-size: 20px;
  font-weight: 200;
}
*, *:before, *:after {
  box-sizing: inherit;
}
Applies box-sizing globally.

Sets a yellow background and light typography.

🔹 Form and Input Styling
.search-form {
  max-width: 400px;
  margin: 50px auto;
}

input.search {
  width: 120%;
  position: relative;
  left: -10%;
  padding: 20px;
  font-size: 40px;
  border: 10px solid #F7F7F7;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}
Centers and enlarges the form.

Creates a clean, elevated search box with soft shadows.

🔹 Suggestion List Styling
.suggestions {
  margin: 0;
  padding: 0;
  position: relative;
}
Prepares the <ul> to hold dynamic results.

.suggestions li {
  background: white;
  list-style: none;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
}
Each list item is styled like a card.

Displays city/state name on one side and population on the other.

🔹 Alternate List Item Effects
.suggestions li:nth-child(even) {
  transform: perspective(100px) rotateX(3deg);
  background: linear-gradient(to bottom, #ffffff, #EFEFEF);
}

.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg);
  background: linear-gradient(to top, #ffffff, #EFEFEF);
}
Adds a subtle 3D and gradient effect for a modern look.

🔹 Highlighting Matches
.hl {
  background: #ffc600;
}
Highlights matched characters (e.g., if the user types “new”, it highlights “New” in “New York”).

⚙️ JavaScript Breakdown
1. Data Fetching
const endpoint = 'https://gist.githubusercontent.com/.../cities.json';
const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
Fetches a list of U.S. cities from a public JSON URL.

Populates the cities array with the fetched data using the spread operator.

2. Matching Function
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}
Filters cities/states based on the user’s input using a regular expression.

3. Formatting Numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
Adds commas to large numbers (e.g., 1000000 → 1,000,000).

4. Displaying Suggestions
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}
Replaces matched parts with highlighted <span class="hl">.

Injects the final HTML into the .suggestions list.

5. Event Listeners

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
Triggers the displayMatches() function on:

change (when input value changes)

keyup (as the user types)

