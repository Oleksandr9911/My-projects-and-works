@echo off
rem | ***** File search: fd.bat *****
cls

rem | Representation of arguments in the notification
echo Utility %~n0 Searches the directory %systemroot% for the following objects %1 %2 %3 %4 %5 %6 %7 %8 %9

rem | The main command of the script and the substitution of arguments in the variable
where /r %systemroot% %1 %2 %3 %4 %5 %6 %7 %8 %9
echo.
echo Search complete!
pause