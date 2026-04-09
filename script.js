function calculate() {

    let options = [
        document.getElementById("option1").value,
        document.getElementById("option2").value,
        document.getElementById("option3").value
    ];

    let costs = [];
    let times = [];
    let prefs = [];
    let scores = [];

    // collect values
    for (let i = 1; i <= 3; i++) {
        costs.push(parseFloat(document.getElementById("cost" + i).value) || 0);
        times.push(parseFloat(document.getElementById("time" + i).value) || 0);
        prefs.push(parseFloat(document.getElementById("pref" + i).value) || 0);
    }

    // normalization helpers
    let maxCost = Math.max(...costs);
    let maxTime = Math.max(...times);

    for (let i = 0; i < 3; i++) {

        // normalize to 0–10 scale
        let normCost = maxCost ? (costs[i] / maxCost) * 10 : 0;
        let normTime = maxTime ? (times[i] / maxTime) * 10 : 0;
        let normPref = prefs[i]; // already 1–10

        // weighted score
        let score = (0.3 * (10 - normCost)) + 
                    (0.3 * (10 - normTime)) + 
                    (0.4 * normPref);

        scores.push(score);
    }

    let maxIndex = scores.indexOf(Math.max(...scores));

    if (!options[maxIndex]) {
        document.getElementById("result").innerText = "Please enter options!";
        return;
    }

    document.getElementById("result").innerText =
        "Best Option: " + options[maxIndex];
}
   
