let quarter_hours = 480; 
let percent = 0.8;
let percent_hours = quarter_hours * percent;
let topic = 'Одяг';

let ordered_landing = 0
let ordered_corporate = 1
let ordered_eshop = 1

let hours_landing_page = ordered_landing * 60;
let hours_corporate_site = ordered_corporate * 120;
let hours_internet_shop = ordered_eshop * 200;
let balance_hours = percent_hours - (hours_landing_page + hours_corporate_site + hours_internet_shop);

switch (topic) {
    case 'Сантехніка':
    case 'Книги':
    case 'Годинники':    

        if (balance_hours < 60 || balance_hours > 60) {
            console.log(`Загальна кількість робочих годин у кварталі — ${quarter_hours}
            Відсоток часу, який Максим забронював для українських проєктів — ${percent_hours}
            Залишок часу на нові проєкти — ${balance_hours}
            
            На жаль, Максим не зможе взяти цей проєкт українського замовника
            
            `)    
        } 
        break;

        case 'Одяг':
        case 'Смартфони':
            
        if (balance_hours >= 60 && quarter_hours == 480) {
            console.log(`Загальна кількість робочих годин у кварталі — ${quarter_hours}
            Відсоток часу, який Максим забронював для українських проєктів — ${percent_hours}
            Залишок часу на нові проєкти — ${balance_hours}
            
            Так! В цьому кварталі Максим зможе взяти цей проєкт українського замовника.
            
            `)    
        } 
        break;
}
