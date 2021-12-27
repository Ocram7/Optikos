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

function genreSelect(){
    alert("in function");
    alert(children[1]);
}