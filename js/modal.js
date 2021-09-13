


// var alert = document.querySelector("#alertButton");

// alert.click(function(){
//     document.querySelector(".modal").style.display="block";
// });

// function alertFunc(){
//     var a= document.querySelector(".modal").style.display="block";
// };

function alertFunc(){
    document.getElementById('alert').style.display = 'block';
    document.querySelector(".overlay").style.display="block";
};

function closeAlert(){
    document.getElementById('alert').style.display = 'none';
    document.querySelector(".overlay").style.display="none";
}