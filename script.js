//your JS code here. If required.
const form=document.querySelector("form");
const root=document.documentElement;

function getCookie(name){
	const cookies=document.cookie.split(";");
	for(let cookie of cookies){
		let [cookieName,cookieValue] = cookie.split("=");

		if(cookieName === name){
			return cookieValue;
		}
	}
	return null;
}

const savedFontSize=getCookie("fontsize");
const savedFontColor=getCookie("fontcolor");

if(savedFontSize){
	root.style.setProperty("--fontSize",savedFontSize);
	document.getElementById("fontsize").value = parseInt(savedFontSize);
}
if(savedFontColor){
	root.style.setProperty("--fontColor",savedFontSize);
	document.getElementById("fontcolor").value = parseInt(savedFontColor);
}



form.addEventListener("click",(e)=>{
	e.preventDefault();
	
	const fontSize=document.getElementById("fontsize").value+ "px";
	const fontColor=document.getElementById("fontcolor").value;

	document.cookie = `fontsize=${fontSize}; path=/; max-age=${30 * 24 * 60 * 60}`;
    document.cookie = `fontcolor=${fontColor}; path=/; max-age=${30 * 24 * 60 * 60}`;

	root.style.setProperty("--fontsize", fontSize);
    root.style.setProperty("--fontcolor", fontColor);
	
})

