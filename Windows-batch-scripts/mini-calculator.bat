@echo off
cls

echo ********** mini-calculator v1.0 ******************
echo ****** Performs operations on numbers **************
echo ****** Adding ^+ (sum calculation)*************
echo ****** Subtraction ^- (computation of the difference)*********
echo ****** Multiplying ^* (calculating the product)*********
echo ****** Dividing by ^/ (calculating the quotient)************
echo ****** Autor Oleksandr Rudiak ********************
echo.

setlocal

rem | request to select an operation + - * /
set /p operand=Enter the necessary calculation operator ^(^+ ^- ^* ^/^):

rem | the conditions under which the operation will be performed + - * /

if "+"=="%operand%" (goto :addition)
if "-"=="%operand%" (goto :subtraction)
if "*"=="%operand%" (goto :multiplication)
if "/"=="%operand%" (goto :division)
goto :Eof

:addition
set /p num1=Enter the first number:
set /p num2=Enter the second number:

set /a sum=%num1%+%num2%

echo.
echo Sum calculation result: %sum%
goto :Eof

:subtraction
set /p num1=Enter the first number:
set /p num2=Enter the second number:

set /a sub=%num1%-%num2%

echo.
echo Difference calculation result: %sub%
goto :Eof

: multiplication
set /p num1=Enter the first number:
set /p num2=Enter the second number:

set /a multi=%num1%*%num2%

echo.
echo Product calculation result: %multi%
goto :Eof

:division
set /p num1=Enter the first number:
set /p num2=Enter the second number:

set /a div=%num1%/%num2%

echo.
echo The result of calculating the share: %div%
goto :Eof

endlocal
