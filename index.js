const resultP = document.getElementById('result');

function difference() {
    const bDay = document.getElementById('birthday')
    const birthday = bDay.value;
    const today = new Date(); 
    const birthdayParse = new Date(Date.parse(birthday));
    const currentYear = today.getFullYear();
    const newB = new Date(currentYear, birthdayParse.getMonth(), birthdayParse.getDate());
    const diff = Math.abs(newB - today);
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (diffDays >= 5) {
        resultP.textContent = `До дня рождения осталось ${diffDays} дней`;
    }
    else if (diffDays % 10 < 5 && diffDays > 1) {
        resultP.textContent = `До дня рождения осталось ${diffDays} дня`;
    }
    else if (diffDays % 10 == 1) {
        resultP.textContent = `До дня рождения осталось ${diffDays} день`;
    }
}