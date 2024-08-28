@echo off
cls
rem | beginning of variable localization, advanced processing of commands and deferred expansion of the environment variable (for cycles in !var!)
SetLocal EnableExtensions EnableDelayedExpansion

REM For /R c:\windows\system32 %%a in (*.txt) do @(echo %%a)

set /a vA=0

for /l %%i in (1,1,20) do (
 echo [!vA!]

 set /a vA+=1
)
echo.
echo total cycles: %vA%














REM MULTIPLICATION
REM set /a vA=8
REM set /a vA*=8
REM set /a vA+=8

REM echo.
REM echo calculation: %vA%


















REM DIVISION
REM set /a vB=%vA%/8
rem REMOVAL
REM set /a vC=%vA%-8
rem ADDITION
REM set /a vD=%vA%+8
rem AMOUNT
REM set /a vSum=%vB%+%vC%

rem calculations in parentheses
REM set /a vE=(%vA%+8)/2
REM set /a vF=(%vA%+8)-(%vA%-8)/2

REM echo MULTIPLY: %vA%
REM echo.
REM echo DIVISION: %vB%
REM echo.
REM echo EXTRACT: %vC%
REM echo.
REM echo ADDING: %vD%
REM echo.
REM echo SUM: %vSum%
REM echo.
REM echo calculation in brackets1: %vE%
REM echo.
REM echo calculation in brackets2: %vF%
