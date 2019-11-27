class Zaba {
    constructor(meno,id) {
        this.meno = meno;
        this.zaludok = 0;
        this.id = id;
    }
    papaj(zradlo) {
        this.zaludok += zradlo;
    }
    kakaj() {
        this.zaludok -= 1;
    }
}
    
const zabinec = [];
for (let i = 0; i < 10; i++) {
    zabinec.push(new Zaba("zaba"+i, i));
}
zabinec.forEach(zaba => zaba.papaj(19));
zabinec.forEach(zaba => zaba.kakaj());
console.log(zabinec);
