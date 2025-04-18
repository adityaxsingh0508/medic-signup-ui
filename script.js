document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    const licenseInput = document.getElementById("license-upload");
    const certInput = document.getElementById("certification-upload");
  
    const licenseNote = licenseInput.nextElementSibling;
    const certNote = certInput.nextElementSibling;
  
    // Show uploaded file name for license
    licenseInput.addEventListener("change", () => {
      if (licenseInput.files.length > 0) {
        licenseNote.textContent = `Uploaded: ${licenseInput.files[0].name}`;
        licenseNote.style.color = "#333";
      } else {
        licenseNote.textContent = "Only PDF, JPG, and PNG formats are accepted.";
        licenseNote.style.color = "#888";
      }
    });
  
    // Show uploaded file name for certification
    certInput.addEventListener("change", () => {
      if (certInput.files.length > 0) {
        certNote.textContent = `Uploaded: ${certInput.files[0].name}`;
        certNote.style.color = "#333";
      } else {
        certNote.textContent = "Only PDF, JPG, and PNG formats are accepted.";
        certNote.style.color = "#888";
      }
    });
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Collect values
      const name = document.getElementById("full-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const specialty = document.getElementById("specialty").value;
      const clinic = document.getElementById("clinic-name").value.trim();
      const licenseNumber = document.getElementById("license-number").value.trim();
      const yearsExp = document.getElementById("years-experience").value.trim();
      const licenseFile = licenseInput.files[0];
  
      // Basic validation
      if (!name || !email || !phone || !specialty || !clinic || !licenseNumber || !yearsExp || !licenseFile) {
        alert("Please complete all required fields and upload your license.");
        return;
      }
  
      // Simulate submission and verification review
      const submitBtn = form.querySelector("button[type='submit']");
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
  
      setTimeout(() => {
        alert("Your registration has been submitted and is under review!");
        form.reset();
  
        // Reset file notes
        licenseNote.textContent = "Only PDF, JPG, and PNG formats are accepted.";
        licenseNote.style.color = "#888";
        certNote.textContent = "Only PDF, JPG, and PNG formats are accepted.";
        certNote.style.color = "#888";
  
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Registration";
      }, 2000);
    });
  });
  