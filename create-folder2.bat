@echo off
cls

rem | creating a folder by condition

if /i exist c:\distrub (echo The object is already created & pause

) else (

    md c:\distrub && copy \\SRV22\distrub\*.* c:\distrub && c:\distrub\notepad^+.exe /verysilent && program installed  & pause
	)