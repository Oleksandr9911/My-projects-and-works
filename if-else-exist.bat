@echo off
cls

rem | Сповiшення за умовою. Ключ exist перев?ряє чи ?снує файл

if /i exist %1 (echo обєкт знайдено) else (echo обєкта не iснує)
rem if /i not exist %1 (echo обєкт знайдено) else (echo обєкта не iснує)
pause