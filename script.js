function updateClock() {
    const now = new Date();

    document.getElementById("date").innerText = now.toDateString();
    document.getElementById("hour").innerText = now.getHours();
    document.getElementById("minute").innerText = now.getMinutes();
    document.getElementById("seconds").innerText = now.getSeconds();
    document.getElementById(
        "timezone"
    ).innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;

    setTimeout(updateClock, 1000);
}

updateClock();



document.addEventListener(
    "keypress",
    (function () {
        let typedChars = "";
        const secretWord = "backwards";

        return function (e) {
            typedChars += e.key;
            if (typedChars.length > secretWord.length) {
                typedChars = typedChars.substr(1);
            }

            if (typedChars === secretWord) {
                document.body.classList.toggle("text-inverted");
                typedChars = "";
            }
        };
    })()
);
