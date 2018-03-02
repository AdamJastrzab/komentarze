
/*
var text = document.getElementById("text");

var komentarze = document.getElementById("komentarze");

function dodaj_komentarz() {
    //alert("abc");
    var nowyKomentarz = document.createElement("li");
    var div = document.createElement("div");
    komentarze.appendChild(nowyKomentarz);
    nowyKomentarz.appendChild(div);
    div.innerHTML = "<img src='obrazek.jpg'>"+"<p>"+text.value+"</p>";
    
}    

var przycisk = document.getElementById("przycisk");
przycisk.addEventListener("click", dodaj_komentarz, false);
*/

var addBtn = document.querySelector(".add-btn");
var textarea = document.getElementById("comment-content");
var list=document.querySelector(".comment-list");
//console.log(list);
addBtn.addEventListener("click", function(){
    var li = document.createElement("li");
    list.appendChild(li);
    li.classList.add("comment");
    li.innerHTML = '<div class="comment-content"><img src="obrazek.jpg" width="40" alt="user avatar"><p><strong>Adam</strong>: ' + textarea.value +'</p></div>'

    

}, false);