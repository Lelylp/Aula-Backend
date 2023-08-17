try {
    let resultado = 10/0;
    if (resultado === Infinity) {
        throw 'Sem zero amigao';
    }
    console.log("O resultado é:", resultado);
} catch (error) {
    // console.error("Erro: ", error.message);
    console.error("Erro: ", error);
}
//console.log("O resultado é:", resultado);