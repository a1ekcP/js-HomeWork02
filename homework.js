console.table(countries);

/* Домашка
1. Отрендерить таблицу стран. в таблицу должны войти поля: name, capital, region, area
2. добавить поисковик (по примеру с занятия), событие на него
3. по событию искать частичные совпадения введенного текста с полями name, capital, region. выдавать полученные результаты в таблицу
4. если нет результатов - показывать соответствующую строку "не найдено" в результатах поиска
*/
renderCountries = function(countries){
    let htmlStr = countries.reduce(function(acc, el, index){
        return acc + `
                <tr>
                    <td>${index+1}</td>
                    <td>${el.name}</td>
                    <td>${el.capital}</td>
                    <td>${el.region}</td>
                    <td>${el.area}</td>
                </tr>
        `
    }, '')
    document.querySelector('.table tbody').innerHTML = htmlStr || `<tr><td colspan="5" class="text-center">Not Found</td></tr>`;
}
renderCountries(countries);



let searchInput = document.querySelector('#search');

searchInput.onkeyup = function(event){
    let value = event.currentTarget.value.toLowerCase().trim();
    let filteredCountries = countries.filter(function(el) {
        return el.name.toLowerCase().includes(value) || el.capital.toLowerCase().includes(value) || el.region.toLowerCase().includes(value)
    });
    renderCountries(filteredCountries);
}