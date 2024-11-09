function submitData() {
  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    daysWorked: document.getElementById("daysWorked").value,
    totalValue: document.getElementById("totalValue").value,
    workLocation: document.getElementById("workLocation").value,
  };

  fetch("/api/work", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Dados enviados com sucesso!");
      console.log(data);
    })
    .catch((error) => {
      alert("Erro ao enviar os dados.");
      console.error("Error:", error);
    });
}
