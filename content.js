// Wait for the form to fully load
setTimeout(() => {
  // Helper to get or prompt for user info
  function getUserInfo() {
    // Hardcoded user info
    const data = {
      name: "Al kayes",
      email: "alkayesrifat47@gmail.com",
      vjudge: "https://vjudge.net/user/alkayesrifat",
      zone: "Newbie Problem Solvers Zone",
      targetReason: "Yes Target Fullfill",
      na: "N/A",
    };
    localStorage.setItem("xpscUserInfo", JSON.stringify(data));
    return data;
  }

  // Add Edit Information button
  function addEditButton() {
    if (document.getElementById("edit-xpsc-info-btn")) return;
    const btn = document.createElement("button");
    btn.textContent = "Edit Information";
    btn.id = "edit-xpsc-info-btn";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.zIndex = 9999;
    btn.onclick = () => {
      localStorage.removeItem("xpscUserInfo");
      location.reload();
    };
    document.body.appendChild(btn);
  }

  addEditButton();
  const userInfo = getUserInfo();

  // Fill in the form fields
  const nameField = document.querySelector('input[aria-labelledby*="i8"]');
  const emailField = document.querySelector('input[aria-labelledby*="i13"]');
  const vjudgeField = document.querySelector('input[aria-labelledby*="i18"]');

  if (nameField) {
    nameField.value = userInfo.name;
    const event = new Event("input", { bubbles: true });
    nameField.dispatchEvent(event);
  }

  if (emailField) {
    emailField.value = userInfo.email;
    const event = new Event("input", { bubbles: true });
    emailField.dispatchEvent(event);
  }

  if (vjudgeField) {
    vjudgeField.value = userInfo.vjudge;
    const event = new Event("input", { bubbles: true });
    vjudgeField.dispatchEvent(event);
  }

  // Fill target reason
  const targetReasonField = document.querySelector(
    'input[aria-labelledby*="i36"]'
  );
  if (targetReasonField) {
    targetReasonField.value = userInfo.targetReason;
    const event = new Event("input", { bubbles: true });
    targetReasonField.dispatchEvent(event);
  }

  // Fill N/A field
  const naField = document.querySelector('input[aria-labelledby*="i41"]');
  if (naField) {
    naField.value = userInfo.na;
    const event = new Event("input", { bubbles: true });
    naField.dispatchEvent(event);
  }

  // Select the Problem Solvers Zone radio button
  const radioButton = document.querySelector(
    `div[aria-label="${userInfo.zone}"]`
  );
  if (radioButton) {
    radioButton.click();
  }

  // Select the email checkbox
  const emailCheckbox = document.querySelector(
    `div[aria-label="Record ${userInfo.email} as the email to be included with my response"]`
  );
  if (emailCheckbox && emailCheckbox.getAttribute("aria-checked") === "false") {
    emailCheckbox.click();
  }
}, 2000);
