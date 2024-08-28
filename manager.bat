@echo off
cls

rem | Scenario condition

if "%1" == "FileTxt" (
 @if "%2" == "%2" goto :createtxtfile)
if "%1" == "Folder" (
 @if "%2" == "%2" goto :createfolder)
if "%1" == "EditTxt" (
 @if "%2" == "%2" goto :createtxtedit)
if "%1" == "User" (
 @if "%2" == "" goto :UserView
 @if "%2" == "%2" call :UserViewPerson %2 %3 %4 %5)
goto :Eof

rem | tutorial on creating a text file
:createtxtfile
type nul > %2.txt
goto :Eof

rem | a guide to creating a catalogue
:createfolder
md %2
goto :Eof

rem | tutorial on creating a text file and editing it
:createtxtedit
copy con %2.txt
goto :Eof

:UserView
net User
goto :Eof

:UserViewPerson
net User %1 %2 %3 %4 %5
goto :Eof
