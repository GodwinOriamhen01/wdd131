// ----------------------
// HIKES DATA
// ----------------------
const hikes = [
  {
    name: "Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls"
  },
  {
    name: "Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon."
  },
  {
    name: "Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls"
  },
  {
    name: "Coffee Pot Rapids",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids."
  },
  {
    name: "Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world."
  }
];

// ----------------------
// DOM ELEMENTS
// ----------------------
const hikeContainer = document.querySelector("#hike-container");
const input = document.querySelector("#search");
const button = document.querySelector("#search-btn");

// ----------------------
// SEARCH FUNCTION
// ----------------------
function search() {
  const query = input.value.toLowerCase();

  const filtered = hikes.filter(hike => {
    return (
      hike.name.toLowerCase().includes(query) ||
      hike.description.toLowerCase().includes(query) ||
      hike.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  // Sort by distance (convert "3 miles" → 3)
  const sorted = filtered.sort((a, b) => {
    const distA = parseFloat(a.distance);
    const distB = parseFloat(b.distance);
    return distA - distB;
  });

  hikeContainer.innerHTML = "";
  sorted.forEach(hike => renderHike(hike));
}

// ----------------------
// TEMPLATES
// ----------------------
function tagTemplate(tags) {
  return tags.map(tag => `<button>${tag}</button>`).join(" ");
}

function difficultyTemplate(level) {
  let html = `Difficulty: `;
  for (let i = 1; i <= 5; i++) {
    html += i <= level ? "🥾" : "▫️";
  }
  return html;
}

function hikeTemplate(hike) {
  return `
    <div class="hike-card">
      <h2>${hike.name}</h2>
      <div class="hike-tags">${tagTemplate(hike.tags)}</div>
      <p>${hike.description}</p>
      <p>${difficultyTemplate(hike.difficulty)}</p>
    </div>
  `;
}

// ----------------------
// RENDER FUNCTION
// ----------------------
function renderHike(hike) {
  hikeContainer.innerHTML += hikeTemplate(hike);
}

// ----------------------
// RANDOM HIKE ON LOAD
// ----------------------
function init() {
  const randomIndex = Math.floor(Math.random() * hikes.length);
  renderHike(hikes[randomIndex]);
}

init();

// ----------------------
// EVENT LISTENERS
// ----------------------
button.addEventListener("click", search);

input.addEventListener("keypress", e => {
  if (e.key === "Enter") search();
});
