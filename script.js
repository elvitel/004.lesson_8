let birthYear = prompt('Введіть рік народження:');
if (birthYear == null) {
    alert('Шкода, що Ви не захотіли ввести свою дату народження');
} 

let city = prompt('Введіть місто проживання:');
if (city == null) {
    alert('Шкода, що Ви не захотіли ввести своє місто');
}

let sport = prompt('Введіть улюблений вид спорту:');
if (sport == null) {
    alert('Шкода, що Ви не захотіли ввести свій вид спорту');
}

let age = !birthYear ? 'Вік: інформація не надана' : `Вік: ${2023 - birthYear}`;

let capital;
if (city == 'Київ') {
    capital = 'Ти живеш у столиці України';
} else if (city == 'Вашингтон') {
    capital = 'Ти живеш у столиці США';
} else if (city == 'Лондон') {
    capital = 'Ти живеш у слолиці Великобританії';
} else if ((city == '') || (city == null)) {
    capital = 'Місто: інформація не надана';
}
else {
    capital = `Ти живеш у місті ${city}`;
} 

let sportName;
switch (sport) {
    case 'футбол': sportName = 'Круто! Хочеш стати Андрієм Шевченком?'; break;
    case 'легка атлетика': sportName = 'Круто! Хочеш стати Сергієм Бубкою?'; break;
    case 'плавання': sportName = 'Круто! Хочеш стати Яною Клочковою?'; break;
    case '': 
    case null:
        sportName = 'Спорт: інформація не надана.'; break;
    default: sportName = 'Круто!'; 
}

alert(`\u2022 ${age};
\u2022 ${capital};
\u2022 ${sportName}`);