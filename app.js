document.addEventListener("DOMContentLoaded", function () {
    let btnDiv = document.createElement("div");
    let btn = document.createElement("button");    
    btn.innerHTML = "SING!"
    btn.className = "btn";
    btn.id = "btn-id";
    btnDiv.className = "container"
    btnDiv.appendChild(btn)
    document.body.appendChild(btnDiv);

    document.getElementById(btn.id).onclick = function () {
        logFriend();
    }

    let friends = ["Brandon", "Mel", "LL", "Sophie", "David"];

    function logFriend() {
        for (let i = 0; i < friends.length; i++) {
            let friendDiv = document.createElement("div");
            friendDiv.className = "friend"
            let friendName = document.createElement("h3");
            friendName.innerHTML = friends[i];
            document.body.appendChild(friendDiv);
            friendDiv.appendChild(friendName);

            for (let j = 99; j >= 1; j--) {
                let lyrics = document.createElement("p");
                friendDiv.appendChild(lyrics);

                if (j == 2) {
                    lyrics.innerHTML = j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file"
                } else if (j > 2) {
                    lyrics.innerHTML = j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file"
                } else {
                    lyrics.innerHTML = j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!"
                }
            }
        }
    }
})