function addHosts(){
  var hosts = ["VM_WIN81", "VM_WIN81_2"];
  var mode = {
    Manual: 0,
    RDP: 1,
    Console: 2
  } 

  for(var i = 0; i < hosts.length; i++){
    var host = NetworkSuite.Hosts.AddNew();
    host.Name = "MyHost" + (i + 1); 
    host.Address = hosts[i]; 
    host.UserName = Project.Variables.LoginName; 
    host.Password = Project.Variables.LoginPassword.DecryptedValue;
    host.BasePath = "c:\\test";
    host.LogonMode = mode.RDP;   
  }
}
function addTasks(){
  var job = NetworkSuite.Jobs.AddNew();
  job.Name = "PurchaseOrderJob"; 
  
  var task1 = job.Tasks.AddNew();
  task1.Name = "Task1"; 
  task1.Host = NetworkSuite.Hosts.ItemByName("MyHost1");
  task1.ProjectPath = "1_CreatePurchaseOrders.mds";
  task1.Test = "1_CreatePurchaseOrders\\Script\\CreatePoList\\addPurchaseOrders";
  
  var task2 = job.Tasks.AddNew();
  task2.Name = "Task2"; 
  task2.Host = NetworkSuite.Hosts.ItemByName("MyHost2");
  task2.ProjectPath = "2_UsePurchaseOrders.mds";
  task2.Test = "2_UsePurchaseOrders\\Script\\UsePoList\\logPurchaseOrders";
  
}

function runDistributedTest(){
  addHosts(); 
  addTasks(); 
  NetworkSuite.Run(true); 
}