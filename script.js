const btnel=document.querySelector(".btn");
const jokeel=document.querySelector(".joke");

var url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

btnel.addEventListener("click", getmethod);

async function getmethod(){
    jokeel.classList.remove("fade");
    const data= await fetch(url).then((s)=>s.json());

    if(data){
        console.log(data);
        jokeel.innerHTML=data.joke;
        jokeel.classList.add("fade")
    }

}