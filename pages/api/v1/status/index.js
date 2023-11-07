function status(request, response) {
  response.status(200).json({ chave: "Tudo ok por aqui numero" });
}

export default status;
