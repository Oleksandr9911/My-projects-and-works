@echo off
rem | ***** File search: fd.bat *****
cls

if "%1"=="" (goto alternative_where)
if "%1"=="%1" (goto main_where)
goto :Eof

:main_where
rem | Representation of arguments in the notification
echo Utility %~n0 Searches the directory %systemroot% for the following objects %1 %2 %3 %4 %5 %6 %7 %8 %9

rem | The main command of the script and the substitution of arguments in the variable
where /r %systemroot% %1 %2 %3 %4 %5 %6 %7 %8 %9
echo.
echo Search complete!
goto :Eof

:alternative_where

setlocal
set /p v1=Enter the full directory path:
set /p v2=Enter file name or format:

rem | Representation of arguments in the notification
echo Utility %~n0 Searches directory %v1% for the following objects %v2%

where /r %v1% %v2%
echo.
echo Search complete!
endlocal
pause