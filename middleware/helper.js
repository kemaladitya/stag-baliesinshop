export const rupiahFormat = (val) => new Intl.NumberFormat("id-ID", {
    style: 'currency', // add Rp
    currency: "IDR",
    maximumSignificantDigits: 3
}).format(val);
