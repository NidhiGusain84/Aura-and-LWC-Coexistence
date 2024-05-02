import { LightningElement } from 'lwc';

export default class GenerateMessage extends LightningElement {

    firstName = "";
    lastName = "";

    changeHandler(event) {
        let { name, value } = event.target;
        if (name === "fName") {
            this.firstName = value;
        }if (name === "lName") {
            this.lastName === value;
        }
    }

    clickHandler() {
        let fullName = this.firstName + " " + this.lastName;
        console.log("fullName", fullName);
        let fullNameCustomEvent = new CustomEvent("showmessage", {
            detail:{
                fullName: fullName
            }
        });
        this.dispatchEvent(fullNameCustomEvent);
    }

}