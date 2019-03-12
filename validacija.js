function ValidirajIP() {
   
    var ObjekatIP = document.getElementById("username");
   
    var ImePrezime = ObjekatIP.value;
   
    /* ObjekatIP.style.borderColor = "initial"; */
    ObjekatIP.removeAttribute("style");
    var Lokacija = ImePrezime.indexOf(" ");
   
    var Ime = ImePrezime.slice(0,2);
    var Prezime = ImePrezime.slice(Lokacija+1, Lokacija+5);
   
    var regeks = new RegExp("^[A-z ]+$");
    if(!regeks.test(ImePrezime)) {
        alert("Ime i prezime smije sadrzavati samo karaktere!");
        ObjekatIP.style.borderColor = "red";
        return;
    }
   
    if(ImePrezime.length < 5) {
        alert("Ime i prezime moraju biti duzi od 5 karaktera!");
        ObjekatIP.style.borderColor = "red";
        return;
    }

}
