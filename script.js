const automationData = {
  performance: {
    title: "Performance Marketing",
    steps: ["Read spend, lead and target signals", "Tune allocation and funnel quality", "Prepare scaling decisions"],
    details: ["Meta · Google · course · month", "CPL · landing pages · lead stages", "Targets · CAC · ROAS · next action"],
    output: "A paid-media action plan grounded in campaign performance.",
  },
  landingpages: {
    title: "CRO-Optimized Landing Pages",
    steps: ["Read speed and experience signals", "Reduce conversion friction", "Scale high-intent traffic"],
    details: ["LCP · INP · CLS · mobile", "Hero · form · CTA · trust", "Core Web Vitals · leads · iterate"],
    output: "Fast, focused landing pages ready for performance campaigns.",
  },
  seo: {
    title: "SEO & Organic Growth",
    steps: ["Build search demand", "Capture high-intent journeys", "Connect traffic to revenue"],
    details: ["Blogs · ranking pages · faculty bios", "Tiles · popups · PDF OTP · CTAs", "LeadSquared · conversions · revenue"],
    output: "An SEO system that carries organic traffic to measurable revenue.",
  },
  aiAutomation: {
    title: "AI-Powered Marketing Automation",
    steps: ["Collect AI-search signals", "Standardise campaign links", "Speed up reporting decisions"],
    details: ["Platforms · users · sessions · engagement", "UTM · TinyURL · LeadSquared", "MoM view · cleaner attribution · less manual work"],
    output: "A faster marketing operating layer for reporting and campaign execution.",
  },
};

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const consolePanel = document.querySelector("#automation-console");
const taskCards = document.querySelectorAll(".task-card");
const performanceModal = document.querySelector("#performance-modal");
const modalClose = performanceModal?.querySelector("[data-modal-close]");
const landingPagesModal = document.querySelector("#landing-pages-modal");
const landingModalClose = landingPagesModal?.querySelector("[data-landing-modal-close]");
const seoModal = document.querySelector("#seo-modal");
const seoModalClose = seoModal?.querySelector("[data-seo-modal-close]");
const aiAutomationModal = document.querySelector("#ai-automation-modal");
const aiAutomationModalClose = aiAutomationModal?.querySelector("[data-ai-automation-modal-close]");
const contactModal = document.querySelector("#contact-modal");
const contactModalClose = contactModal?.querySelector("[data-contact-modal-close]");
const openContactModalButton = document.querySelector("[data-open-contact-modal]");
const workWithMeModal = document.querySelector("#work-with-me-modal");
const workWithMeClose = workWithMeModal?.querySelector("[data-work-with-me-close]");
const workWithMeForm = document.querySelector("#work-with-me-form");
const workWithMeBack = workWithMeModal?.querySelector("[data-work-with-me-back]");
const workFormStatus = document.querySelector("#work-form-status");
const workFormSubmit = document.querySelector("#work-form-submit");
const phoneInput = workWithMeForm?.querySelector('input[name="phone"]');
const GOOGLE_SHEETS_WEB_APP_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
const consoleHeading = document.querySelector("#console-heading");
const consoleOutput = document.querySelector("#console-output");
const runButton = document.querySelector("#run-workflow");
const flowSteps = [
  document.querySelector("#flow-step-one"),
  document.querySelector("#flow-step-two"),
  document.querySelector("#flow-step-three"),
];
const flowDetails = [
  document.querySelector("#flow-detail-one"),
  document.querySelector("#flow-detail-two"),
  document.querySelector("#flow-detail-three"),
];

let selectedTask = "performance";

function selectTask(taskName) {
  const task = automationData[taskName];
  if (!task) return;
  selectedTask = taskName;
  taskCards.forEach((card) => card.classList.toggle("is-active", card.dataset.task === taskName));
  consoleHeading.textContent = task.title;
  consoleOutput.textContent = task.output;
  task.steps.forEach((step, index) => {
    flowSteps[index].textContent = step;
    flowDetails[index].textContent = task.details[index];
  });
  consolePanel.classList.remove("is-running");
  runButton.innerHTML = 'Run workflow <span aria-hidden="true">→</span>';
}

function showModal(modal, focusTarget) {
  if (!modal) return;
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
  document.body.classList.add("modal-open");
  focusTarget?.focus();
}

function hideModal(modal) {
  if (!modal) return;
  if (typeof modal.close === "function" && modal.open) {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
  document.body.classList.remove("modal-open");
}

function openPerformanceModal() {
  showModal(performanceModal, modalClose);
}

function openLandingPagesModal() {
  showModal(landingPagesModal, landingModalClose);
}

function openSeoModal() {
  showModal(seoModal, seoModalClose);
}

function openAiAutomationModal() {
  showModal(aiAutomationModal, aiAutomationModalClose);
}

function openContactModal() {
  showModal(contactModal, contactModalClose);
}

function openWorkWithMeModal() {
  hideModal(contactModal);
  showModal(workWithMeModal, workWithMeClose);
}

function closePerformanceModal() {
  hideModal(performanceModal);
}

function closeLandingPagesModal() {
  hideModal(landingPagesModal);
}

function closeSeoModal() {
  hideModal(seoModal);
}

function closeAiAutomationModal() {
  hideModal(aiAutomationModal);
}

function closeContactModal() {
  hideModal(contactModal);
}

function closeWorkWithMeModal() {
  hideModal(workWithMeModal);
}

taskCards.forEach((card) => {
  card.addEventListener("click", () => {
    selectTask(card.dataset.task);
    if (card.hasAttribute("data-open-performance")) openPerformanceModal();
    if (card.hasAttribute("data-open-landing-pages")) openLandingPagesModal();
    if (card.hasAttribute("data-open-seo")) openSeoModal();
    if (card.hasAttribute("data-open-ai-automation")) openAiAutomationModal();
  });
});

modalClose?.addEventListener("click", closePerformanceModal);
performanceModal?.addEventListener("click", (event) => {
  if (event.target === performanceModal) closePerformanceModal();
});
performanceModal?.addEventListener("close", () => document.body.classList.remove("modal-open"));
landingModalClose?.addEventListener("click", closeLandingPagesModal);
landingPagesModal?.addEventListener("click", (event) => {
  if (event.target === landingPagesModal) closeLandingPagesModal();
});
landingPagesModal?.addEventListener("close", () => document.body.classList.remove("modal-open"));
seoModalClose?.addEventListener("click", closeSeoModal);
seoModal?.addEventListener("click", (event) => {
  if (event.target === seoModal) closeSeoModal();
});
seoModal?.addEventListener("close", () => document.body.classList.remove("modal-open"));
aiAutomationModalClose?.addEventListener("click", closeAiAutomationModal);
aiAutomationModal?.addEventListener("click", (event) => {
  if (event.target === aiAutomationModal) closeAiAutomationModal();
});
aiAutomationModal?.addEventListener("close", () => document.body.classList.remove("modal-open"));

openContactModalButton?.addEventListener("click", openContactModal);
contactModalClose?.addEventListener("click", closeContactModal);
contactModal?.addEventListener("click", (event) => {
  if (event.target === contactModal) closeContactModal();
});
contactModal?.addEventListener("close", () => document.body.classList.remove("modal-open"));
contactModal?.querySelector("[data-open-work-with-me]")?.addEventListener("click", openWorkWithMeModal);

workWithMeClose?.addEventListener("click", closeWorkWithMeModal);
workWithMeBack?.addEventListener("click", () => {
  closeWorkWithMeModal();
  openContactModal();
});
workWithMeModal?.addEventListener("click", (event) => {
  if (event.target === workWithMeModal) closeWorkWithMeModal();
});
workWithMeModal?.addEventListener("close", () => document.body.classList.remove("modal-open"));

phoneInput?.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
});

workWithMeForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  workFormStatus.textContent = "";

  if (GOOGLE_SHEETS_WEB_APP_URL.startsWith("PASTE_")) {
    workFormStatus.textContent = "Please add your Google Apps Script Web App URL in script.js before submitting.";
    workFormStatus.className = "form-status is-error";
    return;
  }

  const formData = new FormData(workWithMeForm);
  const payload = Object.fromEntries(formData.entries());
  workFormSubmit.disabled = true;
  workFormSubmit.innerHTML = 'Sending request... <span aria-hidden="true">…</span>';
  workFormStatus.className = "form-status";
  workFormStatus.textContent = "Sending your request...";

  try {
    await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    workWithMeForm.reset();
    workFormStatus.className = "form-status is-success";
    workFormStatus.textContent = "Thank you — your work request has been sent.";
  } catch (error) {
    workFormStatus.className = "form-status is-error";
    workFormStatus.textContent = "Something went wrong. Please email me directly instead.";
  } finally {
    workFormSubmit.disabled = false;
    workFormSubmit.innerHTML = 'Send Work Request <span aria-hidden="true">↗</span>';
  }
});

runButton?.addEventListener("click", () => {
  const task = automationData[selectedTask];
  consolePanel.classList.add("is-running");
  runButton.textContent = "Workflow running...";
  consoleOutput.textContent = "Processing signals and preparing the output...";
  window.setTimeout(() => {
    consolePanel.classList.remove("is-running");
    runButton.innerHTML = 'Run again <span aria-hidden="true">↗</span>';
    consoleOutput.textContent = task.output;
  }, 850);
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelector("#year").textContent = new Date().getFullYear();
selectTask("performance");
