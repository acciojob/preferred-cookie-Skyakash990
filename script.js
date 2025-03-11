//your JS code here. If required.
const form=document.querySelector("form");
form.addEventListener("click",(e)=>{
	e.preventDefault();
	
	const fontSize=document.getElementById("fontsize").value;
	const fontColor=document.getElementById("fontcolor").value;

	document.cookie = `fontsize=${fontSize}px `;
    document.cookie = `fontcolor=${fontColor}`;
	
})

