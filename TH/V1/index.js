const CX421 = {
    createUSPelem: () => {
        const elem = document.createElement('div');
        elem.innerHTML = `<ul>
                            <li>60-days free returns</li>
                        </ul>`;
        return elem;
    },
    init: () => {
        const USPelem = CX421.createUSPelem();
        optimizely.utils.observeSelector('[data-testid="proceed-to-payment-pvh-button"], [data-testid="place-order-pvh-button"]', target => {
            console.log("CTA found");
            target.parentElement.insertBefore(USPelem, target.nextElementSibling);
        })
    }
};
CX421.init();