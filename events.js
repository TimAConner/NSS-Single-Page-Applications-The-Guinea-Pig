
/*
When any section is clicked the output target text should be "You clicked on the {text of the section} section"
*/
function addSectionListeners() {
    let sectionTags = document.getElementsByTagName("section");

    sectionTags[0].style.fontWeight = "bold";

    sectionTags[sectionTags.length-1].style.fontWeight = "bold";
    sectionTags[sectionTags.length-1].style.fontStyle = "italic";

    for (let i = 0; i < sectionTags.length; i++){
        sectionTags[i].addEventListener('click', function(){
            document.getElementById("output-target").innerHTML = `You clicked on the ${this.innerHTML} section`;
        });
        
    }
}

function changeButtonSize() {
    let sectionTags = document.getElementsByTagName("button");


    for (let i = 0; i < sectionTags.length; i++){
        sectionTags[i].addEventListener('click', function(){
            document.getElementById("output-target").innerHTML = `You clicked on the ${this.innerHTML} section`;
        });
        
    }
}

document.getElementsByTagName("h1")[0].addEventListener('mouseover', function(){
    document.getElementById("output-target").innerHTML = `You moved your mouse over the header`;
});

document.getElementById("add-color").addEventListener("click", function(){
    document.getElementById("guinea-pig").style.color = "red";
});

document.getElementById("add-color").addEventListener("click", function(){
    document.getElementById("guinea-pig").style.color = "red";
});

document.getElementById("make-large").addEventListener("click", function(){
    document.getElementById("guinea-pig").style.fontSize = "3em";
});

document.getElementById("add-border").addEventListener("click", function(){
    document.getElementById("guinea-pig").style.border = "10px solid black";
});

document.getElementById("add-rounding").addEventListener("click", function(){
    document.getElementById("guinea-pig").style.borderRadius = "1em";
});

addSectionListeners();
changeButtonSize();    

