//Navigationsleiste erzeugen
let div = document.createElement('div');
div.classList.add("w-screen", "m-0", "bg-gray-800" , "shadow-lg","pb-3", "pt-2", "text-center");

// Hamburger Menu erzeugen
let a = document.createElement('a');
a.classList.add("space-y-2", "float-left", "ml-4", "mt-3","hover:bg-gray-700","hover:border-gray-700","closedBar","z-20","sticky");
a.setAttribute("onclick", "openSidebar()");
let span1 = document.createElement('span');
span1.classList.add("block","w-8" ,"h-1", "bg-blue-300");
let span2 = document.createElement('span');
span2.classList.add("block","w-8" ,"h-1", "bg-blue-300");
let span3 = document.createElement('span');
span3.classList.add("block","w-8" ,"h-1", "bg-blue-300");
a.appendChild(span1);
a.appendChild(span2);
a.appendChild(span3);
div.appendChild(a);

//Sidebar erzeugen
function openSidebar() {
	let sidebar = document.createElement('div');
	sidebar.classList.add("w-44", "h-screen", "bg-gray-800", "shadow-lg", "text-center","absolute","z-10","top-0","duration-300");
	document.body.appendChild(sidebar);
	sidebar.animate([
		{width: '0%',},
		{width: '176px',}
		],{
		duration: 200,
		easing: 'ease-in-out',
		});
	a.classList.replace("closedBar","openBar");
}

// Überschrift erzeugen
let h1 = document.createElement('h1');
h1.classList.add("text-5xl", "text-blue-300", "mr-12");
h1.textContent="Wordle";
div.appendChild(h1);
document.body.appendChild(div);

// Spielfeld erzeugen
let div4 = document.createElement('div');
div4.classList.add("container","mx-auto");
let div2 = document.createElement('div');
div2.classList.add("grid","flex", "grid-cols-6", "gap-2", "text-center", "grid-rows-6","w-[26rem]", "mx-auto", "border-4", "mt-40", "border-none","inputparent");
for (let i =0;i<36;i++){
	let div3 = document.createElement('div');
	div3.classList.add("bg-blue-300", "border-2","m-auto", "border-gray-800", "h-[4rem]", "w-[4rem]","font-serif","align-middle");
	let h1 = document.createElement('h1');
	h1.classList.add("text-gray-800", "uppercase", "text-4xl","subpixel-antialiased","h-[3.75rem]", "w-[3.75rem]","align-middle","leading-relaxed");
	div3.appendChild(h1);
	div2.appendChild(div3);

}
div4.appendChild(div2);
document.body.appendChild(div4);
