
// =====================================
// YULI'S BAKERY SHOP
// PORTFOLIO FILE UPLOAD
// =====================================

function uploadFiles(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (!input || !list) return;

    if (input.files.length === 0) {
        alert("Please select a file first!");
        return;
    }

    Array.from(input.files).forEach(function(file) {
        const item = document.createElement("div");
        item.className = "file-item";

        const link = document.createElement("a");
        const fileURL = URL.createObjectURL(file);

        link.href = fileURL;
        link.textContent = "🧁 " + file.name;
        link.target = "_blank";
        link.rel = "noopener";

        item.appendChild(link);
        list.appendChild(item);
    });

    alert("Your portfolio files have been added successfully!");
    input.value = "";
}


// ACTIVITY UPLOAD BUTTON
const activityButton = document.getElementById("activityButton");

if (activityButton) {
    activityButton.addEventListener("click", function() {
        uploadFiles("activityFile", "activityList");
    });
}


// EXERCISE UPLOAD BUTTON
const exerciseButton = document.getElementById("exerciseButton");

if (exerciseButton) {
    exerciseButton.addEventListener("click", function() {
        uploadFiles("exerciseFile", "exerciseList");
    });
}


// =====================================
// FEEDBACK FORM
// =====================================

document.addEventListener("DOMContentLoaded", function() {

    const feedbackForm = document.getElementById("feedbackForm");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("visitorName").value;

            alert(
                "Thank you, " + name +
                "! Yuli's Bakery appreciates your feedback. 🍰"
            );

            feedbackForm.reset();
        });
    }

    displayActivities();
    displayExercises();
});


// =====================================
// MY ACTIVITIES
// =====================================

const activities = [
    { title: "Activity 1", link: "activities/ACT1_INOT_IANNY.html" },
    { title: "Activity 2", link: "activities/ACT2_INOT_IANNY.html" },
    { title: "Activity 3", link: "activities/ACT3_INOT_IANNY.html" },
    { title: "Activity 4", link: "activities/ACT4_INOT_IANNY.html" },
    { title: "Activity 5", link: "activities/ACT5_INOT_IANNY.html" }
];

let activityPage = 0;

function displayActivities() {
    const container = document.getElementById("activities-container");
    const page = document.getElementById("activities-page");

    if (!container) return;

    const item = activities[activityPage];

    container.innerHTML = `
        <div class="project-card">
            <h4>🧁 ${item.title}</h4>

            <a href="${item.link}" target="_blank" rel="noopener">
                Open Project
            </a>

            <button onclick="openPreview('${item.link}')">
                Preview
            </button>

            <details>
                <summary>View Code</summary>
                <a href="${item.link}" target="_blank" rel="noopener">
                    View HTML File
                </a>
            </details>
        </div>
    `;

    if (page) {
        page.textContent = (activityPage + 1) + " of " + activities.length;
    }
}


// ACTIVITY PAGE BUTTONS
function changePage(type, direction) {
    if (type === "activities") {
        activityPage += direction;

        if (activityPage < 0) {
            activityPage = 0;
        }

        if (activityPage >= activities.length) {
            activityPage = activities.length - 1;
        }

        displayActivities();
    }
}


// =====================================
// MY EXERCISES
// =====================================

const exercises = [
    { title: "Exercise 1", link: "exercises/EXE1_INOT_IANNY.html" },
    { title: "Exercise 2", link: "exercises/EXE2_INOT_IANNY.html" },
    { title: "Exercise 3", link: "exercises/EXE3_INOT_IANNY.html" },
    { title: "Exercise 4", link: "exercises/EXE4_INOT_IANNY.html" },
    { title: "Exercise 5", link: "exercises/EXE5_INOT_IANNY.html" },
    { title: "Exercise 6", link: "exercises/EXE6_INOT_IANNY.html" },
    { title: "Exercise 7", link: "exercises/EXE7_INOT_IANNY.html" },
    { title: "Exercise 8", link: "exercises/EXE8_INOT_IANNY.html" },
    { title: "Exercise 9", link: "exercises/EXE9_INOT_IANNY.html" },
    { title: "Exercise 10", link: "exercises/EXE10_INOT_IANNY.html" },
    { title: "Exercise 11", link: "exercises/EXE11_INOT_IANNY.html" },
    { title: "Exercise 12", link: "exercises/EXE12_INOT_IANNY.html" }
];

function displayExercises() {
    const container = document.getElementById("exercises-container");

    if (!container) return;

    container.innerHTML = exercises.map(function(item) {
        return `
            <div class="project-card">
                <h4>🍰 ${item.title}</h4>

                <div class="card-actions">
                    <a href="${item.link}"
                       target="_blank"
                       rel="noopener"
                       class="btn-open">
                       Open Project
                    </a>

                    <button class="btn-preview"
                        onclick="openPreview('${item.link}')">
                        Preview
                    </button>
                </div>
            </div>
        `;
    }).join("");
}


// =====================================
// PROJECT PREVIEW
// =====================================

function openPreview(link) {
    const previewFrame = document.getElementById("previewFrame");
    const previewModal = document.getElementById("previewModal");

    if (previewFrame && previewModal) {
        previewFrame.src = link;
        previewModal.style.display = "flex";
    }
}

function closePreview() {
    const previewFrame = document.getElementById("previewFrame");
    const previewModal = document.getElementById("previewModal");

    if (previewFrame && previewModal) {
        previewModal.style.display = "none";
        previewFrame.src = "";
    }
}
