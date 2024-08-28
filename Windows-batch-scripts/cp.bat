@echo off
rem ***** Copy: cp.bat *****

rem | substitution of arguments
echo Utility %0 copies directory %1 to %commad%

set commad=%username%\Desktop\commands

rem | the main command of the script and substitution of arguments from CMD
xcopy /t %1 %commad%

echo.
pause
 
