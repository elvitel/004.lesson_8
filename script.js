let birthYear = prompt('Введіть рік народження:');
if (birthYear == null) { 
    alert('Шкода, що Ви не захотіли ввести свою дату народження');
}

let city = prompt('Введіть місто проживання:')?.trim().toLowerCase();
if (city == null) {
    alert('Шкода, що Ви не захотіли ввести своє місто');
}

let sport = prompt('Введіть улюблений вид спорту:')?.trim().toLowerCase();
if (sport == null) {
    alert('Шкода, що Ви не захотіли ввести свій вид спорту');
}

let age;
birthYear = parseInt(birthYear);
if (birthYear > 1900 && birthYear < 2023) {
    age = `Вік: ${2023 - birthYear}`;
} else {
    age = 'Вік: інформація не надана';
}

let capital;
if (city == 'київ') {
    capital = 'Ти живеш у столиці України';
} else if (city == 'вашингтон') {
    capital = 'Ти живеш у столиці США';
} else if (city == 'лондон') {
    capital = 'Ти живеш у слолиці Великобританії';
} else if ((city == '') || (city == null)) {
    capital = 'Місто: інформація не надана';
}
else {
    capital = `Ти живеш у місті ${city}`;
} 

let sportName;
if (sport == 'футбол') {
    sportName = 'Круто! Хочеш стати Андрієм Шевченком?';
} else if (sport == 'легка атлетика') {
    sportName = 'Круто! Хочеш стати Сергієм Бубкою?';
} else if (sport == 'плавання') {
    sportName = 'Круто! Хочеш стати Яною Клочковою?';
} else if ((sport == '') || (sport == null)) {
    sportName = 'Спорт: інформація не надана.';
}
else {
    sportName = 'Круто!';
} 

alert(`\u2022 ${age};
\u2022 ${capital};
\u2022 ${sportName}`);