// const app = new PIXI.Application({
//     width: 800,
//     height: 600,
//     backgroundColor: 0x1099bb,
//     resolution: window.devicePixelRatio || 1,
// });
// document.body.appendChild(app.view);

// const container = new PIXI.Container();

// app.stage.addChild(container);

// // Create a new texture
// const texture = PIXI.Texture.from('img/wheel.png');

// // Create a 5x5 grid of bunnies
// for (let i = 0; i < 1; i++) {
//     const bunny = new PIXI.Sprite(texture);
//     bunny.anchor.set(0.5);
//     bunny.x = (i % 5) * 40;
//     bunny.y = Math.floor(i / 5) * 40;
//     container.addChild(bunny);
// }

// // Move container to the center
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;

// // Center bunny sprite in local container coordinates
// container.pivot.x = container.width / 2;
// container.pivot.y = container.height / 2;

// // Listen for animate update
// app.ticker.add((delta) => {
//     // rotate the container!
//     // use delta to create frame-independent transform
//     container.rotation -= 0.01 * delta;
// });



















// $('.fortune-btn').on('click', function () {
//     var tl = new TimelineMax();
//     tl
//         .to(".fortune-img", { duration: 9, rotation: 360, ease: "power4.out", })
//     ;
// });


function debuggerCaller() {
    // debugger;
}

var angleStep = 60;
let rotateSpeed = Math.floor(Math.random() * 100)

$('.fortune-btn').on('click', function animate() {
    console.log('I taped the button');
    bunny.angle += angleStep;

    angleStep = angleStep - angleStep/rotateSpeed;

    if ((angleStep.toFixed(1) <= 1.0)) {
        console.log("stopped rotation")
        bunny.angle = bunny.angle;
        debuggerCaller();
        return bunny.angle;
    } else {
        requestAnimationFrame(animate);
    }
})





// const app = new PIXI.Application({ backgroundColor: 0x1099bb });
// document.body.appendChild(app.view);

const app = new PIXI.Application({ transparent: true });
document.body.appendChild(app.view);

// create a new Sprite from an image path
const bunny = PIXI.Sprite.from('img/wheel.png');

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
// app.ticker.add((delta) => {
//     // just for fun, let's rotate mr rabbit a little
//     // delta is 1 if running at 100% performance
//     // creates frame-independent transformation
//     bunny.rotation += 0.03 * delta;
// });











































// const app = new PIXI.Application({ backgroundColor: 0x1099bb });
// document.body.appendChild(app.view);

// // create a new Sprite from an image path
// const bunny = PIXI.Sprite.from('img/wheel.png');

// // center the sprite's anchor point
// bunny.anchor.set(0.5);

// // move the sprite to the center of the screen
// bunny.x = app.screen.width / 2;
// bunny.y = app.screen.height / 2;

// app.stage.addChild(bunny);

// // Listen for animate update
// app.ticker.add((delta) => {
//     // just for fun, let's rotate mr rabbit a little
//     // delta is 1 if running at 100% performance
//     // creates frame-independent transformation
//     bunny.rotation += 0.03 * delta;
// });
