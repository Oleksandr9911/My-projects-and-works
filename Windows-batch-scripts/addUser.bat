@echo off
rem ***** Adds a new user: addUser.bat *****
cls

rem Substitution of arguments in the notification
echo Utility %~n0 Adds a new user to this PC: Login %1 Password %2 Full name: %~3
echo Also adds %1 to %4

rem The basic command for adding a user and substituting arguments in a variable
net user %1 %2 /add /active:yes /fullname:%3 /logonpasswordchg:yes && net localgroup %4 %1 /add
pause
