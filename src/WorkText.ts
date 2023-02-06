/* eslint-disable */
interface TextStructure {
    title: string;
    text: string;
    imgPath: string;
}

class WorkTexts implements TextStructure
{
	title: string;
	text: string;
	imgPath: string;

	constructor(title, text, imgPath)
	{
		this.title = title;
		this.text = text;
		this.imgPath = imgPath; 
	}

}

let workDetails = new Map();
let structureConsultancyText : string;
structureConsultancyText = "Be it designing and implementing your new home with world-class safety standards or just confirming the stability of your current Home. We do everything."

let valuationText : string;
valuationText = "Need to valuate your immobile assets. We do that too!"

let structureTextObj = new WorkTexts("Structure desinging and consultancy", structureConsultancyText, '../');
let valuationTextObj = new WorkTexts("Valuation", valuationText, null);

workDetails.set("StrucutreDetails", structureTextObj);
workDetails.set("Valuation", valuationTextObj);
console.log(workDetails.get("key1")); 

export {workDetails};