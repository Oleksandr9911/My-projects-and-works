@echo off 
cls 

rem | ���i� i��ଠ�i� �� ��. ��।�� ��㬥��i� � 㬮��
if "%1" equ "info" (
@if "%2" equ "" (echo ����i�� ��� ��᪠ �����i��� ������� � ���i info "ver, upd, proc, users, sname")
@if "%2" equ "ver" (ver)
@if "%2" equ "upd" (systeminfo | find /i "OS Name:")
@if "%2" equ "proc" (tasklist)
@if "%2" equ "users" (net user)
@if "%2" equ "sname" (echo Name PC: %computername%) ^| Name session: %username%)
) else ( 
   @if "%1" equ "" (echo ����i�� ��� ��᪠ �����i��� ���� info ��� act)
   )

rem | I�c�㬥��. ��।�� ��㬥��i� � 㬮��
if "%1" equ "act" (
@if "%2" equ "" (echo ����i�� ��� ��᪠ �����i��� ������� � ���i act "find, kill")
@if "%2" equ "find" (where /r c:\windows %3 
@if "%errorlevel%" geq "0" (echo. & echo ���� �����襭��) & pause )
@if "%2" equ "kill" (taskkill /f /im %3.exe /t
@if "%3" equ "/?" (taskkill /?) )
)