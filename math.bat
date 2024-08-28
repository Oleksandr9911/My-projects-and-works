@echo off
rem | Addition
set /a total1=25+25

rem | Withdrawal
set /a total2=50-25

rem | Multiplication
set /a total3=5*4

rem | Division
set /a total4=20/4

rem | Multiplication and addition
set /a total5=5+5*2

rem | Up to the 3rd degree?
set /a total6=2*2*2*2*2

rem | Rising to the 5th degree?
set /a total7=10*10*10*10*10

echo Adding: %total1%
echo Excluding: %total2%
echo Multiplication: %total3%
echo Division: %total4%
echo Multiplication and Addition: %total5%
echo Raising to the 3rd degree?: %total6%
echo Raising to the 5th degree?: %total7%

pause
