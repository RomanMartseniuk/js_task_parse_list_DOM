var r=document.querySelector("ul"),e=Array.from(document.querySelectorAll("li")).sort(function(r,e){return parseInt(e.dataset.salary.slice(1).split(",").join(""))-parseInt(r.dataset.salary.slice(1).split(",").join(""))});r.innerHTML="",e.forEach(function(e){return r.appendChild(e)});
//# sourceMappingURL=index.feb3fbd4.js.map
