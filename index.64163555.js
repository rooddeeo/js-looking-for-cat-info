!function(){function n(n,e){return fetch("".concat(n,"images/search?breed_ids=").concat(e)).then((function(n){if(!n.ok)throw new Error("Ошибка загрузки данных: ".concat(n.status));return n.json()}))}var e,t,o,c="https://api.thecatapi.com/v1/";(e=c,t="live_LdyZZAkvOUOZW3p4VB6sUES1xXuWB4URiEdzXmtox4uhzgcwlKHnYfmIPsy30pkJ",o={"x-api-key":"".concat(t)},fetch("".concat(e,"breeds?api_key=").concat(t),{headers:o}).then((function(n){if(!n.ok)throw new Error("Ошибка загрузки данных: ".concat(n.status));return n.json()}))).then((function(n){console.log(n);var e=document.querySelector(".breed-select"),t=n.map((function(n){return"<option value='".concat(n.id,"'>").concat(n.name,"</option>")})).join("");e.insertAdjacentHTML("beforeend",t)})).catch((function(n){return console.log(n)})),document.querySelector(".breed-select").addEventListener("change",(function(e){var t=e.target.value;console.log(t),n(c,t).then((function(n){console.log(n);var e=document.querySelector(".cat-info"),t=n.map((function(n){return"".concat(n.name,", ").concat(n.description,", ").concat(n.temperament)})).join("");e.insertAdjacentHTML("beforeend",t)})).catch((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.64163555.js.map
