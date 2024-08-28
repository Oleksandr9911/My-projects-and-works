rem |*******************************************
rem |*******************************************
rem |Data archiving script
rem |Rudiak Oleksandr
rem |*******************************************
@echo off
title Start Archiving
cls 

setlocal
rem |variable for correcting the time format
set vH=%time:~0,2%
set vM=%time:~3,2%
set vS=%time:~6,2%
set vTime=%vH%-%vM%-%vS%

rem |Record the start date of archiving in the journal
echo ************************* >> E:\tst\Archiving.log
echo ************************* >> E:\tst\Archiving.log
echo Date: %date% ^| Time: %time% >> E:\tst\Archiving.log

rem | Data archiving address
cd c:\Users\Sasha\Desktop\tst

rem | WinRar archiving program
:: a - adding a file to the archive
:: O+ - allows overwriting the archive
:: r - adds all child directories of the file to the archive
rar a -o+ -r e:\tst\Archive_%date%_%vTime%.rar *.* >> E:\tst\Archiving.log

echo Archiving completed! >> E:\tst\Archiving.log
echo ************************* >> E:\tst\Archiving.log
echo ************************* >> E:\tst\Archiving.log

rem | The rule for cyclic file deletion
:: /P - sets the full path to the file
:: /M -sets a mask before searching for a file
:: /D - sets the search by a specific date or the date of file change more\less
:: /C -executes the command for each file
forfiles /P E:\tst /M *.rar /D -30 /C "cmd /C del /q @path" >> E:\tst\Archiving.log

echo.
echo Archiving completed!
pause
