var rodjendan=true;
function run() {
    var dd = 2;
    var mm = 6;
    var yy = 1995;
    function prestupna(a) {
    if(((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0))
    return true;
    else 
    return false;
    }

    var days = new Date();
    var tdays = days.getDate();
    var tmonth = days.getMonth();
    var tyear = days.getFullYear();
    var age = tyear - yy;
    if((mm == (tmonth + 1)) && (dd <= parseInt(tdays))) {
    age = age;
    }
    else {
    if(mm <= (tmonth)) {
    age = age;
    }
    else {
    age = age - 1; 
       }
    }
    if(age == 0)
    age = age;
    document.getElementById('myAge').innerHTML="Godina: " + age+"<br>";
    if(mm <= (tmonth + 1))
    age = age - 1;
    if((mm == (tmonth + 1)) && (dd > parseInt(tdays))) 
    age = age + 1;
    var m;
    var n;
    if (mm == 12) { n = 31 - dd; }
    if (mm == 11) { n = 61 - dd; }   
    if (mm == 10) { n = 92 - dd; }  
    if (mm == 9) { n = 122 - dd; } 
    if (mm == 8) { n = 153 - dd; }   
    if (mm == 7) { n = 184 - dd; }   
    if (mm == 6) { n = 214 - dd; }  
    if (mm == 5) { n = 245 - dd; } 
    if (mm == 4) { n = 275 - dd; } 
    if (mm == 3) { n = 306 - dd; }
    if (mm == 2) { n = 334 - dd; if(prestupna(yy)) n = n + 1; }
    if (mm == 1) { n = 365 - dd; if (prestupna(yy)) n = n + 1; }
    if (tmonth == 1) m = 31;
    if (tmonth == 2) { m = 59;   if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 3) { m = 90;   if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 4) { m = 120;  if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 5) { m = 151;  if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 6) { m = 181;  if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 7) { m = 212;  if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 8) { m = 243;  if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 9) { m = 273;  if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 10) { m = 304; if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 11) { m = 334; if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 12) { m = 365; if (prestupna(tyear)) m = m + 1; }
    var totdays = (parseInt(age) * 365);
    totdays += age / 4;
    totdays = parseInt(totdays) + tdays + m + n + 1;
    document.getElementById('myAge').innerHTML += "Dana: " + totdays +"<br>";
    var months = age * 12;
    months += 12 - parseInt(mm);
    months += tmonth+1;
    document.getElementById('myAge').innerHTML += "Mjeseci: "+ months + "<br>";
    if (tmonth == 1) p = 31 + tdays;
    if (tmonth == 2) { p = 59 + tdays;   if (prestupna(tyear)) m = m + 1; }
    if (tmonth == 3) { p = 90 + tdays;   if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 4) { p = 120 + tdays;  if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 5) { p = 151 + tdays;  if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 6) { p = 181 + tdays;  if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 7) { p = 212 + tdays;  if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 8) { p = 243 + tdays;  if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 9) { p = 273 + tdays;  if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 10) { p = 304 + tdays; if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 11) { p = 334 + tdays; if (prestupna(tyear)) p = p + 1; }
    if (tmonth == 12) { p = 365 + tdays; if (prestupna(tyear)) p = p + 1; }
    var weeks = totdays / 7;
    weeks += " weeks";
    weeks = parseInt(weeks);
    document.getElementById('myAge').innerHTML+="Sedmica: "+ weeks + "<br>";
    var time = new Date();
    var ghour = time.getHours();
    var gmin = time.getMinutes();
    var gsec = time.getSeconds();
    var hour = ((age * 365) + n + p) * 24;
    hour += (parseInt(age / 4) * 24);
    document.getElementById('myAge').innerHTML+="Sati: "+ hour + "<br>";
    var min;
    min = (hour * 60) + gmin;
    document.getElementById('myAge').innerHTML+="Minuta: " + min + "<br>";
    var sec = (min * 60) + gsec;
    document.getElementById('myAge').innerHTML+="Sekundi: "+ sec + "<br>";
    var millisec;
    var gmil;
    gmil = days.getMilliseconds();
    millisec = (sec * 1000) + gmil;
    document.getElementById('myAge').innerHTML+="Milisekundi: "+ millisec + "<br>";
    mm = mm - 1;
    var r;
    if(mm == 0) r = 1;
    if(mm == 1) r = 31;
    if(mm == 2) { r = 59;    if (prestupna(tyear)) m = m + 1; }
    if(mm == 3) { r = 90;    if (prestupna(tyear)) r = r + 1; }
    if(mm == 4) { r = 120;   if (prestupna(tyear)) r = r + 1; }
    if(mm == 5) { r = 151;   if (prestupna(tyear)) r = r + 1; }
    if(mm == 6) { r = 181;   if (prestupna(tyear)) r = r + 1; }
    if(mm == 7) { r = 212;   if (prestupna(tyear)) r = r + 1; }
    if(mm == 8) { r = 243;   if (prestupna(tyear)) r = r + 1; }
    if(mm == 9) { r = 273;   if (prestupna(tyear)) r = r + 1; }
    if(mm == 10) { r = 304;  if (prestupna(tyear)) r = r + 1; }
    if(mm == 11) { r = 334;  if (prestupna(tyear)) r = r + 1; }
    if(mm == 12) { r = 365;  if (prestupna(tyear)) r = r + 1; }
    mm = mm + 1;
    r = parseInt(r) + parseInt(dd);
    if( mm > (tmonth + 1)) {
    var bday = r - m - tdays;
    }
    else {
    if(mm == (tmonth + 1) && (tdays < dd)) {
    var bday = (r - m - tdays);
    }
    else {
    if((prestupna(tyear)) && ((mm > 2) && (dd < 29))) {
    var a = 366;
    }
    else {
    var a = 365; 
    }
    bday = a + (r - m - tdays);
       }
    }
    var nhour = 24-parseInt(ghour);
    var nmin = 60 - parseInt(gmin);
    var nsec = 60 - parseInt(gsec);
    go();
    if(((bday == 366) && (prestupna(yy))) || ((bday == 365) && (!prestupna(yy)))) {
    document.getElementById('myAge').innerHTML+= "<br>Danas je Sinanov rodjendan!";
    if(rodjendan){
    alert("SRETAN RODJENDAN SINANE");
    rodjendan=false;
    }
    setTimeout("run()", 1);
    } else {
    document.getElementById('myAge').innerHTML+= bday-1 + " dana " + nhour + " sati " + nmin + " minuta " + nsec + " sekundi, do tvog rođendana!";
    setTimeout("run()", 1);
    }
    function go() {
    function lyear(a) {
    if(((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0)) return true;
    else return false;
    }
    mm = parseInt(mm);
    dd = parseInt(dd);
    yy = parseInt(yy);
    var m;
    if (mm == 1) n = 31;
    if (mm == 2) n = 59 + 1;
    if (mm == 3) n = 90 + 1;
    if (mm == 4) n = 120 + 1;
    if (mm == 5) n = 151 + 1;
    if (mm == 6) n = 181 + 1;
    if (mm == 7) n = 212 + 1;
    if (mm == 8) n = 243 + 1;
    if (mm == 9) n = 273 + 1;
    if (mm == 10) n = 304 + 1;
    if (mm == 11) n = 334 + 1;
    if (mm == 12) n = 365 + 1;
    if((mm == 1)||(mm == 3)||(mm == 5)||(mm == 7)||(mm == 8)||(mm == 10)||(mm == 12))
    n += 31 + dd;
    else if((mm == 4)||(mm == 6)||(mm == 9)||(mm == 11))
    n += 31 + dd + 1;
    else if(mm == 2) {
    if(lyear(yy)) n += 29 + dd - 3;
    else if(!lyear(yy)) n += 28 + dd - 1;
    }
    var fours = yy / 4;
    var hunds = yy / 100;
    var fhunds = yy / 400;
    var day;
    day = (yy + n + fours - hunds + fhunds) % 7;
    day = parseInt(day)
    switch(day)
    {
    case 1 : document.getElementById('myAge').innerHTML+=" Sinan je rođen u nedelju.<br>"
    break
    case 2 : document.getElementById('myAge').innerHTML+=" Sinan je rođen u ponedjeljak.<br>"
    break
    case 3 : document.getElementById('myAge').innerHTML+=" Sinan je rođen u utorak.<br>"
    break
    case 4 : document.getElementById('myAge').innerHTML+=" Sinan je rođen u srijedu.<br>"
    break
    case 5 : document.getElementById('myAge').innerHTML+=" Sinan je rođen u četvrtak.<br>"
    break
    case 6 : document.getElementById('myAge').innerHTML+=" Sinan je rođen u petak.<br>"
    break
    case 7 : document.getElementById('myAge').innerHTML+=" Sinan je rođen u subotu.<br>"
    break
    case 0 : document.getElementById('myAge').innerHTML+=" Sinan je rođen u subotu.<br>"
    break
       }
    }
}