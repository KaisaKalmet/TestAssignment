
const Page2Component = {
    render: () => {
        const question = "First and last name *";
        return `<div class="content">
       <div class="container">
            <h1>Credit card application</h1>
        <div class="steps">
            <ol>
                <li class="steps-ongoing steps-selected">          
                    <div id="stepper1" class="steps-number">1</div>
                    Step one
                </li>
                <li>
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
                <input type="text" class="form-control" id="p2-name" placeholder="Enter here" />
                   <div style="visibility: hidden; margin-left: 10px; margin-top: 10px; color: #B5111A;" id="p2-error">Only letters allowed</div>
                   </div>
                    <div class="button-container">
                        <button class="btn btn-secondary btn-lg" type="button" id="goback"><span class="material-icons-outlined">chevron_left </span> Back</button>
                        <button class="btn btn-primary btn-lg disabled" type="button" id="gonext">Next <span class="material-icons-outlined">chevron_right </span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    },

    attachEvents: () => {
        const button1 = document.getElementById('goback');
        const button2 = document.getElementById('gonext');
        const p2name = document.getElementById("p2-name");
        const p2error = document.getElementById("p2-error");
        const name = localStorage.getItem('p2-name');

        if(name !== null){
            p2name.setAttribute('value', name);
            button2.classList.remove("disabled")
        }

        button1.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.hash = "/";
        });
        button2.addEventListener('click', (event) => {
            event.preventDefault();
            let name = p2name.value;
            let onlyChar = Boolean(name.match(/^[A-Za-z\s]*$/));
            if (name.length > 2 && onlyChar === true) {
                localStorage.setItem('p2-name', name);
                console.log(name)
                window.location.hash = "/page3";
            }
        });
        p2name.addEventListener('input', (event) => {
            //event.preventDefault();
            let name = p2name.value;
            let onlyChar = Boolean(name.match(/^[A-Za-z\s]*$/));
            if (p2name.value.length > 2 && onlyChar === true) {
                button2.classList.remove("disabled")
                p2error.style.visibility = "hidden"
            } else if (name.length === 0 || onlyChar === false) {
                p2error.style.visibility = "visible"
                button2.classList.add("disabled")
            }
            let text = p2name.value;
            console.log(text)
        });
    },
    summaryAnsw: () => {}
}


export default Page2Component;