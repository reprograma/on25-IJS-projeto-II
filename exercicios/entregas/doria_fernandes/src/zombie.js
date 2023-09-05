class Zombie {
    ferimentos = 0;


    sofrerFerimento() {
        if (this.ferimentos < 2) {
            this.ferimentos++;
            if (this.ferimentos === 2) {
                console.log("Zumbie morreu...")
            }
        }
    }
}