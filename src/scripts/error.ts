// Error class

export default class ErrorForm {
    addErrorClass(inputElement: HTMLElement){
        const element = document.querySelector(`.${inputElement}`)
        let errorElement: any = element?.previousElementSibling; 
            element?.classList.add('errorInput')
            errorElement!.style.visibility = 'visible';   
    }
    
     removeErrorClass(input: string){
        const inputElement: any = document.querySelector(input);
        inputElement?.classList.remove('errorInput');
        inputElement.previousElementSibling.style.visibility = 'hidden';
    }
}

