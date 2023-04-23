const display = document.querySelector("#display")
const button = document.querySelectorAll("button")
button.forEach((item)=>{
           item.onclick = () => {
               if(item.id == 'clear'){
                              display.innerText = "";
               }
               else if(item.id == "backspace"){
                              let string = display.innerText.toString();
                              display.innerText= string.substr(0, string.length - 1);

               }
               else if (display.innerText!="" && item.id == "equal"){
                display.innerText = eval(display.innerText);
               }
               else if (display.innerText == "" && item.id == "equal"){
                display.innerText = "Empty!";
                setTimeout(()=> (display.innerText = ""), 2000);
               }
               else{
                display.innerText += item.id;
               }
           };
});

const themetogglebtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".dark");
const toggleicon = document.querySelector(".toggle-icon");
let isDark = true;
themetogglebtn.onclick = () => {
    calculator.classList.toggle("dark");
    themetogglebtn.classList.toggle("active");
    isDark = !isDark;
};