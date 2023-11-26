const result = document.querySelector("#result");
const filter = document.querySelector("#filter");
const listItems = [];

async function getData() {
  const response = await fetch("https://randomuser.me/api?results=40");

  const { results } = await res.json();

  //   Clearing the results

  results.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
    
        <img src = "${user.picture.large}" alt="${user.name.first}">

        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;

    result.appendChild(li);
  });
}
