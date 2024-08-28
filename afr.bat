@echo off 
cls
rem | початок локал?зацiї змiнни
setlocal

rem | оголошення змiнни

set vVar1= Змiнна1
set vVar2= Змiнна2

echo %vVar1% %vVar2%

rem | кiнець локал?зацiї
endlocal

rem | початок локал?зацiї змiнни
setlocal

rem | оголошення змiнни

set vVar1= Змiнна11
set vVar2= Змiнна22

echo %vVar1% %vVar2%