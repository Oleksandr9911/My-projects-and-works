let blocks_count;
const message = 'Введіть кількість поверхів:';
let error = false;

do{
    let text = message;

    if(error){
        text = error + "\n\n" + text;
    }

    blocks_count = prompt(text);

    if(blocks_count == '.'){
        break;
    }


    blocks_count -= 0;
    
    if(isNaN(blocks_count)){
        error = 'Ви ввели некоректні дані. Потрібно ввести одне число — кількість поверхів на посадковій сторінці';
        continue;
    }

    if(blocks_count < 4) {
        error = 'Здається, що ваша посадкова сторінка замала! Рекомендована кількість поверхів — від 4!';
        continue;
    }

    if(blocks_count > 12) {
        error = 'Здається, що ваша посадкова сторінка завелика! Рекомендована кількість поверхів — до 12!';
        continue;
    }

    break;

} while(true);

let hours = 7 + 6 + 1 + (blocks_count - 3) * 4;

console.log(`Круто! Цю посадкову сторінку з ${blocks_count} поверхів, Максим розробить за ${hours} годин.`);

