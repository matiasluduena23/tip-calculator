import { z } from "zod";

const FormSchema =  z.object({
    inputBill : z.number().gt(0, "Only allow number greater than 0"),
    inputPeople: z.number().optional(),
    tipAmountElement : z.string().optional(),
    totalElement : z.string().optional()
})

const result = FormSchema.safeParse({inputBill: Number(document.querySelector('.bill').value)})
if(result.success){
    console.log(result)
}else{
    const error =result.error.flatten()
    console.log(error.fieldErrors.inputBill[0])
}

// const inputBill = document.querySelector('.bill').value
// const inputPeople = document.querySelector('.people').value
// const tipAmountElement = document.querySelector('.tip-amount')
// const totalElement = document.querySelector('.total')



// const btns = document.querySelectorAll('.btn')

// btns.forEach((element, index) => {
//     element.addEventListener('click', () => {
//        const porcentage = switchPorcentaje(index)
//        printHtml(porcentage)
//        removeClass(btns)
//         element.classList.add('active')
//      })

// });


// function printHtml(porcentage) {
//     let totalTip = ( porcentage/ 100) * Number(inputBill)
//     let total = totalTip + Number(inputBill)
//     let totalPerson = total / Number(inputPeople)
//     let totalTipPerson = totalTip / Number(inputPeople)

//     tipAmountElement.innerHTML = totalTipPerson.toString();
//     totalElement.innerHTML = totalPerson.toString();
// }


// function switchPorcentaje(element) {
//     let porcentage;
//     switch (element) {
//         case 0:
//             porcentage = 5;
//             break;
//         case 1:
//             porcentage = 10;
//             break;
//         case 2:
//             porcentage = 15;
//             break;
//         case 3:
//             porcentage = 25;
//             break;
//         default:
//             porcentage = 50;
//             break;
//     }
//     return Number(porcentage);
// }

// function removeClass(btns) {
//     btns.forEach(e => e.classList.remove('active'))
// }