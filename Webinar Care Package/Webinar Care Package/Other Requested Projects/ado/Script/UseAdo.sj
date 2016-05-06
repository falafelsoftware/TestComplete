// use underlying Delphi ADO connection object
function insertTestAdoDelphi(){
  var connection = ADO.CreateADOConnection();
  connection.ConnectionString = Project.Variables.AdoConnectionString;
  connection.LoginPrompt = false; 
  connection.Open();  
  
  connection.Execute_("INSERT INTO Customers(Customer, State, Zip) " + 
  "VALUES ('Noel', 'CA', '12345')"); 
  connection.Close(); 
}

function insertTestAdoMicrosoft(){
  var connection = new ActiveXObject("ADODB.Connection");
  connection.Open(Project.Variables.AdoConnectionString);  
  
  connection.Execute("INSERT INTO Customers(Customer, State, Zip) " + 
  "VALUES ('Noel', 'CA', '12345')");
  
  //connection.Execute("DELETE FROM Customers WHERE Customer = 'Noel'"); 
  
  connection.Close(); 
}