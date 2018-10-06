let hobbiesList = document.querySelector(".hobbies-list");

for(let index = 0;index < hobbies.length;index++) {
  let li = document.createElement("li");
  li.innerHTML = hobbies[index].activity;
  hobbiesList.appendChild(li);

  if(hobbies[index].favScale === "1") {
    document.querySelector(".fav-hobby").innerHTML = hobbies[index].activity;
  }
  if(hobbies[index].favScale === "5") {
    document.querySelector(".least-favorite-hobby").innerHTML = hobbies[index].activity;
  }
}
