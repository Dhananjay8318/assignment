//
function doOuterFunctionStuff(nr){
    console.log("outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x){
        console.log(x+7);
        console.log("i can acess outer variables",nr);
    }
}
doOuterFunctionStuff(2);