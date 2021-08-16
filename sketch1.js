var fRect,mRect;
function setup()
{
createCanvas(1200,800);
fRect = createSprite(600,400,50,80);
fRect.shapeColor = "green"
mRect = createSprite(400,200,80,30)
mRect.shapeColor = "green"
}
function draw()
{
    background("white");
    mRect.x = World.mouseX;
    mRect.y = World.mouseY;
    if(mRect.x-fRect.x < fRect.width/2 + mRect.width/2 )
    {
        fRect.shapeColor = "red";
        mRect.shapeColor = "red";
    }
    else{
        fRect.shapeColor = "green";
        mRect.shapeColor = "green";
    }
    drawSprites();
}