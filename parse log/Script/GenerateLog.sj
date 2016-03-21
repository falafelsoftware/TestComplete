function test(){
  Log.AppendFolder("A folder"); 
  Log.Message("message", "additional info"); 
  Log.Picture(Sys.Desktop.Picture(), "screenshot"); 
  Log.PopLogFolder(); 
}