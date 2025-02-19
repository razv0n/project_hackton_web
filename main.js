function toTimestamp(dateString) {
  return new Date(dateString).getTime();
}

function calculateProgress(startDate, endDate) {
  const now = Date.now();
  const start = toTimestamp(startDate);
  const end = toTimestamp(endDate);
  if (now < start) return 0;
  if (now > end) return 100;
  return Math.round(((now - start) / (end - start)) * 100);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getDaysRemaining(endDate) {
  const now = Date.now();
  const end = toTimestamp(endDate);
  if (end < now) return 0;
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
}

function getProgressColor(progress) {
  if (progress >= 100) return "#10B981"; // Success color
  if (progress > 75) return "#FACC15"; // Warning color
  if (progress > 50) return "#FB923C"; // Medium color
  return "#3B82F6"; // Primary color
}

function getDifficultyClass(level) {
  if (level <= 3) return "easy";
  if (level <= 6) return "medium";
  return "hard";
}

function renderMilestones() {
  const container = document.getElementById("milestone-container");
  if (!container) return;
  container.innerHTML = "";

  curriculumData.milestones.forEach((m) => {
    const progress = calculateProgress(m.start, m.end);
    const daysLeft = getDaysRemaining(m.end);
    const card = document.createElement("div");
    card.className = "milestone-card";
    card.onclick = () => renderProjects(m.id);

    const header = document.createElement("div");
    header.className = "milestone-header";
    const title = document.createElement("h3");
    title.className = "milestone-title";
    title.textContent = m.title;
    const badge = document.createElement("span");
    badge.className = "milestone-progress";
    badge.textContent = progress >= 100 ? "Completed" : `${progress}%`;
    if (progress >= 100) {
      badge.classList.add("completed");
    }
    header.appendChild(title);
    header.appendChild(badge);
    card.appendChild(header);

    const progressBg = document.createElement("div");
    progressBg.className = "progress-bar-background";
    const progressFill = document.createElement("div");
    progressFill.className = "progress-bar-fill";
    progressFill.style.width = progress + "%";
    progressFill.style.backgroundColor = getProgressColor(progress);
    progressBg.appendChild(progressFill);
    card.appendChild(progressBg);

    const dates = document.createElement("div");
    dates.className = "milestone-dates";
    dates.innerHTML = `<span>Begin at: ${formatDate(m.start)}</span><span>End at: ${formatDate(m.end)}</span>`;
    card.appendChild(dates);

    const remaining = document.createElement("div");
    remaining.className = "milestone-remaining";
    remaining.textContent = progress >= 100 ? "Completed" : `${daysLeft} days remaining`;
    if (daysLeft < 14 && progress < 100) {
      remaining.classList.add("alert");
    }
    card.appendChild(remaining);

    const desc = document.createElement("p");
    desc.className = "milestone-desc";
    desc.textContent = m.description;
    card.appendChild(desc);

    container.appendChild(card);
  });
}

function renderProjects(milestoneId) {
  const container = document.getElementById("project-details-container");
  if (!container) return;
  container.innerHTML = "";

  const milestone = curriculumData.milestones.find((m) => m.id === milestoneId);
  if (!milestone) return;

  const summary = document.createElement("div");
  summary.className = "milestone-summary";
  summary.innerHTML = `<p><strong>${milestone.title}</strong> begins on <em>${formatDate(milestone.start)}</em> and ends on <em>${formatDate(milestone.end)}</em>.</p>`;
  container.appendChild(summary);

  milestone.projects.forEach((p) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    const projTitle = document.createElement("h4");
    projTitle.className = "project-title";
    projTitle.textContent = p.name;
    projectCard.appendChild(projTitle);

    const meta = document.createElement("div");
    meta.className = "project-meta";
    const status = document.createElement("span");
    status.className = "project-status";
    status.textContent = p.status;
    meta.appendChild(status);
    if (p.difficulty) {
      const diff = document.createElement("span");
      diff.className = "project-difficulty " + getDifficultyClass(p.difficulty);
      diff.innerHTML = `<svg style="width:14px;height:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M14.94 4.94l.12.11L20.49 10.6m-1.42 6.36A9 9 0 1117 9h3m-6.57-.67A4.01 4.01 0 0115 11h-1.4a2 2 0 00-1.44 3.42l.16.16"></path>
      </svg> ${p.difficulty}/10`;
      meta.appendChild(diff);
    }
    projectCard.appendChild(meta);

    const projDesc = document.createElement("p");
    projDesc.className = "project-desc";
    projDesc.textContent = p.description;
    projectCard.appendChild(projDesc);

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "project-details";
    detailsDiv.style.display = "none";
    if (p.keyTopics && p.keyTopics.length) {
      const topicsHeading = document.createElement("div");
      topicsHeading.className = "project-details-heading";
      topicsHeading.textContent = "Key Topics";
      detailsDiv.appendChild(topicsHeading);
      const topicsList = document.createElement("ul");
      topicsList.className = "project-details-list";
      p.keyTopics.forEach((topic) => {
        const li = document.createElement("li");
        li.textContent = topic;
        topicsList.appendChild(li);
      });
      detailsDiv.appendChild(topicsList);
    }
    if (p.resources && p.resources.length) {
      const resHeading = document.createElement("div");
      resHeading.className = "project-details-heading";
      resHeading.textContent = "Resources";
      detailsDiv.appendChild(resHeading);
      const resList = document.createElement("ul");
      resList.className = "project-details-list";
      p.resources.forEach((r) => {
        const li = document.createElement("li");
        li.textContent = r;
        resList.appendChild(li);
      });
      detailsDiv.appendChild(resList);
    }
    projectCard.appendChild(detailsDiv);

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-expanded";
    toggleBtn.textContent = "Show More";
    toggleBtn.addEventListener("click", () => {
      if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
        toggleBtn.textContent = "Show Less";
      } else {
        detailsDiv.style.display = "none";
        toggleBtn.textContent = "Show More";
      }
    });
    projectCard.appendChild(toggleBtn);
    container.appendChild(projectCard);
  });
}

// =============================
// Kickoff Date and Pace Calculator
function calculateDeadlines() {
  const kickoffInput = document.getElementById("kickoff-date");
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";
  if (!kickoffInput.value) {
    resultContainer.textContent = "Please select a kickoff date.";
    return;
  }
  const kickoffDate = new Date(kickoffInput.value);
  if (isNaN(kickoffDate.getTime())) {
    resultContainer.textContent = "Invalid date.";
    return;
  }
  // Demonstration: use the 8-month column from the accumulative pace data.
  const paceDays = paceAccumulative.map((item) => item.days[0]);
  paceDays.forEach((days, index) => {
    const deadlineDate = new Date(kickoffDate.getTime() + days * 86400000);
    const formattedDate = deadlineDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const p = document.createElement("p");
    p.textContent = `Milestone ${index}: ${formattedDate} (approx. ${days} days after kickoff)`;
    resultContainer.appendChild(p);
  });
}

// =============================
// Initialization
window.addEventListener("DOMContentLoaded", () => {
  renderMilestones();
  if (curriculumData.milestones.length) {
    renderProjects(curriculumData.milestones[0].id);
  }
  document.getElementById("calculate-btn").addEventListener("click", calculateDeadlines);
});