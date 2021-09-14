
let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');
let initObject = {
  method: 'GET', headers: reqHeader,
};

let value = 5;

const options = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  };
  
  axios(options)
    .then(response => {
      console.log(response);
      const postsContainer = document.querySelector('.posts-container');
      
      if (response.status === 200) {
        for(i=0;i<10;i++){
          var item = response.data[i];
          const postWrapper = document.createElement('div');
          const titleEl = document.createElement('p');
          const descriptionEl = document.createElement('p');
          /* const node = document.createTextNode(item.title);
          titleEl.appendChild(node); */
          titleEl.className = 'title';
          descriptionEl.className = 'description';
          titleEl.innerHTML = `<i>${item.title}</i>`;
          descriptionEl.innerHTML = `${item.body}`;
          postWrapper.className = 'post';
          postWrapper.classList.toggle("wrapper-container"); // to toggle class name. If  classname is exist, remove it.
          postWrapper.appendChild(titleEl);
          postWrapper.appendChild(descriptionEl);
          postsContainer.appendChild(postWrapper);
          postsContainer.appendChild(postWrapper);
  
        }
        
      } 
    });