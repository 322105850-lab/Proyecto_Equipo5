// parte de fher, jugador.js
class Jugador {
  #gamertag;
  #edad;
  #partidasGanadas;

  constructor(gamertag, edad, partidasGanadas) {
    this.#gamertag = gamertag;
    this.setEdad(edad);
    this.#partidasGanadas = partidasGanadas;
  }

  getGamertag() {
    return this.#gamertag;
  }

  getEdad() {
    return this.#edad;
  }

  getPartidasGanadas() {
    return this.#partidasGanadas;
  }

  setEdad(edad) {
    if (edad < 15) {
      throw new Error("No se permiten jugadores menores de 15 años");
    }
    this.#edad = edad;
  }

  calcularMMR() {
    return this.#partidasGanadas * 10;
  }
}

//clase jugador estrategia, ouchet
class JugadorEstrategia extends Jugador {
  #objetivosCumplidos;

  constructor(gamertag, edad, partidasGanadas, objetivosCumplidos) {
    super(gamertag, edad, partidasGanadas);
    this.#objetivosCumplidos = objetivosCumplidos;
  }

  calcularMMR() {
    return this.getPartidasGanadas() * 10 + this.#objetivosCumplidos * 5;
  }
}

//clase de jugador acción :)))
class JugadorAccion extends Jugador {
  #ratioEliminaciones;

  constructor(gamertag, edad, partidasGanadas, ratioEliminaciones) {
    super(gamertag, edad, partidasGanadas);
    this.#ratioEliminaciones = ratioEliminaciones;
  }

  calcularMMR() {
    return this.getPartidasGanadas() * 10 + this.#ratioEliminaciones * 20;
  }
}
//prueba del code
const j1 = new JugadorEstrategia("Pao", 22, 30, 12);
const j2 = new JugadorAccion("Arturo", 19, 25, 2.5);

console.log(j1.getGamertag(), "MMR:", j1.calcularMMR());
console.log(j2.getGamertag(), "MMR:", j2.calcularMMR());