class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }

  hydrate() {
    this.water ++
  }

  feed() {
    this.soil ++
  }

  giveLight() {
    this.light ++
  }
}
let plant = new Plant()
plant.hydrate()
console.log(plant)