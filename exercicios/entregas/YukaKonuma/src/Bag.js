class Bag {
  static maximumSpace = 7;
  inBag = [];

  showBag() {
    return this.inBag;
  }

  putItem(item) {
    let bagNotFull = this.inBag.length < Bag.maximumSpace;
    if (!bagNotFull) {
      console.log("Sua mochila já está cheia");
      return;
    }
    this.inBag.push(item);
    return this.inBag;
  }

  takeItemOut(item) {
    let contains = this.inBag.includes(item);
    if (!contains) {
      console.log("Não tem esse item na mochila");
    }

    this.inBag = this.inBag.filter((i) => i != item);
  }
}
module.exports = Bag;
