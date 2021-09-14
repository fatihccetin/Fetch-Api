// const from= ducument.querySelector("form").elements;
// console.log(form);

function getPost(){
    document.getElementById("alert").style.display = 'block';
    document.querySelector(".overlay").style.display="block";

    const company=document.getElementById('company').value,
          firstname = document.getElementById('firstname').value,
          lastname = document.getElementById('lastname').value,
          email = document.getElementById('email').value,
          title = document.getElementById('title').value,
          phone = document.getElementById('phone').value;
    var data = {
        company:company,
        firstname:firstname,
        lastname:lastname,
        email:email,
        title:title,
        phone:phone,
    };
    document.querySelector(".label-company").innerHTML=`${data.company}`;
    document.querySelector(".label-firstname").innerHTML=`${data.firstname}`;
    document.querySelector(".label-lastname").innerHTML=`${data.lastname}`;
    document.querySelector(".label-email").innerHTML=`${data.email}`;
    document.querySelector(".label-title").innerHTML=`${data.title}`;
    document.querySelector(".label-phone").innerHTML=`${data.phone}`;
};

function closeAlert(){
    document.getElementById('alert').style.display = 'none';
    document.querySelector(".overlay").style.display="none";
}



