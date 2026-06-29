let references = [];
let frames = [];
let frameCount = 0;
let currentStep = 0;
let faults = 0;
let hits = 0;
let algorithm = "";

function startSimulation() {
//INPUT VALIDATION FOR FRAME
    const frameInput = document.getElementById("frameInput").value.trim();
    if (frameInput === "") {
        alert("Please enter the number of memory frames.");
        return;    }

    // Must be an integer
    if (!/^\d+$/.test(frameInput)) {
        alert("Memory frames must be a positive whole number.");
        return;    }

    const f = parseInt(frameInput);

    // Cannot be 0
    if (f <= 0) {
        alert("Memory frames must be at least 1.");
        return;    }

//INPUT VALIDATION FOR REFERENCE STRING 
const referenceInput = document.getElementById("referenceInput").value.trim();

// Only numbers separated by spaces
if (!/^(\d+\s*)+$/.test(referenceInput)) {
    alert("Reference string must contain numbers separated by spaces only.");
    return;}

  references = document.getElementById("referenceInput").value.trim().split(/\s+/).map(Number);
  frameCount = f;
  algorithm = document.getElementById("algorithm").value;

  frames = [];
  currentStep = 0;
  faults = 0;
  hits = 0;

  displayReferenceRow();
  displayFrames(null, null);
  createTableHeader();

  document.querySelector("#resultTable tbody").innerHTML = "";
  document.getElementById("faultCount").innerText = faults;
  document.getElementById("hitCount").innerText = hits;
  document.getElementById("statusText").innerText = "Simulation started.";
  document.getElementById("explanationText").innerText =
    "Click Next Step to process each page request one by one.";
}

function nextStep() {
  if (currentStep >= references.length) {
    document.getElementById("statusText").innerText = "Simulation completed.";
    document.getElementById("explanationText").innerText =
      "All page requests have been processed.";
    return;
  }

  let page = references[currentStep];
  let status = "";
  let explanation = "";
  let replacedIndex = null;

  if (frames.includes(page)) {
    hits++;
    status = "Hit";
    explanation = `Page ${page} is already in RAM, so no replacement is needed.`;
  } else {
    faults++;
    status = "Fault";

    if (frames.length < frameCount) {
      frames.push(page);
      explanation = `Page ${page} is not in RAM. There is an empty frame, so it is loaded directly.`;
    } else {
      if (algorithm === "LRU") {
        replacedIndex = findLRU();
        let removedPage = frames[replacedIndex];
        frames[replacedIndex] = page;

        explanation =
          `Page ${page} causes a page fault. Using LRU, page ${removedPage} is removed because it was used least recently.`;
      } else {
        replacedIndex = findOPT();
        let removedPage = frames[replacedIndex];
        frames[replacedIndex] = page;

        explanation =
          `Page ${page} causes a page fault. Using OPT, page ${removedPage} is removed because it will be used farthest in the future.`;
      }
    }
  }

  displayReferenceRow();
  displayFrames(page, status, replacedIndex);
  addTableRow(page, status);
  updateSummary();

  document.getElementById("statusText").innerText =
    `Step ${currentStep + 1}: Page ${page} → ${status}`;

  document.getElementById("explanationText").innerText = explanation;

  currentStep++;
}

function findLRU() {
  let oldestIndex = 0;
  let oldestUse = Infinity;

  for (let i = 0; i < frames.length; i++) {
    let lastUsed = references.slice(0, currentStep).lastIndexOf(frames[i]);

    if (lastUsed < oldestUse) {
      oldestUse = lastUsed;
      oldestIndex = i;
    }
  }

  return oldestIndex;
}

function findOPT() {
  let farthestUse = -1;
  let replaceIndex = 0;

  for (let i = 0; i < frames.length; i++) {
    let nextUse = references.slice(currentStep + 1).indexOf(frames[i]);

    if (nextUse === -1) {
      return i;
    }

    if (nextUse > farthestUse) {
      farthestUse = nextUse;
      replaceIndex = i;
    }
  }

  return replaceIndex;
}

function displayReferenceRow() {
  let html = "";

  references.forEach((ref, index) => {
    html += `<div class="ref-item ${index === currentStep ? "active" : ""}">${ref}</div>`;
  });

  document.getElementById("referenceRow").innerHTML = html;
}

function displayFrames(currentPage, status, replacedIndex) {
  let html = "";

  for (let i = 0; i < frameCount; i++) {
    let value = frames[i] !== undefined ? frames[i] : "-";
    let className = "frame";

    if (status === "Hit" && value === currentPage) {
      className += " hit";
    }

    if (status === "Fault" && value === currentPage) {
      className += " fault";
    }

    if (replacedIndex === i) {
      className += " replaced";
    }

    html += `<div class="${className}">${value}</div>`;
  }

  document.getElementById("memoryFrames").innerHTML = html;
}

function createTableHeader() {
  let header = `
    <tr>
      <th>Step</th>
      <th>Page Request</th>
  `;

  for (let i = 1; i <= frameCount; i++) {
    header += `<th>Frame ${i}</th>`;
  }

  header += `<th>Status</th></tr>`;

  document.querySelector("#resultTable thead").innerHTML = header;
}

function addTableRow(page, status) {
  let row = `
    <tr>
      <td>${currentStep + 1}</td>
      <td>${page}</td>
  `;

  for (let i = 0; i < frameCount; i++) {
    row += `<td>${frames[i] !== undefined ? frames[i] : "-"}</td>`;
  }

  row += `<td>${status}</td></tr>`;

  document.querySelector("#resultTable tbody").innerHTML += row;
}

function updateSummary() {
  document.getElementById("faultCount").innerText = faults;
  document.getElementById("hitCount").innerText = hits;
}
