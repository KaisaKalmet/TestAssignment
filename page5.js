
const Page5Component = {
    render: () => {
        const question = "Repayment date  *";
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
                    <li class="steps-completed">
                        <div id="stepper3" class="steps-number">3</div>
                        Step three
                    </li>
                    <li class="steps-ongoing steps-selected">
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
                    <h3>${question}
                    <span class="tooltip">
                      <i class="material-icons">help_outline</i>
                          <span class="tooltip-text">No interest will be calculated if you repay the amount of the credit limit you have used during the last month by the 10th day of each month.</span>
                        </span></h3>
                        <div class="form-group">
                            <select class="form-control" id="p5-date">
                                <option value="placeholder" selected>-</option>           
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        <div style="visibility: hidden; margin-left: 10px; margin-top: 10px; color: #B5111A;" id="p5-error">Please select a number</div>
                        </div>
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
        const p5date = document.getElementById("p5-date");
        const p5error = document.getElementById("p5-error");
        const date1 = localStorage.getItem('p5-date');

        if(date1 !== null){
            p5date.selectedIndex = date1;
            button2.classList.remove("disabled")
        }

        button1.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.hash = "/page4";
        });
        button2.addEventListener('click', (event) => {
            event.preventDefault();
            let date = p5date.value;
            let onlyNumb = Boolean(date.match(/^[0-9]*$/));
            if (date.length > 0 && onlyNumb === true) {
                localStorage.setItem('p5-date', date);
                console.log(date)
                window.location.hash = "/page6";
            }
        });
        p5date.addEventListener('input', (event) => {
            //event.preventDefault();
            let date = p5date.value;
            //let onlyNumb = Boolean(date.match(/^[0-9]*$/));
            //if (p5date.value.length > 2 && onlyNumb === true) {
            if (p5date.value !== "placeholder") {
                button2.classList.remove("disabled")
                p5error.style.visibility = "hidden"
            //} else if (name.length === 0 || onlyNumb === false) {
            } else if (p5date.value === "placeholder") {
                p5error.style.visibility = "visible"
                button2.classList.add("disabled")
            }
            let text = p5date.value;
            console.log(text)
        });
    },
    summaryAnsw: () => {}
}

export default Page5Component;