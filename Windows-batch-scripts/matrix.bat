@echo off
cls

rem | scenario condition
if "%1"=="" (echo Error: Enter a valid parameter & echo.)

if "%1"=="a" (goto label1)
if "%1"=="b" (goto label2)
if "%1"=="c" (goto label3)

if "%1"=="mtx" (goto matrix)
rem | goto :eof
goto : EXIT

rem | Label 1: Trigger notification. Eof gives control to the end of the file, bypassing the remaining bits (end of file)
rem | :EXIT is the second way to switch between commands
:label1
echo The label label1 was started & echo.
rem | goto :eof
goto : EXIT

rem | Label 2: Trigger notification
:label2
echo The label label2 has been started & echo.
rem | goto :eof
goto :EXIT

rem | Label 3: Trigger notification
:label3
echo The label label3 has been started & echo.
rem | goto :eof
goto :EXIT

rem | Label matrix
:matrix
echo %time% %random% %random% %random% %random% %random% %random% %random% %random%
goto matrix

:EXIT
