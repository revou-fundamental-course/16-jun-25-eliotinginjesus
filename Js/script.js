//====auto slide====
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  const slides = document.getElementsByClassName("img-slideshow");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// ==== POPUP NAMA ====
window.onload = function() {
  document.getElementById("popup").style.display = "flex";
}

function submitName() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");
  const popup = document.getElementById("popup");

  if (name !== "") {
    greeting.innerHTML = `Hello, ${name}!`;
  } else {
    greeting.innerHTML = `Hello, Visitor!`;
  }

  popup.style.display = "none";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("greeting").innerHTML = "Hello, Visitor!";
}


// Function to validate form
function formValidation() {
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    let phone = document.getElementById('phone-input').value;
    let message = document.getElementById('message-input').value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert('All fields must be filled out!');
    } else {
        document.getElementById('result-form').innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
    }
}

document.getElementById('submit-btn').addEventListener('click', formValidation);


console.log("Javascript is working!");

function greet() {
  const welcomeSpeech = document.getElementById("welcome-speech");
  console.log("welcomeSpeech");
  welcomeSpeech.innerHTML = "Welcome to the Javascript recap!";
}


// === HITUNG LUAS SEGITIGA ===
function hitungLuasSegitiga() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasil = document.getElementById("hasil-luas");

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    hasil.textContent = "Enter valid base and height values.";
    hasil.style.color = "red";
    return;
  }

  const luas = 0.5 * alas * tinggi;
  hasil.textContent = `Luas segitiga adalah ${luas}`;
  hasil.style.color = "black";
}

function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil-luas").textContent = "";
}


// === HITUNG KELILING SEGITIGA ===
function hitungKelilingSegitiga(index) {
  const forms = document.querySelectorAll("form");
  const form = forms[index];
  const hasil = document.getElementById("hasil-keliling");

  const a = parseFloat(form.querySelector("#sisi-a").value);
  const b = parseFloat(form.querySelector("#sisi-b").value);
  const c = parseFloat(form.querySelector("#sisi-c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    hasil.textContent = "Enter all sides with valid values.";
    hasil.style.color = "red";
    return;
  }

  const keliling = a + b + c;
  hasil.textContent = `Keliling segitiga adalah ${keliling}`;
  hasil.style.color = "black";
}

function resetKeliling() {
  document.getElementById("sisi-a").value = "";
  document.getElementById("sisi-b").value = "";
  document.getElementById("sisi-c").value = "";
  document.getElementById("hasil-keliling").textContent = "";
}


