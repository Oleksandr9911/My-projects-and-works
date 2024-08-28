let quarter_hours = 520; 
let percent = 0.7;
let percent_hours = quarter_hours * percent;

let ordered_landing = 0
let ordered_corporate = 0
let ordered_eshop = 1

let hours_landing_page = ordered_landing * 60;
let hours_corporate_site = ordered_corporate * 120;
let hours_internet_shop = ordered_eshop * 200;
let balance_hours = percent_hours - (hours_landing_page + hours_corporate_site + hours_internet_shop);


if (balance_hours < 60) {
    console.log(`На жаль, в цьому кварталі Максим не зможе взяти проєкт українського замовника`)    
} else if(balance_hours >= 60) {
    console.log(`Так! В цьому кварталі у Максима залишається ще ${balance_hours} годин, тож він зможе взяти ще проєкт українського замовника.`)
}
