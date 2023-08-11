
const Page4Component = {
    render: () => {
        const question = "Monthly income after taxes *";
        return `
<div class="content">
       <div class="container">  
             <h1>Credit card application</h1>     
            <div class="steps">
                <ol>
                    <li class="steps-completed">          
                        <div id="stepper1" class="steps-number">1</div>
                        Step one
                    </li>
                    <li class="steps-completed">
                        <div id="stepper2" class="steps-number">2</div>
                        Step two
                    </li>
                    <li class="steps-ongoing steps-selected" >
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
                        <input type="text" class="form-control" id="p4-value" placeholder="Enter here" />
                            <div style="visibility: hidden; margin-left: 10px; margin-top: 10px; color: #B5111A;" id="p4-error">Please enter a number</div>
                          </div>
                        <div class="button-container">
                            <button class="btn btn-secondary btn-lg" type="button" id="goback"><span class="material-icons-outlined">chevron_left </span> Back</button>
                            <button class="btn btn-primary btn-lg" type="button" id="gonext">Next <span class="material-icons-outlined">chevron_right </span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    },
    attachEvents: () => {
        const button1 = document.getElementById('goback');
        const button2 = document.getElementById('gonext');
        const p4value = document.getElementById("p4-value");
        const p4error = document.getElementById("p4-error");
        const value2 = localStorage.getItem('p4-value');

        if(value2 !== null){
            p4value.setAttribute('value', value2);
            button2.classList.remove("disabled")
        }

        button1.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Button clicked!');
            window.location.hash = "/page3";
        });
        button2.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Button clicked!');
            let netoValue = p4value.value;
            let onlyNumb = Boolean(netoValue.match(/^[0-9]*$/));
            /*if (name.length === 0 || onlyChar === false) {
                p2error.style.visibility = "visible"
            } else {
                localStorage.setItem('p2-name', name);
                console.log(name)
                //window.location.hash = "/page4";
            }*/
            if (netoValue.length > 2 && onlyNumb === true) {
                localStorage.setItem('p4-value', netoValue);
                console.log(netoValue)
                window.location.hash = "/page5";
            }
        });
        p4value.addEventListener('input', (event) => {
            //event.preventDefault();
            let netoValue = p4value.value;
            let onlyNumb = Boolean(netoValue.match(/^[0-9]*$/));
            if (p4value.value.length > 2 && onlyNumb === true) {
                button2.classList.remove("disabled")
                p4error.style.visibility = "hidden"
            } else if (netoValue.length === 0 || onlyNumb === false) {
                p4error.style.visibility = "visible"
                button2.classList.add("disabled")
            }
            let text = p4value.value;
            console.log(text)
        });
    },
    summaryAnsw: () => {}
}

export default Page4Component;