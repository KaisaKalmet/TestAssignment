
const Page3Component = {
    render: () => {
        const question = "Credit limit *";
        return `<div class="content">
       <div class="container">
             <h1>Credit card application</h1>
        <div class="steps">
            <ol>
                <li class="steps-completed">          
                    <div id="stepper1" class="steps-number">1</div>
                    Step one
                </li>
                <li class="steps-ongoing steps-selected">
                    <div id="stepper2" class="steps-number">2</div>
                    Step two
                </li>
                <li>
                    <div id="stepper3" class="steps-number">3</div>
                    Step three
                </li>
                <li>
                    <div id="stepper4" class="steps-number">4</div>
                    Step four
                </li>
                <li>
                    <div id="stepper5" class="steps-number">5</div>
                    Step five
                </li>
                <li>
                    <div id="stepper6" class="steps-number">6</div>
                    Send application
                </li>
            </ol>

        </div>
        <div class="row justify-content-md-center">
            <div class="col-md-auto">
               <div class="question-container">
                <h3>${question}</h3>
                <input type="text" class="form-control" id="p3-value" placeholder="Enter here" />
                   <div style="visibility: hidden; margin-left: 10px; margin-top: 10px; color: #B5111A;" id="p3-error">Please enter a number</div>
                   </div>
                    <div class="button-container">
                        <button class="btn btn-secondary btn-lg" type="button" id="goback"><span class="material-icons-outlined">chevron_left </span> Back</button>
                        <button class="btn btn-primary btn-lg disabled" type="button" id="gonext">Next <span class="material-icons-outlined">chevron_right </span></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>`;
    },
    attachEvents: () => {
        const button1 = document.getElementById('goback');
        const button2 = document.getElementById('gonext');
        const p3value = document.getElementById("p3-value");
        const p3error = document.getElementById("p3-error");
        const value1 = localStorage.getItem('p3-value');

        if(value1 !== null){
            p3value.setAttribute('value', value1);
            button2.classList.remove("disabled")
        }

        button1.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.hash = "/page2";
        });
        button2.addEventListener('click', (event) => {
            event.preventDefault();
            let value = p3value.value;
            let onlyNumb = Boolean(value.match(/^[0-9]*$/));
            if (value > 999 && value < 20001 && onlyNumb === true) {
                localStorage.setItem('p3-value', value);
                window.location.hash = "/page4";
            }
        });
        p3value.addEventListener('input', (event) => {
            //event.preventDefault();
            let value = p3value.value;
            let onlyNumb = Boolean(value.match(/^[0-9]*$/));
            if (value > 999 && value < 20001 && onlyNumb === true) {
                button2.classList.remove("disabled")
                p3error.style.visibility = "hidden"
            } else if (value.length === 0 || onlyNumb === false) {
                p3error.style.visibility = "visible"
                button2.classList.add("disabled")
            }
            let text = p3value.value;
            console.log(text)
        });
    },
    summaryAnsw: () => {}
}


export default Page3Component;