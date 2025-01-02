const CX421 = {
    copy: {
        gb: '60-day free returns',
        nl: 'Gratis retourneren 60 dagen',
        de: '60 Tage kostenloses Rückgaberecht',
        fr: 'Retours gratuits pendant 60 jours',
        it: 'Reso gratuito entro 60 giorni',
        es: 'Devoluciones gratuitas de 60 días',
        pl: '60 dni na bezpłatny zwrot',
        default: '60-day free returns'
    },
    createUSPelem: () => {
        const elem = document.createElement('div');
        const text = CX421.copy[window.__NEXT_DATA__.props.pageProps.initialState.currentStore.target] || CX421.copy.default;
        elem.innerHTML = `<ul>
                            <li>${text}</li>
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