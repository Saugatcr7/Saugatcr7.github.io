//const check=alert("The file is linked successsfully!")

const hours = new Date().getHours(); // get the current hour

const isMorning = hours >= 4 && hours < 12; // is it morning?
const isAfternoon = hours >= 12 && hours < 17; // is it afternoon?
const isEvening = hours >= 17 || hours < 4; // is it evening?

const welcome = document.querySelector("#welcome");

if (isMorning) {
  welcome.textContent = "It is Morning";
} else if (isAfternoon) {
  welcome.textContent = "It is Afternoon";
} else if (isEvening) {
  welcome.textContent = "It is Evening";
}
localStorage.setItem(
  "It's a secret to everybody.",
  "I think you should add some basics of React in the ending period of the semester."
);

const urls = [
  "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
].map((url) => {
  new Image().src = url;
  return url;
});

const images = document.querySelectorAll("#carousel img");

let currentImage = 0;
const showImages = () => {
  const offset = currentImage % urls.length;
  images.forEach((image, index) => {
    const imageIndex = (index + offset + urls.length) % urls.length;
    image.src = urls[imageIndex];
  });
};
const previous = document.getElementById("prev");
const next = document.getElementById("next");

previous.addEventListener("click", () => {
  currentImage = currentImage - 1;
  showImages();
});
next.addEventListener("click", () => {
  currentImage = currentImage + 1;
  showImages();
});

setInterval(() => {
  currentImage = currentImage + 1;
  showImages();
}, 3000);
showImages();

const input = document.querySelector("input");
const btn1 = document.getElementById("btn1");
const ul = document.getElementById("todo-list");
const renderTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todo-list")) || [];
  ul.innerHTML=""
  
  if(todos && todos.length>0){
    const listitems=todos.map((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        li.classList.add("todo");
        return li;
      });
      ul.append(...listitems)
  }

  else{
    ul.innerHTML="No todos"
  }

  
};
btn1.addEventListener("click", () => {
    if(input.value!=""){
        const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

        todos.push({ text: input.value, completed: false });
        localStorage.setItem("todo-list", JSON.stringify(todos));
        renderTodos()

    }
    else{
        alert('Add a todo')
    }
    
  input.value=""

});
renderTodos()

const getRandomPokemon= async ()=>{
  const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
  const response= await fetch(url);
  const data=await response.json();
  return data;
}
getRandomPokemon()
const renderPokemon=async(data)=>{
  const div=document.getElementById('cartoon')
  const img = document.createElement('img')
  img.src = data.sprites.front_default
  img.alt = data.name;
  div.append(img)
  return data;
  
}

(async()=>{
  const pokemonObject= await getRandomPokemon();
  renderPokemon(pokemonObject)
})();