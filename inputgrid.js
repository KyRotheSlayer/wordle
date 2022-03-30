let div = document.createElement('div');
    div.classList.add("container","mx-auto");
        let div2 = document.createElement('div');
            div2.classList.add("grid", "grid-cols-6", "gap-4", "text-center", "grid-rows-6","mywidth", "mx-auto", "border-4", "gap-x-5", "gap-y-5", "mt-36", "border-none");
            for (let i =0;i<36;i++){
                let div3 = document.createElement('div');
                    div3.classList.add("bg-blue-300", "border-2", "border-gray-800", "h-16", "w-16");
                    div3.textContent=i+1;
                    div2.appendChild(div3);
            }
        div.appendChild(div2);
document.body.appendChild(div);
