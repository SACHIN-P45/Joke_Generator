var button=document.getElementById("button");
var jokecontent=document.getElementById("jokecontent");
var joke=document.getElementById('joke');

button.onclick=()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(function(response)
    {
        button.textContent="Next";
        joke.textContent="";
        jokecontent.textContent=response.data.setup;
        setTimeout(function(){
            joke.textContent=response.data.punchline;
        },1000);
    })
    .catch(function(error){
        console.log(error);
    });
};