function getResult() {

    let weight = +document.getElementsByClassName("weight")[0].value;
    let height = +document.getElementsByClassName("height")[0].value / 100;
    let male = document.getElementsByClassName("sex-male")[0];
    let wemale = document.getElementsByClassName("sex-wemale")[0];
    let result;
    let category;

    if (weight && height && (male.checked || wemale.checked)) {
        result = weight / Math.pow(height, 2);

        if (male.checked) {
            if (18.5 <= result && result <= 24.9) {
                category = "(Normal)";
            } else if (25 <= result && result <= 29.9) {
                category = "(Overweight)";
            } else if (result > 30) {
                category = "(Obesity)";
            } else {
                category = "(Underweight)";
            }
        } else {
            if (19 <= result && result <= 25.4) {
                category = "(Normal)";
            } else if (25.5 <= result && result <= 27.9) {
                category = "(Overweight)";
            } else if (result > 29) {
                category = "(Obesity)";
            } else {
                category = "(Underweight)";
            }
        }

        document.getElementsByClassName("text__result")[0].innerHTML = "Berat Badan Anda: " + result.toFixed(2) + "<span class='text__category'>"  + category  + "</span>";
    }
}

function cek() {
    let nilai = document.getElementById("Form").nilai.value;
    let result = document.getElementById("tampil");

    if (nilai >= 40 && nilai <= 41.5) {
        result.innerHTML = `Anda Hiperpireksia`;
    }
    else if (nilai >= 37.5 && nilai <= 39.9) {
        result.innerHTML = `Anda Hipertemia`;
    }
    else if (nilai >= 35.9 && nilai <= 37.4) {
        result.innerHTML = `Suhu tubuh Normal`;
    }
    else if (nilai >= 30 && nilai <= 35.8 ) {
        result.innerHTML = `Anda Hipotermia`;
    }
    else {
        result.innerHTML = `Suhu tidak Terdeteksi`;
    }
}