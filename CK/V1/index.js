const CX421 = {
    copy: {
        gb: '60-day free returns',
        nl: '60 dagen gratis retourneren',
        de: '60 Tage kostenlose Rückgabe',
        fr: 'Retours gratuits sous 60 jours',
        it: 'Resi gratuiti entro 60 giorni',
        es: '60 días para devoluciones',
        pl: 'Darmowe zwroty w ciągu 60 dni',
        default: '60-day free returns'
    },
    createUSPelem: () => {
        const elem = document.createElement('div');
        elem.setAttribute('class', 'CX421_usp_container');
        const text = CX421.copy[window.__NEXT_DATA__.props.pageProps.initialState.currentStore.target] || CX421.copy.default;
        elem.innerHTML = `<ul class='CX421_usp_container_inner'>
                            <li class='CX421_usp_item'>${text}</li>
                        </ul>`;
        return elem;
    },
    init: () => {
        const USPelem = CX421.createUSPelem();
        optimizely.utils.observeSelector('[data-testid="proceed-to-payment-pvh-button"], [data-testid="place-order-pvh-button"]', target => {
            target.parentElement.insertBefore(USPelem, target.nextElementSibling);
        })
    }
};
CX421.init();