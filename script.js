    // alert ("hello world");

    // variable
var startzeit = 0;

// eine funktion
function setzeStartzeit()
{ // Frage nach der zeit
    // ergebnis: milisekunden seit 1970
    var jetzt = Date.now()
    
    jetzt = jetzt/1000;
    
    //runden
    jetzt = 
    Math.round(jetzt);
    
    startzeit = jetzt;
    }
    
function errechneBesucherdauer() {
    // frage nach der Zeit
    
    var jetzt = Math.round(Date.now()/1000);
    var ergebnis = jetzt - startzeit;
    return ergebnis;
}

function zeigeBesuchsdauer() {
    console.log(errechneBesucherdauer())
}
    
    setzeStartzeit();

setinterval(zeige Besuchsdauer,1000)
    


