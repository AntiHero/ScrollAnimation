console.log('hello');
const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    {x: 100, y: -20}, 
    {x: 300, y: 10}, 
    {x: 600, y: -30},
    {x: 900, y: -200},
    {x: 300, y: -50},
    {x: 900, y: -50},
    {x: 1200,y: -80},
    {x: 1300,y: -50},
    {x: window.innerWidth + 200, y: -30}
  ]
}

const tween = new TimelineLite();

tween.add(
  TweenLite.to('.animation__airplane', 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.main-animation',
  duration: 1100,
  triggerHook: .5
})
.setTween(tween)
// .setPin('.main-animation')
.addTo(controller);