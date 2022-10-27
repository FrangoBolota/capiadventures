 var capivo,capivoEsquerda,CapivoDireita,hert,life
 var chao
 var tatu
 var tatu1
 var tatu2
 var chaoTex
 var tatuColision
function preload(){
tatu1=loadImage("imagens/tatu.jpeg")
tatu2=loadImage("imagens/fulenco.jpeg")
hert=loadImage("imagens/hert.png")
CapivoDireita=loadAnimation("imagens/capyDir1.png","imagens/capyDir2.png")
capivoEsquerda=loadAnimation("imagens/capyEsq1.png","imagens/capyEsq2.png")
chaoTex=loadImage("mapa/mapa.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  capivo=createSprite(windowWidth/2-4500,windowHeight/2)
  chao=createSprite(windowWidth/2,windowHeight/2+125,windowWidth*5,20)
  chao.addImage(chaoTex)
  chao.scale=0.5
  tatu=createSprite(windowWidth/2,windowHeight/2)
 tatu.addImage(tatu1)
 tatu.scale=0.7
 tatu.velocityX=random(-5,5)
 life=createSprite(capivo.x+700,100)
 life.addImage(hert)
 life.scale=0.1
 capivo.addAnimation("Direita",CapivoDireita)
 capivo.addAnimation("Esquerda",capivoEsquerda)
 capivo.scale=1.7
 capivo.debug=true
 capivo.setCollider("circle",0,0,20)
 tatuColision=createSprite(tatu.x,tatu.y,tatu.width-90,10)
}

function draw() {
  background(0); 
 if(keyDown("a")){
 capivo.x-=30
 capivo.changeAnimation("Esquerda",capivoEsquerda)
 }
if(keyDown("d")){
  capivo.x+=30
  capivo.changeAnimation("Direita",CapivoDireita)
}
if(keyDown("space")){
  capivo.velocityY=-30
}
capivo.velocityY+=1
 capivo.collide(chao)
 camera.position.x=capivo.x
 camera.position.y=capivo.y
 if(tatu.x>windowWidth/2+2000 || tatu.x<windowWidth/2-2000){
  tatu.velocityX*=-1
 }

 tatuColision.x=tatu.x 
 tatuColision.y=tatu.y-60     

life.x=capivo.x+700
life.y=capivo.y-400

 tatu.velocityY+=1
 tatu.collide(chao)
 //tatu.collide(capivo)
  drawSprites();

 if(capivo.isTouching(tatu)){ 
capivo.destroy()
  textSize(20)
  fill("white")
  text("vc é ruim",tatu.x,50)
}

  if(capivo.isTouching(tatuColision)){
    tatu.destroy()
    tatuColision.destroy()
  }

}
