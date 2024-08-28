let region = 'Germany';
let title;

let service1 = 'Посадкова сторінка';
let service2 = 'Корпоративний сайт';
let service3 = 'Інтернет-магазин';

let hours_landing_page = 60;
let hours_corporate_site = 120;
let hours_internet_shop = 200;
let currency;




switch (region) {
    case 'Ukraine':
        title = 'Україна';
        let hour = 500;
        currency ='грн.'

        hours_landing_page *= hour;
        sum_lp = hours_landing_page;
       
        hours_corporate_site *= hour;
        sum_cs = hours_corporate_site;
        
        hours_internet_shop *= hour;
        sum_is = hours_internet_shop;
        console.log(`Для регіону ${title} ціни на послуги Максима такі: 
        ${service1} — ${sum_lp} ${currency}
        ${service2} — ${sum_cs} ${currency}
        ${service3} — ${sum_is} ${currency}`);
        break;
}

switch (region) {
    case 'Great Britain':
        title = 'Великобританія';
        let hour = 25;
        currency ='£.'

        hours_landing_page *= hour;
        sum_lp = hours_landing_page;
       
        hours_corporate_site *= hour;
        sum_cs = hours_corporate_site;
        
        hours_internet_shop *= hour;
        sum_is = hours_internet_shop;
        console.log(`Для регіону ${title} ціни на послуги Максима такі: 
        ${service1} — ${sum_lp} ${currency}
        ${service2} — ${sum_cs} ${currency}
        ${service3} — ${sum_is} ${currency}`);
        break;
}

switch (region) {
    case 'Germany':
        title = 'Німеччина';
        let hour = 35;
        currency ='€.'

        hours_landing_page *= hour;
        sum_lp = hours_landing_page;
       
        hours_corporate_site *= hour;
        sum_cs = hours_corporate_site;
        
        hours_internet_shop *= hour;
        sum_is = hours_internet_shop;
        console.log(`Для регіону ${title} ціни на послуги Максима такі: 
        ${service1} — ${sum_lp} ${currency}
        ${service2} — ${sum_cs} ${currency}
        ${service3} — ${sum_is} ${currency}`);
        break;
}