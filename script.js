const form = document.getElementById("form-contato");
const tbody = document.querySelector("table tbody");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  const linha = document.createElement("tr");
  const colunaNome = document.createElement("td");
  colunaNome.textContent = nome;
  const colunaTelefone = document.createElement("td");
  colunaTelefone.textContent = telefone;

  linha.appendChild(colunaNome);
  linha.appendChild(colunaTelefone);

  tbody.appendChild(linha);

  form.reset();
});

const numeroFormatado = (event) => {
  let input = event.target;
  input.value = mascara(input.value);
};

const mascara = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
