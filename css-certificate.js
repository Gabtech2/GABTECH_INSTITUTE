// Get form and certificate elements
const form = document.getElementById("certificateForm");
const certificatePreview = document.getElementById("certificatePreview");

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the entered name
  const name = document.getElementById("name").value;

  // Display the certificate preview
  certificatePreview.innerHTML = `
    <div class="certificate">
      <h3>Certificate of Completion</h3>
      <p>This certifies that</p>
      <div class="name">${name}</div>
      <p>has successfully completed the course.</p>
      <p><strong>GABTECH INSTITUTE</strong></p>
    </div>
    <button id="downloadBtn" class="btn">Download Certificate</button>
  `;
  certificatePreview.style.display = "block";

  // Handle certificate download
  document.getElementById("downloadBtn").addEventListener("click", () => {
    const certificateElement = certificatePreview.querySelector(".certificate");
    html2canvas(certificateElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
});

certificatePreview.innerHTML = `
  <div class="certificate">
    <div class="certificate-header">
      <img src="images/logo.png" alt="GABTECH INSTITUTE Logo" class="logo">
      <h3>Certificate of Completion</h3>
    </div>
    <p>This is to certify that</p>
    <div class="name">${name}</div>
    <p>has successfully completed the</p>
    <p><strong>Professional Course</strong></p>
    <div class="certificate-footer">
      <p>Issued by <strong>GABTECH INSTITUTE</strong></p>
      <p>Date: ${new Date().toLocaleDateString()}</p>
    </div>
  </div>
  <button id="downloadBtn" class="btn">Download Certificate</button>
`;
// Modify form to accept course name
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const courseName = "CSS Mastery"; // Replace with dynamic value if needed

  certificatePreview.innerHTML = `
    <div class="certificate">
      <div class="certificate-header">
        <img src="logo.png" alt="GABTECH INSTITUTE Logo" class="logo">
        <h3>Certificate of Completion</h3>
      </div>
      <p>This is to certify that</p>
      <div class="name">${name}</div>
      <p>has successfully completed the</p>
      <p><strong>${courseName}</strong></p>
      <div class="certificate-footer">
        <p>Issued by <strong>GABTECH INSTITUTE</strong></p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
      </div>
    </div>
    <button id="downloadBtn" class="btn">Download Certificate</button>
  `;
  certificatePreview.style.display = "block";

  document.getElementById("downloadBtn").addEventListener("click", () => {
    const certificateElement = certificatePreview.querySelector(".certificate");
    html2canvas(certificateElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
});
