@echo off
cls

rem | The main command of the script

dir %1 %2 %3 %4

rem | Acceleration by condition

if "%errorlevel%" geq "1" (echo. & echo Command error) else (echo. & echo Command executed successfully!)
pause
cmd /k
