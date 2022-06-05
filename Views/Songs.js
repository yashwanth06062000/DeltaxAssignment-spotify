const submit = document.getElementById("submitbutton");

let base64String = "";

function imageUploaded() {
  var file = document.querySelector("input[type=file]")["files"][0];

  var reader = new FileReader();
  console.log("next");

  reader.onload = function () {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

    imageBase64Stringsep = base64String;
  };
  reader.readAsDataURL(file);
}

document.getElementById("artists").multiple = true;
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const songname = document.getElementById("title").value;
  const dor = document.getElementById("dor").value;

  const artists = [];
  for (var option of document.getElementById("artists").options) {
    if (option.selected) {
      artists.push(option.value);
    }
  }

  let Song = {
    songname: songname,
    dor: dor,
    cover: base64String,
    artists: artists,
  };

  axios.post("http://localhost:3000/addsong",Song)
  .then((res)=>{
    alert(res.data.message)
  })
  .catch(err=>{alert(err.data.message)})
});

window.addEventListener("DOMContentLoaded", (event) => {
  axios.get("http://localhost:3000/getartists").then((artists) => {
    const checkbox = document.getElementById("artists");
    const artist = artists.data.results;
    for (let i = 0; i < artist.length; i++) {
      const art = document.createElement("option");
      art.value = artist[i].artistname;
      art.innerHTML = artist[i].artistname;
      checkbox.appendChild(art);
    }
  });
});
