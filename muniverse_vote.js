// ==UserScript==
// @name         kiiras vote muniverse
// @namespace    http://tampermonkey.net/
// @version      2024-08-25
// @description  tambah minyak!!
// @author       kiiracc
// @include     /https?:\/\/www\.muniverse\.io\/titlehome\/.*/
// @include     /https:\/\/accounts\.google\.com\/*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=getviralreach.in
// @grant        GM_log
// @grant        GM.getValue
// @grant        GM.setValue
// @noframes
// ==/UserScript==

//NOTE:
//THIS IS A TAMPERMONKEY SCRIPT
//TO RUN THIS YOU NEED A BROWSER THAT ALLOW 
//TAMPERMONKEY SCRIPTS RUNNING, THERE ARE A LOT OF
//BROWSERS YOU CAN USE SUCH AS FIREFOX,KIWI,MISIS,VIA
//BROWSER,ETC...
//YOU CAN LOOK UP ON GOOGLE HOW TO RUN TAMPERMONKEY
//SCRIPT(SPOILER, BASICALLY GO TO THE SCRIPT SETTING ON
//YOUR DESIRED BROWSER AND PASTE ALL THESE CODES
//THERE,VERY SIMPLE)
//THEN, THERE IS VARIABLE CALLED "ems" IN THIS SCRIPT 
// (let ems = [...])
//YOU HAVE TO REPLACE ALL THOSE EMAILS AND PASSWORD
//WITH YOURS
//YOU MAY ADD OR REMOVE EMAILS/PASSWORDS BUT MAKE
//SURE TO FOLLOW THE SYNTAX OF THE EXAMPLES GIVEN
//ONCE YOU DONE, YOU CAN JUST GO TO MUNIVERSE, THERE
//WILL BE A BUTTON WITH TEXT "VOTE KIIRAS" AND JUST CLICK
//IT ONCE, IT WILL AUTOMATICALLY GO THROUGH EVERY EACH
//OF YOUR EMAILS LISTED AND DO THE VOTING
//GOOD LUCK!!

//PS/IF YOU ARE SCARED OF YOUR EMAILS AND PASSWORDS BEING EYED ON THE SCRIPTS ARE LITERALLY OPEN BELOW FOR YOU TO INSPECT
//OR YOU CAN COPY AND PASTE IT TO CHATGPT OR ANY OTHER AI TOOLS AND ASK THEM IF THERE ANY SUSPICIOUS LINES IN THIS SCRIPT

//Here is the emails and passwords
let ems = [
		["example1@gmail.com", "password1"],
		["example2@gmail.com", "password2"],
		["example3@gmail.com", "password3"],
	]
//You may remove accounts or
//Follow the syntax if you want to add more accounts
//["email","password"],

(function() {
	'use strict';
	let qs = document.querySelector.bind(document)
	let qsa = document.querySelectorAll.bind(document)
	let fi = 1000
	let f2i = 1000
	let g1i = 1000
	let g2i = 1000
	let g3i = 1000
	let loggedIn = 0
	

	function ce(n) {
		return document.createElement(n)
	}

	function menu() {
		let ci = setInterval(() => {
			let pr = qs(".css-1svdv5w")
			if (!pr) return
			clearInterval(ci)
			let d = ce("div")
			let btn = ce("button")
			btn.innerHTML = "VOTE KIIRAS"
			btn.style.padding = "15px"
			btn.style.background = "none"
			btn.style.outline = "none"
			btn.style.color = "white"
			btn.style.border = "3px solid white"
			btn.style.borderRadius = "10px"
			btn.style.fontSize = "25px"
			btn.className = "MuiTypography-root MuiTypography-inherit"
			btn.onclick = go
			d.appendChild(btn)
			pr.appendChild(d)
		}, 500)
	}

	async function go() {
		await GM.setValue("ind", 0)
		f()
	}


	async function f() {
		let cind = await GM.getValue("ind")
		if (cind >= ems.length) return
		await GM.setValue("email", ems[cind][0])
		await GM.setValue("pass", ems[cind][1])
		let ci = setInterval(() => {
			let btn = qs(".css-m0lka0")
			if (!btn) return
			btn.click()
			let gbtn = qs(".css-1u0niql")
			if (!gbtn) return
			gbtn.click()
			clearInterval(ci)
		}, fi)
	}
	async function f2() {
		let ci = setInterval(async () => {
			let a = qsa(".css-3frica")[2]
			if (!a) return
			a.click()
			clearInterval(ci)
			ci = setInterval(() => {
				let b = qsa(".css-bwr8gd")[6]
				if (!b) return
				b.click()
				clearInterval(ci)
				ci = setInterval(() => {
					let c = qsa(".css-3frica")[7]
					if (!c) return
					c.click()
					clearInterval(ci)
					ci = setInterval(() => {
						let dd = qsa(".css-1gyttc6")
						if (!dd) return
						let d = null
						for (let di of dd) {
							if (/KIIRAS/.test(di.innerHTML)) d = di
						}
						d.parentElement.parentElement.parentElement.children[1].click()
						clearInterval(ci)
						ci = setInterval(() => {
							let e = qs(".css-14edrfd")
							if (!e) return
							if (e.disabled) {
								clearInterval(ci)
								ci = setInterval(() => {
									let l = qs(".css-1jmpty7")
									if (!l) return
									l.click()
									clearInterval(ci)
									ci = setInterval(() => {
										let m = qs(".css-ekplem")
										if (!m) return
										m.click()
										clearInterval(ci)
										ci = setInterval(async () => {
											let n = qsa(".css-70vjnj")[4]
											if (!n) return
											n.click()
											clearInterval(ci)
											let cind = await GM.getValue("ind")
											await GM.setValue("ind", cind + 1)
											await GM.setValue("log", 0)
										}, 500)
									}, 500)
								}, 500)
								return
							}
							e.click()
							clearInterval(ci)
							ci = setInterval(() => {
								let h = qsa(".css-e67a7h")[1]
								if (!h) return
								for (let i = 0; i < 4; ++i) h.click()
								clearInterval(ci)
								ci = setInterval(() => {
									let j = qs(".css-1l6od89")
									if (!j) return
									j.click()
									clearInterval(ci)
									ci = setInterval(() => {
										let k = qs(".css-wmz0k8")
										if (!k) return
										k.click()
										clearInterval(ci)
										ci = setInterval(() => {
											let l = qs(".css-1jmpty7")
											if (!l) return
											l.click()
											clearInterval(ci)
											ci = setInterval(() => {
												let m = qs(".css-ekplem")
												if (!m) return
												m.click()
												clearInterval(ci)
												ci = setInterval(async () => {
													let n = qsa(".css-70vjnj")[4]
													if (!n) return
													n.click()
													clearInterval(ci)
													let cind = await GM.getValue("ind")
													await GM.setValue("ind", cind + 1)
													await GM.setValue("log", 0)
												}, 500)
											}, 500)
										}, 500)
									}, 500)
								}, 500)
							}, 500)
						}, 500)
					}, 500)
				}, 500)
			}, 500)
		}, f2i)
	}
	async function g1() {
		let ci = setInterval(() => {
			let btn = qs(".B682ne")
			if (!btn) return
			btn.children[0].click()
			clearInterval(ci)
		}, g1i)
	}
	async function g2() {
		let em = await GM.getValue("email")
		let pass = await GM.getValue("pass")
		let ci = setInterval(() => {
			let inp = qs(".whsOnd")
			if (!inp) return
			inp.value = em
			let btn = qsa(".VfPpkd-LgbsSe")[1]
			if (!btn) return
			btn.click()
			clearInterval(ci)
			ci = setInterval(() => {
				let inp2 = qs(".whsOnd")
				if (!inp2 || inp2.type != "password") return
				clearInterval(ci)
				setTimeout(() => {
					inp2.value = pass
				}, 3000)
				setTimeout(() => {
					let btn = qsa(".VfPpkd-LgbsSe")[1]
					btn.click()
				}, 7000)
			}, 1500)
		}, g2i)
	}

	async function g3() {
		let ci = setInterval(async () => {
			let btn = qsa(".VfPpkd-LgbsSe")[1]
			if (!btn) return
			btn.click()
			clearInterval(ci)
			await GM.setValue("log", 1)
		}, g3i)
	}
	let url = window.location.href
	//console.log(url)
	let p1 = /muniverse.io\/titlehome/
	let p2 = /oauth2\/v2/
	let p3 = /v3\/signin/
	let clog = 0

	if (p1.test(url)) {
		async function sv() {
			await GM.setValue("log", 0)
		}
		sv()
		let logi = setInterval(async () => {
			let nlog = await GM.getValue("log")
			if (nlog != clog) {
				clog = nlog
				//alert("change to " + clog)
				if (clog == 1) f2()
				else if (clog == 0) {
					let cind = await GM.getValue("ind")
					if (cind > 0 && cind < ems.length) f()
					else menu()
				}
			}
		}, 1000)
		menu()
	} else if (p2.test(url)) {
		g1()
	} else if (p3.test(url)) {
		g2()
	} else {
		g3()
	}

})();
