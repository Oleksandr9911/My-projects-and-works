@echo off
cls

rem | installing the program by condition
 if %computername%==win10 (goto infopc) else (goto noistall)
 goto :EXIT

rem | Conditional installation label
:infopc

%userprofile%\downloads\.exe /verysilent && echo The PC is recognized. Installation complete || echo unexpected error & pause

rem | Label 1: Trigger notification.
:noistall

echo this PC is %computername%, no installation is needed here.

:EXIT
