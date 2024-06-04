const driverName = document.getElementById("name").innerText;
const clientName = document.getElementById("user-name").innerText;
const id = document.getElementById("tripId").innerText;
console.log(id);


let i0 = 1;
let length = document.getElementById("lengh");
let plus = document.getElementById("more");
let minuss = document.getElementById("less");
let place = document.getElementById("pc");
let disp = document.getElementById("disponible");



place.innerText = i0;

plus.addEventListener("click", function () {
  if (i0 < parseInt(disp.innerText) ) {
   
    i0++;
    updater();
   
  }
});

minuss.addEventListener("click", function () {
  if (i0 > 0) {
    i0--;
    updater();
    console.log(i0);
  }
});

function updater() {
  let x = 5 - parseInt(disp.innerText) + i0;

  if (x == 1) {
    length.style.width = "21%";
  } else {
    length.style.width = x * 20 + "%";
  }
  place.innerText = i0;
}

updater();

let errir = document.getElementById("error");
let look = document.getElementById("look");
look.addEventListener("click", async function () {
  if (i0 == 0) {
    error.innerText = "il faut reserver aux minimum une seulle place";
  } else {
    await fetch("/reserve/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientName: clientName, id: id , place: place.innerText}), // Ensure tripId is correctly set
    })
      .then((response) => {
        if (response.ok) {
          console.log("Reason sent successfully.");
          window.location.href = "/pay";
        } else {
          console.error("Failed to send reason.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

let sig = document.getElementById("sig");
let cnt = document.getElementById("cnt");
let content = document.getElementById("content");

let reason = "not yet";
signialer = document.getElementById("sign");
err = document.getElementById("err");

let btn1 = document.getElementsByClassName("btn1");
let btn2 = document.getElementsByClassName("btn2");
let btn3 = document.getElementsByClassName("btn3");
let btn4 = document.getElementsByClassName("btn4");
let btn5 = document.getElementsByClassName("btn5");
let btn6 = document.getElementsByClassName("btn6");

sig.addEventListener("click", function () {
  if (reason === "not yet") {
    cnt.style.display = "flex";
    content.style.filter = "blur(5px)";
  } else {
    error.innerText = "vous avez dija signialer cette conducteur";
  }
});

document.addEventListener("click", function (event) {
  let isClickInside = cnt.contains(event.target);
  let isClickInside1 = sig.contains(event.target);

  if (!isClickInside && !isClickInside1) {
    cnt.style.display = "none";
    content.style.filter = "none";
  }
});

btn1[0].addEventListener("click", function () {
  btn1[0].style.backgroundColor = "red";
  btn1[0].style.color = "white";

  btn2[0].style.backgroundColor = "white";
  btn2[0].style.color = "black";
  btn3[0].style.backgroundColor = "white";
  btn3[0].style.color = "black";
  btn4[0].style.backgroundColor = "white";
  btn4[0].style.color = "black";
  btn5[0].style.backgroundColor = "white";
  btn5[0].style.color = "black";
  btn6[0].style.backgroundColor = "white";
  btn6[0].style.color = "black";
});

btn2[0].addEventListener("click", function () {
  btn2[0].style.backgroundColor = "red";
  btn2[0].style.color = "white";

  btn1[0].style.backgroundColor = "white";
  btn1[0].style.color = "black";
  btn3[0].style.backgroundColor = "white";
  btn3[0].style.color = "black";
  btn4[0].style.backgroundColor = "white";
  btn4[0].style.color = "black";
  btn5[0].style.backgroundColor = "white";
  btn5[0].style.color = "black";
  btn6[0].style.backgroundColor = "white";
  btn6[0].style.color = "black";
});

btn6[0].addEventListener("click", function () {
  btn6[0].style.backgroundColor = "red";
  btn6[0].style.color = "white";

  btn2[0].style.backgroundColor = "white";
  btn2[0].style.color = "black";
  btn3[0].style.backgroundColor = "white";
  btn3[0].style.color = "black";
  btn4[0].style.backgroundColor = "white";
  btn4[0].style.color = "black";
  btn5[0].style.backgroundColor = "white";
  btn5[0].style.color = "black";
  btn1[0].style.backgroundColor = "white";
  btn1[0].style.color = "black";
});

btn3[0].addEventListener("click", function () {
  btn3[0].style.backgroundColor = "red";
  btn3[0].style.color = "white";

  btn2[0].style.backgroundColor = "white";
  btn2[0].style.color = "black";
  btn1[0].style.backgroundColor = "white";
  btn1[0].style.color = "black";
  btn4[0].style.backgroundColor = "white";
  btn4[0].style.color = "black";
  btn5[0].style.backgroundColor = "white";
  btn5[0].style.color = "black";
  btn6[0].style.backgroundColor = "white";
  btn6[0].style.color = "black";
});

btn4[0].addEventListener("click", function () {
  btn4[0].style.backgroundColor = "red";
  btn4[0].style.color = "white";

  btn2[0].style.backgroundColor = "white";
  btn2[0].style.color = "black";
  btn3[0].style.backgroundColor = "white";
  btn3[0].style.color = "black";
  btn1[0].style.backgroundColor = "white";
  btn1[0].style.color = "black";
  btn5[0].style.backgroundColor = "white";
  btn5[0].style.color = "black";
  btn6[0].style.backgroundColor = "white";
  btn6[0].style.color = "black";
});

btn5[0].addEventListener("click", function () {
  btn5[0].style.backgroundColor = "red";
  btn5[0].style.color = "white";

  btn2[0].style.backgroundColor = "white";
  btn2[0].style.color = "black";
  btn3[0].style.backgroundColor = "white";
  btn3[0].style.color = "black";
  btn4[0].style.backgroundColor = "white";
  btn4[0].style.color = "black";
  btn1[0].style.backgroundColor = "white";
  btn1[0].style.color = "black";
  btn6[0].style.backgroundColor = "white";
  btn6[0].style.color = "black";
});

signialer.addEventListener("click", async function () {
  if (
    btn1[0].style.backgroundColor === "red" ||
    btn2[0].style.backgroundColor === "red" ||
    btn3[0].style.backgroundColor === "red" ||
    btn4[0].style.backgroundColor === "red" ||
    btn5[0].style.backgroundColor === "red" ||
    btn6[0].style.backgroundColor === "red"
  ) {
    cnt.style.display = "none";
    content.style.filter = "none";
    if (btn1[0].style.backgroundColor === "red") {
      reason = " Non-respect des conditions de covoiturage";
    } else if (btn2[0].style.backgroundColor === "red") {
      reason = " Véhicule en mauvais état";
    } else if (btn3[0].style.backgroundColor === "red") {
      reason = " Comportement dangereux du conducteur";
    } else if (btn4[0].style.backgroundColor === "red") {
      reason = " Absence du conducteur au point de rendez-vous";
    } else if (btn5[0].style.backgroundColor === "red") {
      reason = " Exigences imprévues pendant le trajet";
    } else if (btn6[0].style.backgroundColor === "red") {
      reason = " Conflit conducteur-passager";
    }
    console.log(reason);

    // send
    await fetch("/report/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reason: reason,
        driverName: driverName,
        clientName: clientName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log("Reason sent successfully.");
        } else {
          // Handle errors
          console.error("Failed to send reason.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    err.style.display = "flex";
    err.innerText = "you have to select a reason";
  }
});
