function test(){
  try {
    throw "test";
  } catch(ex){
    Log.Error(ex); 
  }
}