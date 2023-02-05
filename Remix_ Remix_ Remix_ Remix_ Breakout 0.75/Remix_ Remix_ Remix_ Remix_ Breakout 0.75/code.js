var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2a40e385-6071-4f9f-80e7-8bf04a1102ab","e84c94b7-4703-4f07-bfe2-87ec743d6221","9113e973-61e5-4881-b329-cfad5b0445c8","651411fe-047a-446d-8a61-7b763ceba822","959caf6c-5f37-4152-a489-5626962af4f8","94119187-718f-475c-99d1-fdaf08c0fbdf","772b4b0b-2dfc-49bf-b5d7-2bffe8245e7f"],"propsByKey":{"2a40e385-6071-4f9f-80e7-8bf04a1102ab":{"name":"cuteanimals_monkey_1","sourceUrl":"assets/api/v1/animation-library/gamelab/S324HagYioWFB9PpY8k5rjNREARJad5d/category_animals/cuteanimals_monkey.png","frameSize":{"x":399,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"S324HagYioWFB9PpY8k5rjNREARJad5d","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/S324HagYioWFB9PpY8k5rjNREARJad5d/category_animals/cuteanimals_monkey.png"},"e84c94b7-4703-4f07-bfe2-87ec743d6221":{"name":"cuteanimals_monkey2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu/category_animals/cuteanimals_monkey2.png","frameSize":{"x":388,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu/category_animals/cuteanimals_monkey2.png"},"9113e973-61e5-4881-b329-cfad5b0445c8":{"name":"plants_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/u.vkHS.AjLRfsy_qFlUnqnKiA.1vWgq8/category_video_games/plants_09.png","frameSize":{"x":295,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"u.vkHS.AjLRfsy_qFlUnqnKiA.1vWgq8","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":295,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/u.vkHS.AjLRfsy_qFlUnqnKiA.1vWgq8/category_video_games/plants_09.png"},"651411fe-047a-446d-8a61-7b763ceba822":{"name":"face_banana_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pWFbbj15zL1DL.xT.w9LmvN_ZdtcMo_W/category_food/face_banana.png","frameSize":{"x":264,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"pWFbbj15zL1DL.xT.w9LmvN_ZdtcMo_W","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pWFbbj15zL1DL.xT.w9LmvN_ZdtcMo_W/category_food/face_banana.png"},"959caf6c-5f37-4152-a489-5626962af4f8":{"name":"face_apple_1","sourceUrl":"assets/api/v1/animation-library/gamelab/D9I677s9Rz4Ww_Znrcm36XWuz8WA0Kh8/category_food/face_apple.png","frameSize":{"x":392,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"D9I677s9Rz4Ww_Znrcm36XWuz8WA0Kh8","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/D9I677s9Rz4Ww_Znrcm36XWuz8WA0Kh8/category_food/face_apple.png"},"94119187-718f-475c-99d1-fdaf08c0fbdf":{"name":"pine_trees_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png"},"772b4b0b-2dfc-49bf-b5d7-2bffe8245e7f":{"name":"ground_wood_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1Sui0vfCcTfyoezWiHf1qFKRunjC9Kzi/category_video_games/ground_wood_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"1Sui0vfCcTfyoezWiHf1qFKRunjC9Kzi","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1Sui0vfCcTfyoezWiHf1qFKRunjC9Kzi/category_video_games/ground_wood_broken.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


bg=createSprite(200,200,400,400)
bg.setAnimation("pine_trees_1")
var box1 = createSprite(25, 75, 50, 50);
box1.setAnimation("face_banana_1")
box1.scale=0.1
var box2 = createSprite(75, 75, 50, 50);
box2.setAnimation("face_apple_1")
box2.scale=0.1
var box3 = createSprite(125, 75, 50, 50);
box3.setAnimation("face_banana_1")
box3.scale=0.1
var box4 = createSprite(175, 75, 50, 50);
box4.setAnimation("face_apple_1")
box4.scale=0.1
var box5 = createSprite(225, 75, 50, 50);
box5.setAnimation("face_banana_1")
box5.scale=0.1
var box6 = createSprite(275, 75, 50, 50);
box6.setAnimation("face_apple_1")
box6.scale=0.1
var box7 = createSprite(325, 75, 50, 50);
box7.setAnimation("face_banana_1")
box7.scale=0.1
var box8 = createSprite(375, 75, 50, 50);
box8.setAnimation("face_apple_1")
box8.scale=0.1

var box9 = createSprite(25,115, 50, 50);
box9.setAnimation("face_apple_1")
box9.scale=0.1
var box10 = createSprite(75, 115, 50, 50);
box10.setAnimation("face_banana_1")
box10.scale=0.1
var box11 = createSprite(125, 115, 50, 50);
box11.setAnimation("face_apple_1")
box11.scale=0.1
var box12 = createSprite(175,115, 50, 50);
box12.setAnimation("face_banana_1")
box12.scale=0.1
var box13 = createSprite(225,115, 50, 50);
box13.setAnimation("face_apple_1")
box13.scale=0.1
var box14 = createSprite(275,115, 50, 50);
box14.setAnimation("face_banana_1")
box14.scale=0.1
var box15 = createSprite(325,115, 50, 50);
box15.setAnimation("face_apple_1")
box15.scale=0.1
var box16 = createSprite(375,115, 50, 50);
box16.setAnimation("face_banana_1")
box16.scale=0.1

paddle=createSprite(200,390,100,20)
paddle.setAnimation("ground_wood_broken_1")
paddle.scale=0.3
ball=createSprite(200,200,20,20)
ball.setAnimation("cuteanimals_monkey_1")
ball.scale=0.1
ball2=createSprite(200,200,20,20)
ball2.setAnimation("cuteanimals_monkey2_1")
ball2.scale=0.1

var score = 0;
var gameState = "serve";

function draw() {
  background("white");
createEdgeSprites()
ball.bounceOff(paddle)
 ball.bounceOff(leftEdge)
 ball.bounceOff(rightEdge)
 ball.bounceOff(topEdge)
  ball2.bounceOff(leftEdge)
 ball2.bounceOff(rightEdge)
 ball2.bounceOff(topEdge)
 ball2.bounceOff(paddle)
 ball.bounceOff(paddle)
 if(ball.isTouching(box1)||ball2.isTouching(box1))
 {box1.destroy()
   score = score + 1
 }
  if(ball.isTouching(box2)||ball2.isTouching(box2))
 {box2.destroy()
   score = score + 1
 }
  if(ball.isTouching(box3)||ball2.isTouching(box3))
 {box3.destroy()
   score = score + 1
 }
  if(ball.isTouching(box4)||ball2.isTouching(box4))
 {box4.destroy()
   score = score + 1
 }
  if(ball.isTouching(box5)||ball2.isTouching(box5))
 {box5.destroy()
   score = score + 1
 }
  if(ball.isTouching(box6)||ball2.isTouching(box6))
 {box6.destroy()
   score = score + 1
 }
  if(ball.isTouching(box7)||ball2.isTouching(box7))
 {box7.destroy()
   score = score + 1
 }
  if(ball.isTouching(box8)||ball2.isTouching(box8))
 {box8.destroy()
 score = score + 1
 }
 if(ball.isTouching(box9)||ball2.isTouching(box9))
 {box9.destroy()
   score = score + 1
 }
  if(ball.isTouching(box10)||ball2.isTouching(box10))
 {box10.destroy()
   score = score + 1
 }
  if(ball.isTouching(box11)||ball2.isTouching(box11))
 {box11.destroy()
   score = score + 1
 }
  if(ball.isTouching(box12)||ball2.isTouching(box12))
 {box12.destroy()
   score = score + 1
 }
  if(ball.isTouching(box13)||ball2.isTouching(box13))
 {box13.destroy()
   score = score + 1
 }
  if(ball.isTouching(box14)||ball2.isTouching(box14))
 {box14.destroy()
   score = score + 1
 }
  if(ball.isTouching(box15)||ball2.isTouching(box15))
 {box15.destroy()
   score = score + 1
 }
  if(ball.isTouching(box16)||ball2.isTouching(box16))
 {box16.destroy()
 score = score + 1
 }
 



  drawSprites();
  textSize(25)
  fill("PURPLE")
  text("EATEN:" + score + "",250,38)
  //
  strokeWeight(300)
  fill("red")
if(gameState==="serve")
{
 text ("Press enter to start",150,250)
if(keyDown("enter"))
{ball.velocityX=-2
ball.velocityY=2
ball2.velocityX=-2
ball2.velocityY=-2
gameState="play"
}
}
if (gameState === "play")
{
  paddle.x=World.mouseX
  if (score == 16|| ball.y>400&&ball2.y>400)
  {gameState = "END"}

}
if (gameState === "END")
{ball.x = 200
ball.y = 200
ball2.y = 200
ball2.x = 200
ball.velocityY=0
ball.velocityX=0
ball2.velocityX=0
ball2.velocityY=0
text("REFRESH TO RESTART, GAME END",120,250)
}
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
