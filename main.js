List_of_Bsfs = [];

function submit()

{
var Name1 = document.getElementById("Bsf1").value;

var Name2 = document.getElementById("Bsf2").value;

var Name3 = document.getElementById("Bsf3").value;

var Name4 = document.getElementById("Bsf4").value;

var Name5 = document.getElementById("Bsf5").value;

var Name6 = document.getElementById("Bsf6").value;

var Name7 = document.getElementById("Bsf7").value;

List_of_Bsfs.push(Name1);

List_of_Bsfs.push(Name2);

List_of_Bsfs.push(Name3);

List_of_Bsfs.push(Name4);

List_of_Bsfs.push(Name5);

List_of_Bsfs.push(Name6);

List_of_Bsfs.push(Name7);

console.log(List_of_Bsfs);

document.getElementById("display_name").innerHTML = List_of_Bsfs;
document.getElementById("Submit_button").style.display = "none";
document.getElementById("Sort_button").style.display = "inline-block";
}

function sorting()

{

List_of_Bsfs.sort();
console.log(List_of_Bsfs);
document.getElementById("display_name").innerHTML = List_of_Bsfs;
}