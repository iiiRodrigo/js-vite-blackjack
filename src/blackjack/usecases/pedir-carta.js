/**
 *  Esta función me permite tomar una carta. Elimina el ultimo elemento del deck y lo devuelve
 * @param {Array<st ring>} deck Ejemplo: ['3C', '2D', '6H', 'JS']
 * @returns {string} - retorna unacarta
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}