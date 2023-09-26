

export default class Calc {

    calcTotal(porcentage:number, inputs: any){
        let totalTip = ( porcentage/ 100) * inputs.inputBill
        let total = totalTip + inputs.inputBill
        let totalPerson = total / inputs.inputPeople
        let totalTipPerson = totalTip / inputs.inputPeople
    
        return [totalPerson, totalTipPerson];
    }

    switchPorcentaje(element: number) {
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
    
}