{

    const calculateResult = (amount, currency) => {
        const EUR = 4.67
        const USD = 4.16
        const GBP = 5.14

        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "GBP":
                return amount / GBP;
        };
    };

    const updateResoultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");


        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResoultText(amount, result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}