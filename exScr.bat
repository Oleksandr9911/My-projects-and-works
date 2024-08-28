@echo off
cls

set vUser=user

rem | scenario condition
rem | if the condition is true, the script is executed. The script is launched if the path to it is specified in
rem | path or in the same directory as the main script.

if "%1"=="a" call link-Script %2 rem the second argument of the main script is perceived as the first before the link-Script
rem | if the call is erased, the script will execute a request to the link-Script, but will not return to the main script
rem | the procedure can also call the script through the specified path to it. call c:\Script\link-Script
if "%1"=="b" call C:\Users\Sasha\Desktop\Script\Windows-script-batch-files %vUser%

rem | if the condition is true, command1 passes arguments to lab1
if "%1"=="c" (call :lab1 %2 %3 & echo addition completed successfully!)

echo.
echo exScr script completed.
goto :eof

:lab1
set /A result=%1+%2
echo result of addition: %result%
set result=
exit /b
