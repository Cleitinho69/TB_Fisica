// funcionalidades da parte de calcular
const btnCalc = document.querySelector('#btnCalc');
const inputs = [...document.querySelectorAll('input')];

inputs.map((el)=>{
    // aqui serve para deixar a label no centro do input
    el.previousElementSibling
    .style.left = el.offsetLeft + 27 + "px";

    el.previousElementSibling.style.top = el.offsetTop - 5 + "px";

    // parte da ação após o click nos inputs
    el.addEventListener('click', () => {
        let label = el.previousElementSibling;
        label.classList.add('active');

        el.clientWidth
    });


    el.addEventListener("focusout",()=>{
        let label = el.previousElementSibling;

        setTimeout(()=>{
            if(el.value == ""){
                label.classList.remove('active');
            }
        },200)
    })
});

// funcionalidades do botão calcular
btnCalc.addEventListener('click', () => {
  let AltGnomun = inputs[1].value;
  let TamSombra = inputs[0].value;
  let IrSolar = inputs[2].value;

  tan = AltGnomun/TamSombra;

  angulo=Math.round(Math.atan(tan) * 180 / Math.PI);

  result = angulo*IrSolar;
  console.log(result)
})