class FoodItem {
  // Possible values for type: "nut", "egg", "blueberry", "carrot", "apple"
  constructor(type) {
    this.type = type
    this.img = new Image()
    this.img.src = `../Assets/IMG/${type}.png`
  }
  draw(ctx, col, row) {
    ctx.drawImage(this.img, col*100,row*100,70,70)
  }
}

// TODO: add this.ttl