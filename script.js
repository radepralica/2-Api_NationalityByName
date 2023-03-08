const sekcija = document.getElementById('sekcija');
const btnPrikazi = document.getElementById('btnPrikazi');
const inpPrikazi = document.getElementById('inpPrikazi');
const table = document.getElementById('tBody');

function renderNationality(data) {
  data.country.forEach((el, i) => {
    countr = data.country[i].country_id;
    el = `
                <tr>
                    <tr>
                        <td>${drz(data.country[i].country_id)}</td>
                        <td>${data.country[i].probability}</td>
                    </tr> 
            </tr>
`;
    table.insertAdjacentHTML('afterbegin', el);
  });
}
function nationality(name) {
  fetch(`https://api.nationalize.io?name=${name}`)
    .then(res => res.json())
    .then(data => {
           return renderNationality(data);
    });
}
btnPrikazi.addEventListener('click', function (e) {
  e.preventDefault();
  table.innerHTML = '';
  const prik=inpPrikazi 
  nationality(prik.value);
  inpPrikazi.value = '';
});
function drz(kod) {
  const rNames = new Intl.DisplayNames(['en'], { type: 'region' });
  const a = rNames.of(kod);
  return a;
}
