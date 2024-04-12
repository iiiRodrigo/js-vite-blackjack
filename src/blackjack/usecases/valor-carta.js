/**
 *  Esta función devuelve el valor de la carta
 * @param {String} carta Ejemplo: '3C'
 * @returns {Number} - retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

    if ( !carta ) {
        throw new Error('Es obligatorio enviar una carta');
    }

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}