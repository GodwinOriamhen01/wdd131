const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 8,
    health: 0,
    image: "images/snortleblat.png",

    attacked() {
        if (this.health > 0) {
            this.health -= 20;

            if (this.health <= 0) {
                this.health = 0;
                document.getElementById("status").textContent =
                    "Your character has died.";
            }
        }
        updateUI();
    },

    levelUp() {
        this.level += 1;
        updateUI();
    }
};

function updateUI() {
    document.getElementById("char-name").textContent = character.name;
    document.getElementById("char-class").textContent = character.class;
    document.getElementById("char-level").textContent = character.level;
    document.getElementById("char-health").textContent = character.health;
    document.getElementById("char-img").src = character.image;
}

document.getElementById("attack-btn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("level-btn").addEventListener("click", () => {
    character.levelUp();
});

updateUI();
