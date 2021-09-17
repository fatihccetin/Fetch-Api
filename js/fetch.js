
fetch("https://jsonplaceholder.typicode.com/posts").then(
  response => {

    return response.json();
  }
).then(
  responseJson => {

    let Item = "";
    for (let i = 0; i < responseJson.length; i++) {
      if (i === 6) { //ilk altı tanesini aldık 
        break;
      }
      else {

        Item += `
                        <div class="container-item">
                        <img src="img/ciceksepeti.jpg" alt="item${responseJson[i].id}">
                        <div class="item-body">
                          <p class="title">${responseJson[i].title}</p>
                          
                          <p class="data">${responseJson[i].body}</p>
                        </div>
                        <button class="btn-k">Kaydet</button>
                        </div>
                `;
      }
      document.getElementById("grid-contents").innerHTML = Item;
    }

  }
).catch(err => console.log("Hata var hata .d: ", err));

// search bar filter 

function findpost() {
  var input, filter, cards, container, title, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  container = document.getElementById("grid-contents");
  cards = container.getElementsByClassName("container-item");
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector(".item-body");
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
