var words = [
    "kolorowanka",
    "jajecznica",
    "kurdupel",
    "ulicznica",
    "trzepaczka",
    "pralka",
    "dzidziuś",
    "piwo",
    "rogal",
    "reumatyzm",
    "pistacja",
    "koalicja",
    "retrospekcja",
    "kosiarka",
    "kombinezon",
    "reaktor",
    "chałwa",
    "iloraz",
    "koronacja",
    "Kruk krukowi oka nie wykole",
    "menstruacja",
    "lobotomia",
    "reorganizacja",
    "marmolada",
    "setnik",
    "parowiec",
    "komu w drogę temu czas",
    "paleontologia",
    "ortodonta",
    "urolog",
    "tapczan",
    "realizacja",
    "szaman"
];

var word = words[Math.floor(Math.random() * words.length)];
word = word.toUpperCase();

var wordLength = word.length;

var wrongLetters = 0;

var hiddenWord = "";

//pętla robi myślniki

for (var i = 0; i < wordLength; i++) {
    if (word.charAt(i) == " ") {
        hiddenWord = hiddenWord + " ";
    } else {
        hiddenWord = hiddenWord + "-";
    }
}

function showWord() {
    document.getElementById('board').innerHTML = hiddenWord;
}

//kiedy w oknie załaduje się strona
window.onload = start;

// zbiór liter

var lettersArray = new Array(35);

lettersArray[0] = "A";
lettersArray[1] = "Ą";
lettersArray[2] = "B";
lettersArray[3] = "C";
lettersArray[4] = "Ć";
lettersArray[5] = "D";
lettersArray[6] = "E";
lettersArray[7] = "Ę";
lettersArray[8] = "F";
lettersArray[9] = "G";
lettersArray[10] = "H";
lettersArray[11] = "I";
lettersArray[12] = "J";
lettersArray[13] = "K";
lettersArray[14] = "L";
lettersArray[15] = "Ł";
lettersArray[16] = "M";
lettersArray[17] = "N";
lettersArray[18] = "Ń";
lettersArray[19] = "O";
lettersArray[20] = "Ó";
lettersArray[21] = "P";
lettersArray[22] = "Q";
lettersArray[23] = "R";
lettersArray[24] = "S";
lettersArray[25] = "Ś";
lettersArray[26] = "T";
lettersArray[27] = "U";
lettersArray[28] = "V";
lettersArray[29] = "W";
lettersArray[30] = "X";
lettersArray[31] = "Y";
lettersArray[32] = "Z";
lettersArray[33] = "Ź";
lettersArray[34] = "Ż";

//rozpoczynamy grę
function start() {

    var content = "";

    for (var i = 0; i <= 34; i++) {

        var element = "letNr" + i;

        content = content + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+lettersArray[i]+'</div>';

        if ((i + 1) % 7 == 0) {
            content = content + '<div style="clear:both;"></div>';
        }
    }

    document.getElementById('alphabet').innerHTML = content;

    showWord();
}

String.prototype.setChar = function(place, character) {
    if(place > this.length - 1) {
        return this.toString();
    } else {
        return this.substr(0, place) + character + this.substr(place + 1);
    }
}

function check(number) {
    
    var acceptLetter = false;

    for (var i = 0; i < wordLength; i++) {
        if (word.charAt(i) == lettersArray[number]) {
            hiddenWord = hiddenWord.setChar(i, lettersArray[number]);
            acceptLetter = true;
        }
    }

    if(acceptLetter == true) {
        var element = "letNr" + number;
        document.getElementById(element).style.background = 'green';
        document.getElementById(element).style.color = '#00C010';
        document.getElementById(element).style.border = '3px solid yellow';
        document.getElementById(element).style.cursor = 'default';
    } else {
        var element = "letNr" + number;
        document.getElementById(element).style.background = 'red';
        document.getElementById(element).style.color = '#C00000';
        document.getElementById(element).style.border = '3px solid salmon';
        document.getElementById(element).style.cursor = 'default';
        document.getElementById(element).setAttribute("onclick",";");

        //skucha
        wrongLetters++;
        var addImg = "img/s" + wrongLetters + ".jpg";
        document.getElementById("hangmachine").innerHTML = '<img src="'+addImg+'" alt="">'
    }


    //wygrana
    if(word == hiddenWord) {
        document.getElementById("alphabet").innerHTML = "Niesamowite!!! Odgadłeś to trudne i niecodzienne hasło! Gratulacje! "+word+'<br /><br /><span class="reset" onclick="location.reload()">Gramy jeszcze raz?</span>'
    }

    //przegrana
    if(wrongLetters >= 11) {
        document.getElementById("alphabet").innerHTML = "Ooooo, jaki smutek :( Przegrałeś i wisisz! Gejm ower!!! "+word+'<br /><br /><span class="reset" onclick="location.reload()">Zagraj jeszcze raz</span>'
    }

    showWord();
}


