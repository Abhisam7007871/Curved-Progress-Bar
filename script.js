class Dial{
    constructor(conatiner){
        this.conatiner = conatiner;
        this.size = this.conatiner.dataset.size;
        this.strokeWidth = this.size / 8;
        this.radius = this.size / 2 - this.strokeWidth / 2;
        this.value = this.conatiner.dataset.size;
        this.svg;
        this.defs;
        this.slice;
        this.overlay;
        this.text;
        this.arrow;
        this.create();



    }

    create(){
        this.createSvg();
        this.createDefs();
        this.createSlice();
        this.CreateOverlay();
        this.CreateText();
        this.createText();
        this.CreateArrow();
        this.conatiner.appendChild(this.svg);
    }

    createSvg(){
        let svg = document.createElemmentNs("http://www.w3.org/2000/svg", "svg");
        
    }



}