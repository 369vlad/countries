let countryImg = document.querySelector('#countryImg');
  let name1 = document.querySelector('#name');
  let population = document.querySelector('#population');
  let language = document.querySelector('#language');
  let capital = document.querySelector('#capital');
  let borders = document.querySelector('#borders');
  let translate = document.querySelector('#translate');
  let input = document.querySelector('#input');
  let btn = document.querySelector('#btn');
  let card = document.querySelector('#card');
  

  btn.addEventListener('click', () => {    
    let query = input.value.toLowerCase();
    getCountryData(query);
    input.value = '';
  }
  );

function getCountryData(countryName) {
  fetch(`https://restcountries.com/v2/name/${countryName}`)
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    //console.log(data);  
    loadCountries(data[0]);  
    //console.log(data[0]);

  })  
  .catch(error => {
    console.log(error);
  })  
}

getCountryData('serbia');



function loadCountries(data) {

    if (data) {
        card.innerHTML = `
        <img id="countryImg" src="${data.flag}" alt="">
        <p>Name: <span id="name">${data.name}</span></p>
        <p>Capital: <span id="capital">${data.capital}</span></p>
        <p>Population: <span id="population">${data.population}</span></p>
        <p>Borders: <span id="borders">${data.borders}</span></p>
        <p>Language: <span id="language">${data.languages[0].nativeName}</span></p>
        <p>Currencies: <span id="currencies">${data.currencies[0].name}</span></p>
        <p>Translate in Japan: <span id="translate">${data.translations['ja']}</span></p>  
  `;
    } else {
        card.innerHTML = `       
        <p>No Data Found</p>  
  `;
    }  
}




