!function(){function e(e,n,t){var o={"x-api-key":t};return fetch("".concat(e,"images/search?breed_ids=").concat(n,"&api_key=").concat(t),{headers:o}).then((function(e){if(!e.ok)throw new Error("Ошибка загрузки данных: ".concat(e.status));return e.json()}))}var n,t,o="https://api.thecatapi.com/v1/",c="live_LdyZZAkvOUOZW3p4VB6sUES1xXuWB4URiEdzXmtox4uhzgcwlKHnYfmIPsy30pkJ";(n=o,t=c,fetch("".concat(n,"breeds?api_key=").concat(t)).then((function(e){if(!e.ok)throw new Error("Ошибка загрузки данных: ".concat(e.status));return e.json()}))).then((function(e){console.log(e);var n=document.querySelector(".breed-select"),t=e.map((function(e){return"<option value='".concat(e.id,"'>").concat(e.name,"</option>")})).join("");n.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e)})),document.querySelector(".breed-select").addEventListener("change",(function(n){var t=n.target.value;console.log(t),e(o,t,c).then((function(e){console.log(e);var n=document.querySelector(".cat-info"),t=e.map((function(e){return"".concat(e.name,", ").concat(e.description,", ").concat(e.temperament)})).join("");n.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=index.66a785fc.js.map
