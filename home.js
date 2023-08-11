
const HomeComponent = {
    render: () => {
        return `
    <div class="content">
       <div class="container">
             <h1>Gold revolving credit card</h1>
            <div class="text-container">
                <div class="row justify-content-md-center">
                    <div class="col-md-auto">
                        <h2>For your shopping, traveling and everyday needs</h2>
                        <div class="points">
                            <ul>
                            <li>180-day purchase insurance</li>
                            <li>40-days interest-free period</li>
                            <li>No commission fees for worldwide cash withdrawals up to 500 EUR per month.*</li>
                            <li>Travel insurance for you and your family.</li>
                            </ul>
                        </div>
                            <p style="color:#72605E;font-size:14px;"> *When withdrawing cash from another bank's ATM, a service fee may be added, which is determined by the ATM operator.</p>
                    </div>
                </div>
            </div>
                <div class="button-container">
                <button class="btn btn-primary btn-lg " type="button" id="gotop2">Apply <span class="material-icons-outlined">chevron_right </span></button>
       </div>
    </div>
    `;
    },

attachEvents: () => {
    const button = document.getElementById('gotop2');

    button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Button clicked!');
        window.location.hash = "/page2";
        });
    },
    summaryAnsw: () => {}
}

export default HomeComponent;