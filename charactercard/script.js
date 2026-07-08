// Character Object
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.png",

    attacked() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            document.getElementById("status").textContent = "Snortleblat has died!";
        }
        updateUI();
    },

    levelUp() {
        this.level += 1;
        updateUI();
    }
};

// Update UI
function updateUI() {
    document.getElementById("char-level").textContent = character.level;
    document.getElementById("char-health").textContent = character.health;
}

// Button Listeners
document.getElementById("attack-btn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("level-btn").addEventListener("click", () => {
    character.levelUp();
});
