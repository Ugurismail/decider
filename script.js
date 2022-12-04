"use strict";
let adaylar = [];
let kriterler = [];
let adayAdet = "";
document.getElementById("adayAdetForm").addEventListener("submit", (e) => {
	e.preventDefault();
	adayAdet = document.getElementById("adayAdetNum").value;

	for (let index = 0; index < adayAdet; index++) {
		document.getElementById("adayNameBtn").insertAdjacentHTML(
			"beforebegin",
			`
				<label for="adayName"> ${index + 1} numaralı adayın ismi </label>
				<input id="adayNameId" class="adayName" type="text">
			`,
		);
	}
	document.getElementById("adayNameBtn").classList.remove("hidden");
});

document.getElementById("adayNameForm").addEventListener("submit", (e) => {
	e.preventDefault();

	let a = 0;
	document.querySelectorAll(".adayName").forEach((aday) => {
		adaylar[a] = {
			adı: `${aday.value}`,
			puanlar: [],
		};
		a++;
	});

	document.getElementById("ozAdet").classList.remove("hidden");
});

document.getElementById("ozAdetForm").addEventListener("submit", (e) => {
	e.preventDefault();
	document.getElementById("adayOzellik").classList.remove("hidden");

	for (
		let index = 0;
		index < document.getElementById("ozAdetNum").value;
		index++
	) {
		document.getElementById("adayOzBtn").insertAdjacentHTML(
			"beforebegin",
			`
			<label for="ozName">${index + 1} numaralı Ozelliğin Adı</label>
			<input id="ozName" type="text">
		`,
		);
	}
});

document.getElementById("adayOzForm").addEventListener("submit", (e) => {
	e.preventDefault();
	let b = 0;
	document.querySelectorAll("#ozName").forEach((ozellik) => {
		kriterler[b] = {
			kriter: `${ozellik.value}`,
			kriterDgr: "",
		};
		b++;

		document.getElementById("OzBtn").insertAdjacentHTML(
			"beforebegin",
			`
		<label for="ozPuan">${ozellik.value} Özelliği % kaç önemli sizin için?</label>
		<input id="ozPuan" class="ozPuan" type="number">
		`,
		);
	});

	document.getElementById("OzBtn").classList.remove("hidden");
});

document.getElementById("ozellikDegerler").addEventListener("submit", (e) => {
	e.preventDefault();
	document.getElementById("sonDegerlemeBtn").classList.remove("hidden");
	let c = 0;
	document.querySelectorAll(".ozPuan").forEach((puan) => {
		kriterler[c].kriterDgr = puan.value;
		c++;
	});

	let d = 0;
	for (const aday of adaylar) {
		for (const kriter of kriterler) {
			document.getElementById("sonDegerlemeBtn").insertAdjacentHTML(
				"beforebegin",
				`
			<label for="SnDgr">${aday.adı} adayının ${kriter.kriter} özelliğine 1 ila 10 arasında bir değer verin.</label>
			<input id="SnDgr" type="number">
			`,
			);
		}
		d++;
	}
});

let nihayetList = [];
let neticeList = [];
document.getElementById("sonDegerlemeForm").addEventListener("submit", (e) => {
	e.preventDefault();
	const dgrAdet = document.querySelectorAll("#SnDgr").length;
	const dgrlerList = [];
	document.querySelectorAll("#SnDgr").forEach((puan) => {
		dgrlerList.push(puan.value);
	});
	for (let i = 0; i < adaylar.length; i++) {
		const kesilenPuanlar = dgrlerList.splice(0, kriterler.length);

		adaylar[i].puanlar.push(kesilenPuanlar);
	}
	for (let i = 0; i < kriterler.length; i++) {
		adaylar.forEach((aday) => {
			aday.puanlar.forEach((puan) => {
				neticeList.push(puan[i] * kriterler[i].kriterDgr);
			});
		});
	}

	console.log(adaylar, kriterler, neticeList);

	function adayPuanHesaplama(adaylar, kriterler, neticeList) {
		for (let i = 0; i < adaylar.length; i++) {
			let netice = 0;
			for (let k = i; k < neticeList.length; k += adaylar.length) {
				netice += neticeList[k];
			}
			console.log(`${adaylar[i].adı} adayının toplam puanı ${netice}`);
		}
	}
	adayPuanHesaplama(adaylar, kriterler, neticeList);
});
