@echo off
cls

rem | creating a folder by condition

if /i exist c:\distrub (echo The object is already created & pause

) else (

    md c:\distrub && echo The object was created || echo unexpected error & pause
	)