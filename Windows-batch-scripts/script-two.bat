@echo off

rem @echo ==============================================================
rem @echo Program: script-two.bat
rem @echo Date create: 16.03.2024
rem @echo Autor: Oleksandr Rudiak
rem @echo Email: orudiak@loe.com
rem @echo Description: output information about PC, local disk c: and d:
rem @echo ==============================================================

rem output name title on dialog window 
title information Acer Nitro 5

rem 1- backgraund blue, 3- color text aqua
color 13

((echo information PC & systeminfo) && (echo. & echo information local disk c: & dir c:\) && (echo. & echo information local disk d: & dir d:\))

pause
cmd /k
