class selectingPlayer {
    constructor() {
        this.message = createElement('h3');
        this.button1 = createButton('Wizard');
        this.button2 = createButton('Archer');
        this.button3 = createButton('SwordsMan');
        this.wizardImage = loadImage("wizard.jpg");
        this.archerImage = loadImage("archer.jpg");
        this.swordsManImage = loadImage("swordsman.jpg");
    }
    display() {
        this.message.html("Select Your Player");
        this.message.position(displayWidth/2-75,30);
        image(this.wizardImage,displayWidth/4-50,150,200,200);
        this.button1.position(displayWidth/4,450);
        text("The powerful wizard who can undead",displayWidth/4-50,400);
        text("the dead and call them to their",displayWidth/4-50,410);
        text("bidding.He can also throw fireballs.",displayWidth/4-50,420);

        image(this.archerImage,displayWidth/2-50,150,150,200);
        this.button2.position(displayWidth/2-40,450);
        text("A bowman who can shoot multiple",displayWidth/2-80,400);
        text("arrows at a time.",displayWidth/2-80,410);
        text("His skills are untouched.",displayWidth/2-80,420);

        image(this.swordsManImage,displayWidth/1.5,170,110,190);
        this.button3.position(displayWidth/1.5,450);
        text("A renowned swordsman who has the ",displayWidth/1.5-35,400);
        text("mastery in swords his sword ",displayWidth/1.5-35,410);
        text("can cut through rocks.",displayWidth/1.5-35,420);
        this.button1.mousePressed(() => {
            choice = 1;
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.message.hide();
        });
        this.button2.mousePressed(() => {
            choice = 2;
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.message.hide();
            
        });
        this.button3.mousePressed(() => {
            choice = 3;
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.message.hide();
        });
    }

    


}