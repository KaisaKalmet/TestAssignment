
const SummaryComponent = {
    render: () => {
        return `<div class="content">
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
                    <li class="steps-completed">
                        <div id="stepper5" class="steps-number">5</div>
                        Step five
                    </li>
                    <li class="steps-ongoing steps-selected">
                        <div id="stepper6" class="steps-number">6</div>
                        Send application
                    </li>
                </ol>
            </div>      
            <div class="row justify-content-md-center">
                <div class="col-md-auto">
                       <table class="table table-plain">
                            <caption>Summary</caption>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td id="name"></td>
                                </tr>
                                <tr>
                                    <td>Credit limit</td>
                                    <td id="value1"></td>
                                </tr>
                                <tr>
                                    <td>Monthly income after taxes</td>
                                    <td id="value2"></td>
                                </tr>
                                <tr>
                                    <td>Repayment date</td>
                                    <td id="date"></td>
                                </tr>
                                <tr>
                                    <td>Card delivery method</td>
                                    <td id="option"></td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
                    <form>
                    <div class="additional-info">
                        <p><label for="textarea">Please add additional details and comments:</label></p>
                        <textarea id="textarea" name="textarea-box" rows="4" cols="50"></textarea><br>
                        <input type="submit" value="Submit">
                    </div>
                    </form>
                         <form>
                            <fieldset class="checkbox">
                                <legend>Terms and conditions *</legend>
                                <div class="checkbox">
                                    <input type="checkbox" id="terms-checkbox" name="checkbox" />
                                    <label style="color:#72605E;font-size:14px;" for="terms-checkbox">I hereby confirm that the data presented in this application are complete and correct.
                                    I am aware that Swedbank has the legal obligation to verify and specify the data presented in this application.
                                    I am aware that Swedbank has the right to forward the data presented in this application and/or related thereto to third 
                                    parties who are legally entitled to receive this information.</label>
                                </div>
                            </fieldset>
                        </form>
                        <div style="visibility: hidden; margin-left: 10px; margin-top: 10px; color: #B5111A;" id="p7-error">Please mark that you agree with terms and conditions.</div>
                        <div class="button-container">
                            <button class="btn btn-secondary btn-lg" type="button" id="goback"><span class="material-icons-outlined">chevron_left </span> Back</button>
                            <button class="btn btn-primary btn-lg" type="button" id="gonext">Send application <span class="material-icons-outlined">chevron_right </span></button>
                        </div>
                    </div>
                </div>
            </div>`;
    },
    attachEvents: () => {
        const button1 = document.getElementById('goback');
        const button2 = document.getElementById('gonext');
        const checkbox = document.getElementById("terms-checkbox");
        const p7error = document.getElementById("p7-error");

        button1.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.hash = "/page6";
        });
        button2.addEventListener('click', (event) => {
            event.preventDefault();

            if (checkbox.checked) {
                button2.classList.remove("disabled")
                p7error.style.visibility = "hidden"
                localStorage.removeItem('p2-name');
                localStorage.removeItem('p3-value');
                localStorage.removeItem('p4-value');
                localStorage.removeItem('p5-date');
                localStorage.removeItem('p6-option');
                confirm("Thank you for your application.");
                window.location.hash = "/";

            } else {
                p7error.style.visibility = "visible"
                button2.classList.add("disabled")
            }
        });

    },
    summaryAnsw: () => {
        const name = localStorage.getItem('p2-name');
        const nameTd = document.getElementById('name');
        nameTd.innerText = name;

        const value1 = localStorage.getItem('p3-value');
        const value1Td = document.getElementById('value1');
        value1Td.innerText = value1;

        const value2 = localStorage.getItem('p4-value');
        const value2Td = document.getElementById('value2');
        value2Td.innerText = value2;

        const date = localStorage.getItem('p5-date');
        const dateTd = document.getElementById('date');
        dateTd.innerText = date;

        const option = localStorage.getItem('p6-option');
        const optionTd = document.getElementById('option');
        optionTd.innerText = option;

    },
}

export default SummaryComponent;