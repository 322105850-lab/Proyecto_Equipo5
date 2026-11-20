// parte Marquez
import { Jugador } from './Jugador.js';

export class JugadorAccion extends Jugador {
    constructor(gamertag, edad, partidasGanadas, ratio) {

        super(gamertag, edad, partidasGanadas);
        this.ratio = ratio;
    }

        calcularMMR() {
        return (10 * this.getpartidasGanadas) + Number(this.ratio);
        }
}