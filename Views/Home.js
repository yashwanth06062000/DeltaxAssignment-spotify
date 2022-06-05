window.addEventListener("DOMContentLoaded", (event) => {
  axios.get("http://localhost:3000/getsongs").then(async (songs2) => {
    const allsongs = document.getElementById("allsongs");
    const songs1 = songs2.data.songs;
    for (let i = 0; i < songs1.length; i++) {
      const song = document.createElement("div");
      song.classList.add("songdiv");
      str1 = "data:image/(png|jpg|jpeg);base64,";
      str2 = songs1[i].coverimage;
      str3 = str1.concat(str2);
      const artists1 = [];
      await axios
        .get(`http://localhost:3000/getsongartists?songid=${songs1[i].id}`)
        .then((artists) => {
          const arr = artists.data.songsartists;

          for (let j = 0; j < arr.length; j++) {
            artists1.push(arr[j][0].artistname);
          }
        });

      song.innerHTML = `
        <img src=${str3} width="80" height="80" class="cover">
          <span class="songname">${songs1[i].songname}</span>
                    <span class="dor">${songs1[i].dateofrelease}</span>
                    ${(function () {
                      var str = "";
                      for (let x = 0; x < artists1.length; x++) {
                        str += `<span>${artists1[x]}</span>`;
                        str += ",";
                      }
                      str= str.slice(0, -1)
                      return str;
                    })()}
                    <select name="rating" id="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                    `;

      allsongs.appendChild(song);
    }
  });
});
