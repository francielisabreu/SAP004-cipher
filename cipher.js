const cipher = {
  encode: function (offset, mensagem) {
    let resultEnt = "";
    // loop que verifica cada caractere no texto
    for (let i = 0; i < mensagem.length; i++) {
      let textcript = "";
      let newEntr = 0;
      let textEntr = mensagem[i].charCodeAt();

      if (90 >= textEntr && textEntr >= 65) {
        newEntr = (textEntr - 65 + offset) % 26 + 65;
        textcript = String.fromCharCode(newEntr);

      }
      resultEnt = resultEnt + textcript;
    }

    return resultEnt;
  },

  decode: function (offset, mensagem) {
    let resultEnt = "";

    for (let i = 0; i < mensagem.length; i++) {
      let textcript = "";
      let newEntr = 0;
      let textEntr = mensagem[i].charCodeAt();

      if (90 >= textEntr && textEntr >= 65) {
        newEntr = (textEntr + 65 - offset) % 26 + 65;
        textcript = String.fromCharCode(newEntr);
      }
      resultEnt = resultEnt + textcript;
    }
    return resultEnt;
  }
};

export default cipher;
