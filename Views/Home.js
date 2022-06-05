var token = localStorage.getItem("token");
window.addEventListener("DOMContentLoaded", (event) => {
  axios.get("http://localhost:3000/getsongs",{
    headers: { Authorization: token },
  }).then(async (songs2) => {
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
        .get(`http://localhost:3000/getsongartists?songid=${songs1[i].id}`,{
            headers: { Authorization: token },
          })
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
                        str += `<span class="artists">${artists1[x]}</span>`;
                        str += ",";
                      }
                      str= str.slice(0, -1)
                      return str;
                    })()}
                    <label for="rating" class="ratings">Rating:</label>
                    <select id=${songs1[i].id} class="ratings" name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                    <button class="rating">Submit</button>
                    `;

      allsongs.appendChild(song);
    }
  });
});
const allsongs1=document.getElementById("allsongs")
allsongs1.addEventListener("click",(e)=>{
    const songid1=e.target.previousSibling.previousSibling.id;
    var rate = document.getElementById(songid1);
    var rating = rate.value;
    
    
    console.log(rating,songid1)
    let songratings={
        songid:songid1,
        songrating:rating
    }
    axios
    .post("http://localhost:3000/Addrating",songratings,{
        headers: { Authorization: token },
      })
    .then()
    .catch(err=>console.log(err))


})