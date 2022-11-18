"use strict";

const adayInput = document.getElementById("adayInput");
const adayForm = document.getElementById("adayAdet");
const adayKistasContainer = document.querySelector(".adayadForm");
const adayKistas = document.querySelector(".adayadContainer");

adayForm.addEventListener("submit", (e) => {
	e.preventDefault();

	for (let index = 0; index < adayInput.value; index++) {
		// const element = array[index];
		const eklenecek = `

    <label for="adayad">${index + 1} No.lu Adayın adı</label>
    <input id="adayad" type="text">
    `;
		adayKistasContainer.insertAdjacentHTML("beforebegin", eklenecek);
	}

	document.querySelector(".adayadBtn").style.display = "block";
	document.querySelector(".adayAdetContainer").style.display = "none";
});

const adayAdForm = document.querySelector(".adayadForm");

let adayisimleri;
adayAdForm.addEventListener("submit", (e) => {
	e.preventDefault();
	adayisimleri = document.querySelectorAll("#adayad");
	// adayisimleri.forEach((aday) => console.log(aday.value));
	document.querySelector(".adayadContainer").style.display = "none";
	document.querySelector(".adayOzellikContainer").style.display = "block";
});

const adayOzellikForm = document.querySelector("#adayOzellikForm");

const adayDegerleriForm = document.querySelector(".adayDegerleriForm");
adayOzellikForm.addEventListener("submit", (e) => {
	e.preventDefault();
	document.querySelector(".adayOzellikContainer").style.display = "none";
	const ozellikAdet = document.querySelector("#adayOzellikAdet").value;
	for (let index = 0; index < ozellikAdet; index++) {
		// const element = array[index];
		const eklenecekOzellikler = `
    <label for="adayOzellik">${index + 1} No.lu Aday Ozelliği</label>
    <input id="adayOzellik" type="text">
    <label for="adayOzellikDeger">Bu Özelliğin %'olarak değeri</label>
    <input id="adayOzellikDeger" type="number">
    `;

		adayDegerleriForm.insertAdjacentHTML("beforebegin", eklenecekOzellikler);
		document.querySelector(".adayDegerleriBtn").style.display = "block";
	}
});

adayDegerleriForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const adayOzellikler = document.querySelectorAll("#adayOzellik");
	const adayOzellikDegerler = document.querySelectorAll("#adayOzellikDeger");

	adayisimleri.forEach((aday) => {
		const sonucForm = document.querySelector(".sonucForm");

		adayOzellikler.forEach((ozellik) => {
			const eklenecekSonuclar = `
      <label for="sonuc">${aday.value} Adayının ${ozellik.value} Özeliğine beğeniniz % ?</label>
      <input id="sonuc" type="number">
      `;

			sonucForm.insertAdjacentHTML("beforebegin", eklenecekSonuclar);
		});
	});
	const x = document.querySelector(".adayDegerleriContainer");
	x.style.display = "none";

	document.querySelector(".sonucBtn").style.display = "block";
	// adayOzellikler.forEach((ozellik) => {
	// 	console.log(ozellik.value);
	// });
	// adayOzellikDegerler.forEach((ozellikDeg) => {
	// 	console.log(ozellikDeg.value);
	// });
});
