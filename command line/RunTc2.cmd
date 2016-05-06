@cls
@echo off
REM TestComplete Command Line
REM https://support.smartbear.com/viewarticle/69415/ 
REM

SET TC_PATH="C:\Program Files (x86)\SmartBear\TestComplete 11\Bin\TestComplete.exe"
SET PS_PATH="C:\Users\noel\Documents\testcomplete\Integration\Command Line\RunFromCommand.pjs"
SET LOG_PATH="C:\data\logs\batchlog.mht"

echo Run a project suite and exit
%TC_PATH% %PS_PATH% /r /e /ns /SilentMode /ExportLog:%LOG_PATH%

echo Run project test items and exit
%TC_PATH% %PS_PATH% /r /e /ns /p:RunFromCommand

echo Run a test and exit. project - unit - routine
%TC_PATH% %PS_PATH% /r /e /ns /p:RunFromCommand /u:Unit1 /rt:testFromScript

REM Check status of the last test
IF ERRORLEVEL 2 GOTO Errors
IF ERRORLEVEL 1 GOTO Warnings
IF ERRORLEVEL 0 GOTO Success

:Errors
 ECHO There are errors
 GOTO End
 
:Warnings
 ECHO There are warnings
 GOTO End
 
:Success
 ECHO Success

:End
 Echo end