


const btnTestCode = document.querySelector(".btn-test-code")

const codeArea = document.querySelector(".code-area")
const styleArea = document.querySelector(".style-area")
const styleArea2 = document.querySelector(".style-area2")

function isValidHTML(html) {
    // Cria um container temporário
    const container = document.createElement('div');
    container.innerHTML = html;
    // Verifica se o container contém o HTML que foi inserido
    return container.innerHTML === html.trim();
}

btnTestCode.addEventListener("click", () => {
    let showCode = document.querySelector(".output")

if (isValidHTML(codeArea.value)) {
    // Se o HTML for válido, renderize-o
    showCode.innerHTML = codeArea.value;
    showCode.classList.add("d-block")
    showCode.setAttribute("style", styleArea.value)

}else{
    showCode.classList.add("d-block")
    showCode.textContent = "Hum que pena, seu código esté errado mas você pode tentar denovo" + "😉"
    }

})


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then(() => {
        console.log("Service Worker registrado!");
      }).catch((err) => {
        console.log("Erro ao registrar o Service Worker", err);
      });
    });
  }
  