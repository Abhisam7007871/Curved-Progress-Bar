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
        svg.setAttribute("width", `${this.size}px`);
        svg.setAttribute("height", `${this.size}px`);
        this.svg = svg;
    }

    createDefs(){
        var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        linearGradient = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "linearGradient"
        ),
        stop1 = document.createElementNS("http://www.w3.org/2000/svg","stop"),
        stop2 = document.createElementNS("http://www.w3.org/2000/svg","stop"),

        linearGradientBackground = document.createElementNS("http://www.w3.org/2000/svg", "background");
        
        linearGradient.setAttribute("id","gradient");

        stop1.setAttribute("stop-color","#ffa000");
        stop1.setAttribute("offset","0%");

        linearGradient.appendChild(stop1);

        stop2.setAttribute("stop-color", "#f25767");
        stpo2.setAttribute("offset","100%");

        linearGradient.appendChild(stop2);

        linearGradientBackground.setAttribute("id","gradient-background");

        var stop1 = document.createElementNS("http://www.w3.org/2000/svg","stop");

        stop1.setAttribute("stop-color","rgba(0,0,0,0.2)");
        stop1.setAttribute("offst","0%");

        linearGradientBackground.appendChild(stop1);

        var stop2 = document.createElementNS("http://www.w3.org/2000/svg","stop");

        stop2.setAttribute("stop-color","rgba(0,0,0,0.5)");
        stop2.setAttribute("offset","1000%");

        linearGradientBackground.appendChild(stop2);

        defs.appendChild(linearGradient);
        defs.appendChild(linearGradientBackground);

        this.svg.appendChild(defs);
        this.defs = defs;
        

    }

    createSlice(){

        let slice = document.createElementNS("http://www.w3.org/2000/svg", "path");
        
        slice.setAttribute("fill","none");
        slice.setAttribute("stroke","url(#gradient)");
        slice.setAttribute("stroke-width",this.strokeWidth);
        slice.setAttribute(
            "transform",
            `translate(${this.strokeWidth / 2}, ${this.strokeWidth / 2})`
            );
        slice.setAttribute("class","animate-draw");
        this.svg.appendChild(slice);
        this.slice = slice;



    
    }



}