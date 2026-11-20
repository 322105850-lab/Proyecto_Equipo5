export class Jugador {
  #gamertag;
  #edad;
  #partidasGanadas;
  constructor(gamertag, edad, partidasGanadas) {
    this.#gamertag = gamertag;
    this.setEdad(edad);
    this.setPartidasGanadas(partidasGanadas);
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
    if (isNaN(edad) || edad < 15) {
      throw new Error("La edad mínima es de 15 años");
    }
    this.#edad = edad;
  }

  setPartidasGanadas(partidasGanadas) {
    if (isNaN(partidasGanadas) || partidasGanadas < 0) {
      throw new Error("Las partidas ganadas no pueden ser negativas");
    }
    this.#partidasGanadas = partidasGanadas;
  }
  registrarVictoria() {
    this.#partidasGanadas = this.#partidasGanadas + 1;
  }

  calcularMMR() {
    return this.#partidasGanadas * 10;
  }
}
