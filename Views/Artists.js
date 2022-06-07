const submit = document.getElementById("submitbutton");
var token = localStorage.getItem("token");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const ArtistName = document.getElementById("title").value;
  const dob = document.getElementById("dob").value;
  const bio = document.getElementById("bio").value;
  let Artist = {
    artistname:ArtistName,
    dateofbirth: dob,
    bio: bio,
  };
  console.log("in frontend",Artist)
  axios.post("http://localhost:3000/addartists",Artist,{
    headers: { Authorization: token },
  }).then(() => {
    document.getElementById("title").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("bio").value = "";
    window.location.replace('./Home.html')
  });
});
