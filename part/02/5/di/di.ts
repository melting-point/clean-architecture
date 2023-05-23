interface I {
    f(): void
}

class _ML1 implements I {
    f() {
        console.log('wow');
    }
}

class _HL1 {
    i: I;

    constructor(i: I) {
        this.i = i;
    }

    do() {
        this.i.f();
    }
}

const HL1 = new _HL1(new _ML1());
