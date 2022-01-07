// Menu Mobile
function menuToggle() {
  const btnTarget = event.target;
  const profile = document.querySelector(".js-profile");
  const menu = document.querySelector(".js-menu");

  // Change Icon Button
  if (btnTarget.classList.value == "fas fa-ellipsis-v") {
    btnTarget.classList.remove("fas", "fa-ellipsis-v");
    btnTarget.classList.add("fas", "fa-times");
  } else {
    btnTarget.classList.remove("fas", "fa-times");
    btnTarget.classList.add("fas", "fa-ellipsis-v");
  }

  menu.appendChild(profile);
  menu.classList.toggle("is-open");
}

function searchToggle() {
  const menu = document.querySelector(".js-search");
  menu.classList.toggle("is-visible");
}

function inputColor() {
  const inputColor = document.querySelector(".js-input-color").value;
  const moldColor = document.querySelector(".js-mold");
  const color = "--bg-color: " + inputColor;

  moldColor.setAttribute("style", color);

  console.log(moldColor, inputColor);
}

const linguagem = document.querySelector(".js-linguagem");
const areaDoCodigo = document.querySelector(".js-editor");
const botao = document.querySelector(".js-hljs");

function aplicaHighlight() {
  const codigo = areaDoCodigo.innerText;
  areaDoCodigo.innerHTML = `<code class="hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
  areaDoCodigo.querySelector("code").textContent = codigo;
  hljs.highlightElement(areaDoCodigo.querySelector("code"));
}

if (botao) {
  botao.addEventListener("click", () => {
    aplicaHighlight();
  });
}

const feed = document.querySelector(".js-feed-item");
const slideDown = document.getElementsByClassName("js-slide-down");
const width = feed ? feed.clientWidth - 48 : ''

Array.prototype.filter.call(slideDown, (r) => {
  r.setAttribute('style', 'width: ' + width + 'px')
})
