let deliveryToTheCountry = prompt('Вкажіть країну доставки:');

const CHINA = 'Китай', CHILE = 'Чилі', AUSTRALIA = 'Австралія', INDIA = 'Індія', JAMAICA = 'Ямайка';

const priceChina = 100, priceChile = 250, priceAustralia = 170, priceIndia = 80,priceJamaica = 120;



switch (deliveryToTheCountry) {
    
    case CHINA: let messageChina = `Доставка в ${CHINA} буде коштувати ${priceChina} кредитів`

    console.log(messageChina);break;

    case CHILE: let messageChile = `Доставка в ${CHILE} буде коштувати ${priceChile} кредитів`;

    console.log(messageChile); break;

    case AUSTRALIA: let messageAustralia = `Доставка в ${AUSTRALIA} буде коштувати ${priceAustralia} кредитів`;

    console.log(messageAustralia); break;

    case INDIA: let messageIndia = `Доставка в ${INDIA} буде коштувати ${priceIndia} кредитів`;

    console.log(messageIndia); break;

    case JAMAICA: let messageJamaica = `Доставка в ${JAMAICA} буде коштувати ${priceJamaica} кредитів`;

    console.log(messageJamaica); break;

    default: let unavailable = alert('У вашій країні доставка недоступна'); break;

}
