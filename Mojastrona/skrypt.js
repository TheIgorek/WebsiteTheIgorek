function dataOstatniejAktualizacjiStrony() {
	
	var countDownDate = new Date("Jan 25, 2022 17:00:30").getTime();
	var d = new Date();
	var n = d.getTime();
	
	var czasOdAktualizacjiStrony = n - countDownDate;
	
	var iloscDni = Math.floor(czasOdAktualizacjiStrony / (1000 * 60 * 60 * 24));
	var iloscGodzin = Math.floor((czasOdAktualizacjiStrony % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var iloscMinut = Math.floor((czasOdAktualizacjiStrony % (1000 * 60 * 60)) / (1000 * 60));
	var iloscSekund = Math.floor((czasOdAktualizacjiStrony % (1000 * 60)) / 1000);
	
	//console.log(iloscDni, iloscGodzin, iloscMinut, iloscSekund);
	document.getElementById("czasOstatniejAktualizacjiStrony").innerHTML = `Ilość czasu od dodania strony: ${iloscDni} dni ${iloscGodzin} godzin ${iloscMinut} minut ${iloscSekund} sekund`;
	setTimeout("dataOstatniejAktualizacjiStrony()",1000);
	
}