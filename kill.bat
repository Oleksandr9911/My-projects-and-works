@echo off
rem | ***** Closing running processes: kill.bat *****
cls

rem | setting the size of the width and height of the console
REM mode con: cols=8 lines=8

rem | Representation of arguments in the notification
echo Utility %~n0 Closes program: %1

rem | The main command of the script and the substitution of arguments
taskkill /f /im %1.exe /t

rem | condition to the main team

if "%errorlevel%"=="0" (echo. & echo the program was completed successfully ! & pause)
if "%errorlevel%" gtr "0" (goto :findApp)

goto :Eof

:findApp
setlocal ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

for /f "tokens=1 delims=," %%p in ('tasklist /fo csv /nh ^| sort ') do (
 set /a nn+=1
 set nameApp!nn!=%%p
 echo !nn!: %%~p
 )

:start
set /p kill=Enter the program number to kill:
if "%kill%"=="" goto start
echo.
echo ******************************************
echo Selected !nameApp%kill%!. Are you sure?
echo.
echo If so, press Enter
echo If not, Ctrl^+C
echo ******************************************
echo.
pause

taskkill /f /im !nameApp%kill%! /T

endlocal

goto findApp
