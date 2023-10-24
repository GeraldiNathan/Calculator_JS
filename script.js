// document.addEventListener("DOMContentLoaded", function () {
//   const bilangan1Input = document.querySelector(".bilangan1");
//   const bilangan2Input = document.querySelector(".bilangan2");
//   const operatorButtons = document.querySelectorAll(".operator button");

//   operatorButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       const operator = button.className;

//       const bilangan1 = parseFloat(bilangan1Input.value);
//       const bilangan2 = parseFloat(bilangan2Input.value);

//       let hasil = 0;

//       switch (operator) {
//         case "+":
//           hasil = bilangan1 + bilangan2;
//           break;
//         case "-":
//           hasil = bilangan1 - bilangan2;
//           break;
//         case "*":
//           hasil = bilangan1 * bilangan2;
//           break;
//         case "/":
//           hasil = bilangan1 / bilangan2;
//           break;
//         case "^":
//           hasil = Math.pow(bilangan1, bilangan2);
//           break;
//         case "Sin":
//           hasil = Math.sin(bilangan1);
//           break;
//         case "Cos":
//           hasil = Math.cos(bilangan1);
//           break;
//         case "Tan":
//           hasil = Math.tan(bilangan1);
//           break;
//         case "Akar":
//           hasil = Math.sqrt(bilangan1);
//           break;
//         case "Mod":
//           hasil = bilangan1 % bilangan2;
//           break;
//         case "Clear":
//           bilangan1Input.value = "";
//           bilangan2Input.value = "";
//           return;
//         default:
//           hasil = "Operasi tidak valid";
//           break;
//       }

//       alert("Hasil: " + hasil);
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const bilangan1Input = document.querySelector(".bilangan1");
  const bilangan2Input = document.querySelector(".bilangan2");
  const hasilInput = document.querySelector(".hasil");
  const operatorButtons = document.querySelectorAll(".operator button");

  operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const operator = button.className;

      const bilangan1 = parseFloat(bilangan1Input.value);
      const bilangan2 = parseFloat(bilangan2Input.value);

      let hasil = 0;

      switch (operator) {
        case "+":
          hasil = bilangan1 + bilangan2;
          break;
        case "-":
          hasil = bilangan1 - bilangan2;
          break;
        case "*":
          hasil = bilangan1 * bilangan2;
          break;
        case "/":
          hasil = bilangan1 / bilangan2;
          break;
        case "^":
          hasil = Math.pow(bilangan1, bilangan2);
          break;
        case "Sin":
          hasil = Math.sin(bilangan1);
          break;
        case "Cos":
          hasil = Math.cos(bilangan1);
          break;
        case "Tan":
          hasil = Math.tan(bilangan1);
          break;
        case "Akar":
          hasil = Math.sqrt(bilangan1);
          break;
        case "Mod":
          hasil = bilangan1 % bilangan2;
          break;
        case "Clear":
          bilangan1Input.value = "";
          bilangan2Input.value = "";
          hasilInput.value = "";
          return; // Menghentikan eksekusi lebih lanjut
        default:
          hasil = "Operasi tidak valid";
          break;
      }

      // Menampilkan hasil pada elemen HTML
      hasilInput.value = hasil;
    });
  });
});
