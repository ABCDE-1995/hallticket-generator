// ===============================
// Show Hall Ticket Data (View Ticket)
// ===============================
if (window.location.pathname.includes("hallticket.html")) {
  let data = JSON.parse(localStorage.getItem("hallTicket"));
  if (data) {
    document.getElementById("htRoll").innerText = data.roll;
    document.getElementById("htName").innerText = data.name;
    document.getElementById("htCourse").innerText = data.course;
    document.getElementById("htYear").innerText = data.year;
  } else {
    alert("No hall ticket data found!");
    window.location.href = "generate.html";
  }
}

// ===============================
// Download Hall Ticket
// ===============================
function downloadHallTicket() {
  const element = document.getElementById("hallTicket");
  html2pdf()
    .set({ filename: "HallTicket.pdf" })
    .from(element)
    .save();
}
