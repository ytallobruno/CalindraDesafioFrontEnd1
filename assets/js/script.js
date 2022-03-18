const btn = document.getElementById("btn");
const caixaPesquisa = document.getElementById("pesquisar");
const listaDeProdutos = document.getElementById("listaProdutos");

btn.addEventListener("click", async function () {
  const valor = caixaPesquisa.value;
  if (valor.length > 0) {
    const resposta = await fetch(
      `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${valor}&source=nanook`
    );
    let productsList = await resposta.json();
    products = productsList.products;

    const lista = products.map((item) => `<h4>${item.name}</h4>`).join("");
    listaDeProdutos.classList.add("mostrar");
    listaDeProdutos.innerHTML = lista;
  } else {
    listaDeProdutos.innerHTML = "";
    listaDeProdutos.classList.remove("mostrar");
  }
});