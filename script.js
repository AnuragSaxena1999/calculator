// const btn = document.getElementById("clear")

const val = (result) =>{
    form.disp.value = form.disp.value + result;
}
const calculate = () =>{
    if(form.disp.value === ""){
        alert("please enter some numbers");
    }else{
        form.disp.value = eval(form.disp.value);
    }
};
// 
// btn.addEventListener('onclick' , () => {
//     form.disp.value = "";

// });
const clr = () =>{
    form.disp.value = "";
};