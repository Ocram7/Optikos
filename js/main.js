
/* for when the user hovers over the user icon */
function profile(){
    document.getElementById("settings").style.display="block";
    document.getElementById("myBooks").style.display="block";
}

function endProfile(){
    document.getElementById("settings").style.display = "none";
    document.getElementById("myBooks").style.display = "none"; 
}


/* Changing the search bar from text field to genre dropdown */
function formChange(ele){
    console.log(ele.value);
    if (ele.value == "genreName"){
        document.getElementById("genreSelect").style.display = "inline-block";
        document.getElementById("bookSelect").style.display="none";
    }else{
        document.getElementById("bookSelect").style.display = "inline-block";
        document.getElementById("genreSelect").style.display = "none"; 
    }
}


