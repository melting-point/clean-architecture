interface I {
    f(): void;
}

const HL1 = (i: I) => {
    i.f();
};

const ML1: I = {
    f(){
        console.log('h');
    }
}

HL1(ML1);

// 런타임에 결정