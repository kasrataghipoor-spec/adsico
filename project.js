const inpName = document.querySelector(".inpName");
const inpEmail = document.querySelector(".inpEmail");
const inpPwd = document.querySelector(".inpPwd");
const inpField = document.querySelector(".inpField");
const inpMilitary = document.querySelector(".inpMilitary");
const inpColor = document.querySelector(".inpColor");
const btnSubmit = document.querySelector(".btnSubmit");
const btnReset = document.querySelector(".btnReset");
const errBox = document.querySelector(".error");
const okBox = document.querySelector(".success");
const genderRadios = document.querySelectorAll('input[name="gender"]');
const inpAge = document.querySelector(".inpAge");
const ageValue = document.getElementById("ageValue");
const militaryLabel = document.querySelector(".military label");

inpAge.addEventListener("input", function () {
  ageValue.textContent = inpAge.value;
});

inpColor.addEventListener("input", function () {
  document.body.style.backgroundColor = inpColor.value;
});

for (let i = 0; i < genderRadios.length; i++) {
  genderRadios[i].addEventListener("change", function () {
    if (
      document.querySelector('input[name="gender"]:checked').value == "female"
    ) {
      inpMilitary.checked = false;
      inpMilitary.disabled = true;
      militaryLabel.style.color = "gray";
    } else {
      inpMilitary.disabled = false;
      militaryLabel.style.color = "black";
    }
  });
}

btnSubmit.addEventListener("click", function () {
  errBox.textContent = "";
  okBox.textContent = "";

  const name = inpName.value.trim();

  const email = inpEmail.value.trim();

  const pwd = inpPwd.value;

  const age = parseInt(inpAge.value);

  const field = inpField.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const military = inpMilitary.checked;

  if (name.length < 5) {
    errBox.textContent = "(حداقا 5 کراکتر))نام را وارد کنید.";
    document.body.style.backgroundColor = "red";
    return;
  }


  const atPos = email.indexOf("@");
  const ok = email.endsWith(".com");
  const lenBefore = atPos; 
  const lenBetween = email.length - atPos - 4; 

  if (atPos <= 1 || lenBetween <= 1 || !ok) {
    errBox.textContent = "ایمیل مورد تایید نیست";
    document.body.style.backgroundColor = "red";
    return;
  }

  

  if (pwd.length < 6 || !pwd.includes("@")) {
    errBox.textContent = "پسورد حداقل ۶ کاراکتر و شامل @ باشد.";
    document.body.style.backgroundColor = "red";
    return;
  }

  if (field == "") {
    errBox.textContent = "رشته تحصیلی را انتخاب کنید.";
    document.body.style.backgroundColor = "red";
    return;
  }
  if (isNaN(age) || age < 18) {
    errBox.textContent = "سن باید حداقل 18 باشد.";
    document.body.style.backgroundColor = "red";
    return;
  }
  document.body.style.backgroundColor = "green";
  okBox.textContent = `ثبت‌نام موفق! نام: ${name} — ایمیل: ${email} — سن: ${age} — رشته: ${field} — جنسیت: ${gender} ${
    military ? "— سربازی رفته" : ""
  }`;
});

btnReset.addEventListener("click", function () {
  inpName.value = "";
  inpEmail.value = "";
  inpPwd.value = "";
  inpAge.value = "0";
  ageValue.textContent = "سن خود را وارد کنید";
  inpField.value = "";
  document.querySelector('input[name="gender"][value="male"]').checked = true;
  inpMilitary.checked = false;
  inpMilitary.disabled = false;
  inpColor.value = "#f6f8fa";
  document.body.style.backgroundColor = "#f6f8fa";
  errBox.textContent = "";
  okBox.textContent = "";
});
