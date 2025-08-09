function validateForm() {
  const name = document.getElementById("form_name").value.trim();
  const email = document.getElementById("email_id").value.trim();
  const subject = document.getElementById("form_subject").value.trim();
  const message = document.getElementById("form_message").value.trim();

  const nameRegex = /^[a-zA-Z\s]{2,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectRegex = /^.{3,50}$/;
  const messageRegex = /^.{5,}$/;

  if (!nameRegex.test(name)) {
    alert("Please enter a valid name (letters only, 2–30 characters).");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!subjectRegex.test(subject)) {
    alert("Subject must be between 3 and 50 characters.");
    return false;
  }

  if (!messageRegex.test(message)) {
    alert("Message must be at least 5 characters.");
    return false;
  }

  return true; // All validations passed, allow submission
}