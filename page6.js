const Page6Component = {
    render: () => {
        const question = "Card delivery method *";
        return ` <div class="content">
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
                    <li class="steps-completed">
                        <div id="stepper4" class="steps-number">4</div>
                        Step four
                    </li>
                    <li class="steps-ongoing steps-selected">
                        <div id="stepper5" class="steps-number">5</div>
                        Step five
                    </li>
                    <li>
                        <div id="stepper6" class="steps-number">6</div>
                        Send application
                    </li>
                </ol>
                <div class="steps-responsive">
                    <div class="steps-responsive-text">Step 2</div>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-md-auto">
                   <div class="question-container">
                   <h3>${question}</h3>
                        <form>
                        <fieldset class="radio-group">
                            <div class="radio">
                                <input type="radio" id="radio-1" name="radio-group" />
                            <label for="radio-1">By post</label>
                            </div>
                            <div class="radio">
                                <input type="radio" id="radio-2" name="radio-group" />
                                <label for="radio-2">To branch</label>
                            </div>
                        </fieldset>
                        </form>  
                        </div>
                        <div style="visibility: hidden; margin-left: 10px; margin-top: 10px; color: #B5111A;" id="p6-error">Please enter a number</div>   
                        <div class="button-container">
                            <button class="btn btn-secondary btn-lg" type="button" id="goback"><span class="material-icons-outlined">chevron_left </span> Back</button>
                            <button class="btn btn-primary btn-lg" type="button" id="gonext">Next <span class="material-icons-outlined">chevron_right </span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    },
    attachEvents: () => {
        const button1 = document.getElementById('goback');
        const button2 = document.getElementById('gonext');
        const p6error = document.getElementById("p6-error");
        const radio1 = document.getElementById('radio-1');
        const radio2 = document.getElementById('radio-2');
        const selectedOption = localStorage.getItem('p6-option');

        if (selectedOption !== null) {
            if (selectedOption === "By post") {
                radio1.setAttribute('checked', true);
            } else {
                radio2.setAttribute('checked', true);
            }
            button2.classList.remove("disabled")
        }

        radio1.addEventListener('change', () => {
            localStorage.setItem('p6-option', 'By post');
        });

        radio2.addEventListener('change', () => {
            localStorage.setItem('p6-option', 'To branch');
        });

        button1.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.hash = "/page5";
        });

        button2.addEventListener('click', (event) => {
            event.preventDefault();
            //const selectedOption = localStorage.getItem('p6-option');
            if (selectedOption === 'By post' || selectedOption === 'To branch') {
                window.location.hash = "/page7";
            } else {
                p6error.style.visibility = "visible"
                button2.classList.add("disabled")
            }
        });
        /*        p6name.addEventListener('input', (event) => {
                    //event.preventDefault();
                    if (p6name.value.length > 2 && onlyChar === true) {
                        button2.classList.remove("disabled")
                        p6error.style.visibility = "hidden"
                    } else if (name.length === 0 || onlyChar === false) {
                        p6error.style.visibility = "visible"
                        button2.classList.add("disabled")
                    }
                    let text = p6name.value;
                    console.log(text)
                });*/

    },
    summaryAnsw: () => {}
}

export default Page6Component;