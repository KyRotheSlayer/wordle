document.querySelector(".inputparent div:nth-child("+counter+")").classList.add("animate-highlight");
document.body.addEventListener("keydown", function(event) {
document.querySelector(".inputparent div:nth-child("+counter+")").classList.add("animate-highlight");
document.querySelector(".inputparent div:nth-child("+(counter-1)+")").classList.remove("animate-highlight");
});