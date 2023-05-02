$('#left h1').textillate({ in: { effect: 'rollIn' } });
var tl = gsap.timline()
tl.from("#img",{
    x : 1000,
    ease:Expo.easeInOut,
    duration:2,
})