import { z } from "zod";


const FormSchema =  z.object({
    inputBill : z.coerce.number().gt(0, "Only allow number greater than 0"),
    inputPeople: z.coerce.number().gt(0, "Only allow number greater than 0")
})

type Input = z.infer<typeof FormSchema>

function getInputs(): Input{
    const inputB:number = Number(document.querySelector('.bill')!.value);
    const inputP:number = Number(document.querySelector('.people')!.value);
    return  {inputBill: inputB, inputPeople: inputP}
}

function validation(inputs: object){
   const result = FormSchema.safeParse(inputs);
    return result;
}







const btns = document.querySelectorAll('.btn')

btns.forEach((element, index) => {
    element.addEventListener('click', () => {
            
        if(validation(getInputs()).success) {
            const getResult = calcTotal(switchPorcentaje(index), getInputs());
            printHtml(getResult);
            element.classList.add('active');
            
        }else {
            console.log(validation(getInputs()).error.ZodError)
            reset()
        }

     })

});








function printHtml(inputs: array) {
    removeClass();
    const tipAmountElement = document.querySelector('.tip-amount')
    const totalElement = document.querySelector('.total')
    tipAmountElement!.innerHTML = inputs[1].toString();
    totalElement!.innerHTML = inputs[0].toString();
}


function calcTotal(porcentage, inputs){
    let totalTip = ( porcentage/ 100) * inputs.inputBill
    let total = totalTip + inputs.inputBill
    let totalPerson = total / inputs.inputPeople
    let totalTipPerson = totalTip / inputs.inputPeople

    return [totalPerson, totalTipPerson];
}

function reset(){
    removeClass()
    const tipAmountElement = document.querySelector('.tip-amount').innerHTML = "0";
    const totalElement = document.querySelector('.total').innerHTML = "0";

}

function switchPorcentaje(element: number) {
    let porcentage: number;
    switch (element) {
        case 0:
            porcentage = 5;
            break;
        case 1:
            porcentage = 10;
            break;
        case 2:
            porcentage = 15;
            break;
        case 3:
            porcentage = 25;
            break;
        default:
            porcentage = 50;
            break;
    }
    return porcentage;
}


// Error clases
function removeClass() {
    const btns = document.querySelectorAll('.btn')
    btns.forEach(e => e.classList.remove('active'))
}

function addErrorClass(inputElement: string){
    let errorElement = inputElement?.previousElementSibling;
    
    errorElement.style.visibility = 'visible';
}

function removeErrorClass(inputElement: string){
    let errorElement = inputElement?.previousElementSibling;
    errorElement.classList.remove('error');
}