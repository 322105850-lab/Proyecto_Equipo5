export class Jugador{}
class JugadorEstrategia extends Jugador{
  #misiones
    constructor(gamertag, edad, partidasGanadas){
        super(gamertag, edad, partidasGanadas)
        this.#misiones = 0
    }

  getGamertag(){
    return super.getGamertag()
  }

  getEdad(){
    return super.getEdad();
  }

  setEdad(edad){
    return super.setEdad(edad)
  }

  getPartidasGanadas(){
    return super.getPartidasGanadas
  }

  setPartidasGanadas(partidasGanadas){
    return super.setPartidasGanadas(partidasGanadas)
  }

  registrarVictoria(){
    return super.registrarVictoria()
  }

  setMisionesCumplidas(){
    this.#misiones+=1
  }

  getMisionesCumplidas(){
    return this.#misiones
  }

  calcularMMR(){
    let MMR = (super.getPartidasGanadas * 10) + (this.#misiones * 5)
    return MMR
  }
}