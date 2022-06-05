const form=document.getElementById('Signupdiv')
form.addEventListener('click',(e)=>{
    e.preventDefault();
    

    if(e.target.className=="signupbut"){
        window.location.replace('./signup.html')
    }
    if(e.target.className=="loginbutton"){
        const email=document.getElementById("email").value
        const password=document.getElementById("password").value
       
        const obj={
            email:email,
            password:password
        }
        axios
        .post("http://localhost:3000/login",obj)
        .then((res)=>{
            localStorage.setItem("token",res.data.token);
            window.location.replace('./Home.html')
        })
        .catch(err=>console.log(err))    
    
        }

})