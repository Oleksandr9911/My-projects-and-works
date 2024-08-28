@echo off
rem ***** Deletes a user: deleteUser.bat *****
cls

rem Substitution of arguments in the notification
echo Utility %~n0 Deletes user/s on PC: Login %1

rem The basic command to delete a user and substitute arguments in a variable
net user %1 /delete

pause