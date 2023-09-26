import ErrorForm from "./error";

export default class Reset {

    removeClass() {
        const btns = document.querySelectorAll('.btn')
        btns.forEach(e => e.classList.remove('active'))
    }

    resetResultTip(){
        this.removeClass()
        document.querySelector('.tip-amount')!.innerHTML = "0";
        document.querySelector('.total')!.innerHTML = "0";
   }

   resetForm(){
   const err = new ErrorForm()
    this.resetResultTip
    this.removeClass
    err.removeErrorClass('.inputPeople') 
    err.removeErrorClass('.inputBill');
    (<HTMLInputElement>document.querySelector('.inputPeople')).value = "";
    (<HTMLInputElement>document.querySelector('.inputBill')).value = "";
    document.querySelector('.custom').value = "";
    }
}