@echo off
cls

rem | Acceleration by condition. equ or ==

if /i "%1" equ "Petro" (echo. & echo This is Peter. Your sysadmin) else (echo. &echo This is not Peter. This is %1. Please enter Peter!)
rem if /i NOT "%1" equ "Petro" (echo. & echo This is %1. Your sysadmin) else (echo. &echo This is not Peter. This is %1. Please enter Peter!)
pause
cmd /k
