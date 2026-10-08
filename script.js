const currentTime = document.querySelector(".current-time");
const lastUpdated = document.querySelector(".last-updated");
const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
const updatedFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
});

function updateTime() {
    const now = new Date();
    currentTime.dateTime = now.toISOString();
    currentTime.textContent = timeFormatter.format(now);
}

updateTime();
setInterval(updateTime, 1000);

lastUpdated.textContent = `Last updated: ${updatedFormatter.format(
    new Date(document.lastModified)
)}`;
