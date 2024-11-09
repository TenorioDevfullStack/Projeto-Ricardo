function submitData() {
  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    daysWorked: document.getElementById("daysWorked").value,
    totalValue: document.getElementById("totalValue").value,
    workLocation: document.getElementById("workLocation").value,
  };

  // Substitua pela URL do seu Web App do Google Apps Script
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwnCnfNdEgqUOyhMraals9aXoNxSUxHEPz16LwJSt4SHtvbFLCs7sjJ23PvckmoIsak/exec"; // URL real do seu script

  // Envia os dados para o Google Apps Script via POST
  fetch(scriptUrl, {
    method: "POST",
    body: new URLSearchParams({
      name: data.name,
      phone: data.phone,
      address: data.address,
      daysWorked: data.daysWorked,
      totalValue: data.totalValue,
      workLocation: data.workLocation,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Falha na resposta do servidor");
      }
      return response.text(); // Recebe a resposta do servidor como texto
    })
    .then((data) => {
      alert("Dados enviados com sucesso!");
      console.log("Resposta do servidor:", data);
    })
    .catch((error) => {
      alert("Erro ao enviar os dados.");
      console.error("Erro:", error);
    });
}
