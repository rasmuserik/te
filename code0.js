gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDbackgroundObjects1= [];
gdjs.NewSceneCode.GDbackgroundObjects2= [];
gdjs.NewSceneCode.GDfloorObjects1= [];
gdjs.NewSceneCode.GDfloorObjects2= [];
gdjs.NewSceneCode.GDplayerObjects1= [];
gdjs.NewSceneCode.GDplayerObjects2= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObject2Objects1= [];
gdjs.NewSceneCode.GDNewObject2Objects2= [];
gdjs.NewSceneCode.GDRightObjects1= [];
gdjs.NewSceneCode.GDRightObjects2= [];
gdjs.NewSceneCode.GDLeftObjects1= [];
gdjs.NewSceneCode.GDLeftObjects2= [];
gdjs.NewSceneCode.GDUpObjects1= [];
gdjs.NewSceneCode.GDUpObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDUpObjects1Objects = Hashtable.newFrom({"Up": gdjs.NewSceneCode.GDUpObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.NewSceneCode.GDRightObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.NewSceneCode.GDLeftObjects1});gdjs.NewSceneCode.eventsList0xb0a98 = function(runtimeScene) {

{


{
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDplayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDplayerObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.NewSceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNewObjectObjects1[i].addForceTowardObject((gdjs.NewSceneCode.GDplayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDplayerObjects1[0] : null), 30, 0);
}
}}

}


{


{
gdjs.NewSceneCode.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));
gdjs.NewSceneCode.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));
gdjs.NewSceneCode.GDUpObjects1.createFrom(runtimeScene.getObjects("Up"));
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRightObjects1[i].setX((( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointX("")) - 270);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRightObjects1[i].setY((( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointY("")) + 200);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDLeftObjects1[i].setX((( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointX("")) - 380);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDLeftObjects1[i].setY((( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointY("")) + 200);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDUpObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDUpObjects1[i].setX((( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointX("")) + 340);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDUpObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDUpObjects1[i].setY((( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointY("")) + 200);
}
}}

}


{

gdjs.NewSceneCode.GDUpObjects1.createFrom(runtimeScene.getObjects("Up"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDUpObjects1Objects, runtimeScene, false, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.NewSceneCode.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRightObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.NewSceneCode.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb0a98


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewSceneCode.GDbackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDfloorObjects1.length = 0;
gdjs.NewSceneCode.GDfloorObjects2.length = 0;
gdjs.NewSceneCode.GDplayerObjects1.length = 0;
gdjs.NewSceneCode.GDplayerObjects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects1.length = 0;
gdjs.NewSceneCode.GDNewObject2Objects2.length = 0;
gdjs.NewSceneCode.GDRightObjects1.length = 0;
gdjs.NewSceneCode.GDRightObjects2.length = 0;
gdjs.NewSceneCode.GDLeftObjects1.length = 0;
gdjs.NewSceneCode.GDLeftObjects2.length = 0;
gdjs.NewSceneCode.GDUpObjects1.length = 0;
gdjs.NewSceneCode.GDUpObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb0a98(runtimeScene);
return;
}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
