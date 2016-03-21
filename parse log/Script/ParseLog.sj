// Global variables
var ImgCount, ExportFile, ExportFileName;

// Exporting the log
function ExportLog()
{
  var i, FS, dateStamp, parsedFolder;
  
  if(Project.Logs.LogItemsCount > 0)
  {
    // Initializing variables
    
    dateStamp = aqConvert.DateTimeToFormatStr(aqDateTime.Now(), "%m%d%Y%H%M%S");
    parsedFolder = aqString.Format("%s\\parsed\\", aqFileSystem.GetCurrentFolder());
    outputFolder = parsedFolder + dateStamp + "\\";
    aqFileSystem.CreateFolder(outputFolder);   
    ExportFileName = outputFolder + "parsed.txt"; 
    ImgCount = 0; 

    // Creating file
    FS = Sys.OleObject("Scripting.FileSystemObject")
    ExportFile = FS.CreateTextFile(ExportFileName, true);

    // Exporting the test log contents
    try
    {
      for(i = 0; i < Project.Logs.LogItemsCount; i++) 
        ExportLogItem(Project.Logs.LogItem(i));
    }
    finally
    {
      ExportFile.Close();
    } 
  }
  else
    // If the project does not contain log items,
    // post a message about this to the test log
    Log.Message("No logs for export."); 
}

// Exporting images
function ExportPicture(ALogData)
{
  var s;

  // Generating the image file name
  ImgCount = ImgCount + 1;
  s = aqFileSystem.GetFileFolder(ExportFileName) + "\\" + aqConvert.VarToStr(ImgCount) + ".jpg"; 
  // Saving image to file
  ALogData.Picture.SaveToFile(s);
  // Saving image file name to the log data file
  ExportFile.WriteLine("Picture: " + s); 
}

// Exporting text
function ExportText(ALogData)
{
  ExportFile.WriteLine("Text: " + ALogData.Text); 
}

// Exporting row data
function ExportRow(TableScheme, Caption, ARow)
{
  var i, s;
  var Child, ChildRow;
  var ColCount, ChildCount

  // Getting the number of table columns 
  ColCount = TableScheme.ColumnCount;
  // Getting the number of child tables
  ChildCount = TableScheme.ChildCount; 

  s = Caption;

   // Exporting column data
    for(i = 0; i < ColCount; i++) 
      s = s + aqConvert.VarToStr(ARow.ValueByIndex(i)) + "\t";
    ExportFile.WriteLine(s); // Writing data to file
    
    // Exporting child tables data 
    for(i = 0; i < ChildCount; i++)
    {
      Child = ARow.ChildDataByIndex(i);
      ExportLogData(Child);
    }
    
    // Exporting child rows (if the data is displayed as a tree)
    for(i = 0; i < ARow.ChildRowCount; i++)
    {
      ChildRow = ARow.ChildRow(i);
      s = "Row " + aqConvert.VarToStr(i + 1) + ":\t";
      ExportRow(TableScheme, s, ChildRow);
    }
}

// Exporting table data
function ExportTable(ALogData)
{
  var TableScheme, Row, i, s;
  
  // Obtaining the table scheme
  TableScheme = ALogData.Scheme; 

  // Iterating through table records and exporting table data
  for(i = 0; i < ALogData.RowCount; i++)
  {
    // Obtaining the row object
    Row = ALogData.Rows(i);
    s = "Row " + aqConvert.VarToStr(i + 1) + ":\t";
    // Exporting the row
    ExportRow(TableScheme, s, Row);
  }
}

// Exporting log item's data
function ExportLogData(ALogData)
{ 
  var Scheme;

  Scheme = ALogData.Scheme;
  
  // Exporting the scheme name
  ExportFile.WriteBlankLines (1);
  ExportFile.WriteLine ("Name: " + Scheme.Name); 
  ExportFile.WriteLine("-------------------------------------------");
  
  // Determining the type of log item"s data and 
  // exporting the data
  switch(Scheme.DataType)
  {
    case ldtTable : 
      ExportTable(ALogData); // Exporting table data
      break; 
    case ldtPicture: 
      ExportPicture(ALogData); // Exporting picture
      break; 
    case ldtText : 
      ExportText(ALogData); // Exporting text
      break;
  }
}

// Exporting log items
function ExportLogItem(ALogItem)
{
  var i;

  // Exporting log item's data
  for(i = 0; i < ALogItem.DataCount; i++) 
    ExportLogData(ALogItem.Data(i));

  // Exporting child log items 
  for(i = 0; i < ALogItem.ChildCount; i++) 
    ExportLogItem(ALogItem.Child(i));
}
