const CX421 = {
    init: () => {
        optimizely.utils.observeSelector('[data-testid="proceed-to-payment-pvh-button"], [data-testid="place-order-pvh-button"]', () => {
            console.log("CTA found");
        })
    }
};
CX421.init();

