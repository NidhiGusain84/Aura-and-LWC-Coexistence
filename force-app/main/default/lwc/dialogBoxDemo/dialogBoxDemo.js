import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningConfirm from 'lightning/confirm';
import LightningPrompt from 'lightning/prompt';

export default class DialogBoxDemo extends LightningElement {

    async alertHandler() {
        await LightningAlert.open({
            message: 'This is the alert message',
            theme: 'error',
            label: 'Error!',
        });
    }

    async confirmHandler() {
        const confirmResult = await LightningConfirm.open({
            message: 'This is the confirm message',
            variant: 'header',
            label: 'Are you sure?',
            theme: "success"
        });
        console.log("confirmResult", confirmResult);
    }

    promptHandler() {
        LightningPrompt.open({
            message: 'Enter your favourite color',
            label: 'Please Respond',
        }).then((result) => {
            //Prompt has been closed
            //result is input text if OK clicked
            //and null if cancel was clicked
            console.log("result", result);
        });
    }

}