import { z } from "zod";
import  ErrorForm  from "./error";
import Reset from "./reset";
import Calc from "./calc";

const errorForm = new ErrorForm()
const reset = new Reset()
const calc = new Calc()
 
reset.resetForm()

document.querySelector('.btn-reset')?.addEventListener('click', reset.resetForm)
const btns = document.querySelectorAll('.btn')

btns.forEach((element, index) => {
    element.addEventListener('click', () => {
            
        if(validation().success) {
            errorForm.removeErrorClass('.inputPeople') 
            errorForm.removeErrorClass('.inputBill')
            const getResult = calc.calcTotal(calc.switchPorcentaje(index), getInputs());
            printHtml(getResult);
            element.classList.add('active');
            
        }else {
            const inputError = validation().error.issues[0].path[0]
            inputError == 'inputBill' ? errorForm.removeErrorClass('.inputPeople') : errorForm.removeErrorClass('.inputBill')
            errorForm.addErrorClass(inputError)
            reset.resetResultTip()

        }

     })

});


const FormSchema =  z.object({
    inputBill : z.coerce.number().gt(0, "Only allow number greater than 0"),
    inputPeople: z.coerce.number().gt(0, "Only allow number greater than 0")
})

type Input = z.infer<typeof FormSchema>

function getInputs(): Input{
    const inputB:number = Number((<HTMLInputElement>document.querySelector('.inputBill'))!.value);
    const inputP:number = Number((<HTMLInputElement>document.querySelector('.inputPeople'))!.value);
    return  {inputBill: inputB, inputPeople: inputP}
}

function validation(){
   return FormSchema.safeParse(getInputs()); 
}

function printHtml(inputs: Array<number>) {
    reset.removeClass();
    const tipAmountElement = document.querySelector('.tip-amount')
    const totalElement = document.querySelector('.total')
    tipAmountElement!.innerHTML = inputs[1].toFixed(2).toString();
    totalElement!.innerHTML = inputs[0].toFixed(2).toString();
}

let keyPress = z.string().regex(/^[0-9]*$/);
let result = "";

document.querySelector('.custom')?.addEventListener('keydown', (e)=> {   
    
    if(e.key === "Backspace") {
        console.log('backspace')
        result = result.trimEnd();
        result = result.substring(0, result.length - 1);
    }else {
        result += e.key;

        if(keyPress.safeParse(result).success && validation()){
            const getResult = calc.calcTotal(Number(result), getInputs());
                printHtml(getResult);
                console.log(result)
        }else{
            const inputError = validation().error.issues[0].path[0]
            inputError == 'inputBill' ? errorForm.removeErrorClass('.inputPeople') : errorForm.removeErrorClass('.inputBill')
            errorForm.addErrorClass(inputError)
            reset.resetResultTip()
        } 
    } 
})
