"use strict";

const gallery = document.querySelector("#gallery");
const studio = document.querySelector("#studio");
const filters = document.querySelectorAll("[data-category]");
const feature = document.querySelector("#feature-image");
const state = new Map();
let category = "idol";

function indices() {
  return poseSets[category].poses.map((_, index) => index);
}

function number(index) {
  return String(index + 1).padStart(2, "0");
}

function photo(index) {
  return `./assets/${category}-${number(index)}.webp`;
}

function showPose(index) {
  const selection = state.get(category);
  selection.current = index;
  selection.remaining = selection.remaining.filter(candidate => candidate !== index);

  const set = poseSets[category];
  const pose = set.poses[index];
  feature.src = photo(index);
  feature.alt = pose.instruction;
  document.querySelector("#print-code").textContent = `${set.code} / ${number(index)}`;
  document.querySelector("#pose-tag").textContent = set.label;
  document.querySelector("#pose-number").textContent = `POSE No. ${number(index)}`;
  document.querySelector("#pose-name").textContent = pose.name;
  document.querySelector("#pose-instruction").textContent = pose.instruction;

  Array.from(gallery.children).forEach((card, position) => {
    card.setAttribute("aria-pressed", String(position === index));
  });
}

function createCard(pose, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "thumbnail";
  const image = new Image();
  image.loading = "lazy";
  image.src = photo(index);
  image.alt = "";
  const caption = document.createElement("span");
  caption.className = "thumb-caption";
  const badge = document.createElement("span");
  badge.className = "thumb-number";
  badge.textContent = number(index);
  caption.append(badge, pose.name);
  card.append(image, caption);
  card.addEventListener("click", () => {
    showPose(index);
    studio.scrollIntoView({ block: "start" });
    document.querySelector("#draw").focus({ preventScroll: true });
  });
  return card;
}

function selectCategory(key) {
  category = key;
  const set = poseSets[key];
  if (!state.has(key)) {
    state.set(key, { current: 0, remaining: indices() });
  }
  studio.dataset.theme = key;
  filters.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.category === key));
  });
  document.querySelector("#library-count").textContent = `${set.label} / ${set.poses.length} 張`;
  gallery.replaceChildren(...set.poses.map(createCard));
  showPose(state.get(key).current);
}

filters.forEach(button => {
  button.addEventListener("click", () => selectCategory(button.dataset.category));
});

document.querySelector("#draw").addEventListener("click", () => {
  const selection = state.get(category);
  // Keep the last pose out of the first draw when starting a fresh round.
  if (!selection.remaining.length) selection.remaining = indices();
  const choices = selection.remaining.filter(index => index !== selection.current);
  const next = choices[Math.floor(Math.random() * choices.length)] ?? selection.current;
  showPose(next);
});

selectCategory(category);
