// Project > Properties > CLR Bridge to assign the .NET DLL

function useDotNotObjects(){
  // create a new instance of a C# object from an assembly
  var company = dotNET.falafel_testcomplete.Company.zctor(); 
  company.Name = "Falafel"; 
  company.Url = "http://www.falafel.com"; 
  // call a C# object method
  Log.Message(company.toJson()); 
}