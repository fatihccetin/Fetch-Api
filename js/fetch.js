fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => {
       
        return response.json();
    }
).then(
    responseJson => {
        
        let gridElem = ""; 
        for (let i = 0; i < responseJson.length; i++) {
            if (i === 6) { //ilk altı tanesini aldık 
                break;
            }
            else {
               
                gridElem += `
                        <div class="container-item">
                        <img src="img/ciceksepeti.jpg" alt="item${responseJson[i].id}">
                        <p class="title">${responseJson[i].title}</p>
                        <p class="data">${responseJson[i].body}</p>
                        <button class="btn-k">Kaydet</button>
                        </div>
                        `;
            }
            document.getElementById("grid-contents").innerHTML = gridElem;
        }
        
    }
).catch(err => console.log("Hata: ", err));