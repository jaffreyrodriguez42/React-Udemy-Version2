import React from "react";

function Heading(){

	const d = new Date(); 
	const currentHour = d.getHours();

	 let messageColor = {
	   color: ""
	 }

	 let message;

	 if(currentHour < 12){
	   messageColor.color = "red";
	   message = "Morning";
	 }else if(currentHour < 18){
	   messageColor.color = "green";
	   message = "Afternoon";
	 }else if(currentHour < 24){
	   messageColor.color = "blue";
	   message = "Night";
	 }

	return(
		<h1 className="heading" style={messageColor}>{ "Good " + message + "!!"}</h1>
	); 
}

export default Heading;