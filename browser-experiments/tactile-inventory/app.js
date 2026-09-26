/* 
  📡 TACTILE INVENTORY MATRIX • CORE INTERACTION RUNTIME
  Vanilla Drag & Drop Architecture • Canvas Glitch Shader Interface
*/

document.addEventListener("DOMContentLoaded", () => {
  initializeDragAndDrop();
  initializeWeaponGlitchShader();
});

/* ==========================================================================
   🔬 DOM DRAG & DROP MECHANICS
   ========================================================================== */
function initializeDragAndDrop() {
  const activeItems = document.querySelectorAll(".item-active");
  const emptyCells = document.querySelectorAll(".cell-empty");

  activeItems.forEach((item) => {
    // Enforce physical draggable capability onto active item cards
    item.setAttribute("draggable", "true");

    item.addEventListener("dragstart", (e) => {
      item.classList.add("dragging");
      e.dataTransfer.setData("text/plain", item.innerHTML);
      // Store unique slot parameters for structural layout data scaling
      e.dataTransfer.setData(
        "metric-slots",
        item.getAttribute("data-slots") || "1",
      );
      e.dataTransfer.setData("metric-classes", item.className);
    });

    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    });
  });

  emptyCells.forEach((cell) => {
    cell.addEventListener("dragover", (e) => {
      e.preventDefault(); // Required to unlock target drop execution zones
      cell.style.backgroundColor = "var(--void-elevated)";
    });

    cell.addEventListener("dragleave", () => {
      cell.style.backgroundColor = "var(--void-absolute)";
    });

    cell.addEventListener("drop", (e) => {
      e.preventDefault();
      cell.style.backgroundColor = "var(--void-absolute)";

      const draggingItem = document.querySelector(".dragging");
      if (draggingItem && draggingItem !== cell) {
        // Swap layout structural blocks smoothly inside the DOM matrix
        const targetedHTML = cell.innerHTML;
        const targetedClasses = cell.className;
        const targetedSlots = cell.getAttribute("data-slots");

        // Morph cell node into the incoming active item blueprint
        cell.className = e.dataTransfer.getData("metric-classes");
        cell.innerHTML = e.dataTransfer.getData("text/plain");
        cell.setAttribute("data-slots", e.dataTransfer.getData("metric-slots"));
        cell.setAttribute("draggable", "true");

        // Re-route old cell state configurations back to the origin node
        draggingItem.className = targetedClasses;
        draggingItem.innerHTML = targetedHTML;
        if (targetedSlots) {
          draggingItem.setAttribute("data-slots", targetedSlots);
        } else {
          draggingItem.removeAttribute("data-slots");
        }
        draggingItem.setAttribute(
          "draggable",
          targetedClasses.includes("item-active") ? "true" : "false",
        );

        // Re-initialize loops to bind listener states to newly transposed DOM elements
        initializeDragAndDrop();
        initializeWeaponGlitchShader();
      }
    });
  });
}

/* ==========================================================================
   📺 DYNAMIC CANVAS GLITCH SHADER FRAMEWORK
   ========================================================================== */
let glitchInterval = null;

function initializeWeaponGlitchShader() {
  // Clear any dangling interval loops from previous DOM drag switches
  if (glitchInterval) clearInterval(glitchInterval);

  const weaponPanel = document.querySelector(".asset-weapon");
  if (!weaponPanel) return;

  // Clear previous canvas instances to avoid memory leaks
  weaponPanel.innerHTML = "";

  // Dynamically insert an inline isolated simulation matrix canvas
  const canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  weaponPanel.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resizeShader() {
    canvas.width = weaponPanel.offsetWidth;
    canvas.height = weaponPanel.offsetHeight;
  }
  resizeShader();

  // Primary procedural rendering mechanism
  function renderGlitchFrame() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Baseline structural vector: Draw an industrial weapon wireframe geometry
    ctx.strokeStyle = "var(--arterial-red)";
    ctx.lineWidth = 2;
    ctx.shadowBlur = 6;
    ctx.shadowColor = "var(--arterial-red)";

    ctx.beginPath();
    // Construct horizontal mechanical blueprint schematic line profile
    ctx.moveTo(w * 0.15, h * 0.45);
    ctx.lineTo(w * 0.75, h * 0.45);
    ctx.lineTo(w * 0.85, h * 0.65);
    ctx.lineTo(w * 0.55, h * 0.65);
    ctx.lineTo(w * 0.5, h * 0.8);
    ctx.lineTo(w * 0.42, h * 0.8);
    ctx.lineTo(w * 0.45, h * 0.65);
    ctx.closePath();
    ctx.stroke();

    // Reset shadow states to avoid bloating rendering computations
    ctx.shadowBlur = 0;

    // Apply a high-speed calculated displacement artifact mutation (Trigger chance: 15%)
    if (Math.random() < 0.15) {
      const linesToMutate = Math.floor(Math.random() * 4) + 1;
      for (let i = 0; i < linesToMutate; i++) {
        const sourceY = Math.floor(Math.random() * h);
        const sliceHeight = Math.floor(Math.random() * 15) + 5;
        const horizontalDisplacement = (Math.random() - 0.5) * 25;

        // Grab a precise slice horizontal pixel block chunk array
        ctx.drawImage(
          canvas,
          0,
          sourceY,
          w,
          sliceHeight,
          horizontalDisplacement,
          sourceY,
          w,
          sliceHeight,
        );

        // Overlay a brutalist solid white static plate over the shifted layer slice
        ctx.fillStyle =
          Math.random() > 0.5
            ? "var(--monochrome-bright)"
            : "var(--void-absolute)";
        ctx.fillRect(
          Math.random() * w,
          sourceY,
          Math.random() * w * 0.3,
          sliceHeight,
        );
      }
    }
  }

  // Lock rendering computation timing sequence loop to a dirty 12fps hardware tick
  glitchInterval = setInterval(renderGlitchFrame, 83);
}
