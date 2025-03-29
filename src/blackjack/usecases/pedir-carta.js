
/**
 * Esta función me permite tomar una carta
 * @param {Arraya<String>} deck es un areglo de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}