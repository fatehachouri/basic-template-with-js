var arryslide = [
{
title : "Basic Template " ,
content: "It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout . The point of using Lorem Ipsum isthat it has a more - or - lessnormal distribution of letters , asopposed to using  Content here , contenthere , making it look like readable English . Many desktop publishingpackages and   ",
img: " ./imgs/banner2.png"
},
{
    title : "Seconde Template " ,
    content: "It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout . The point of using Lorem Ipsum isthat it has a more - or - lessnormal distribution of letters , asopposed to using  Content here , contenthere , making it look like readable English . Many desktop publishingpackages and   ",
    img: " ./imgs/banner3.jpg"
},
{
    title : "Third Template " ,
    content: "It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout . The point of using Lorem Ipsum isthat it has a more - or - lessnormal distribution of letters , asopposed to using  Content here , contenthere , making it look like readable English . Many desktop publishingpackages and   ",
    img: " ./imgs/banner4.jpg"
},

]  
var myimg=document.getElementById("img");
var mytitle=document.getElementById("basic");
var mycontent=document.getElementById("paragraphe");
var i=0;
function slidshownext(){
      myimg.src=arryslide[i].img;
      mytitle.textContent=arryslide[i].title;
      mycontent.textContent=arryslide[i].content;

      if(i<arryslide.length-1){
          i++;
      }
      else{
          i=0;
      }

}

function slidshowprevieus(){
    myimg.src=arryslide[i].img;
    mytitle.textContent=arryslide[i].title;
    mycontent.textContent=arryslide[i].content;

    if(i>0){
        i--;
    }
    else{
        i=arryslide.length-1;
    }

}