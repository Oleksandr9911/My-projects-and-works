@echo off
cls

rem | Сповiшення за умовою. Ключ defined визначає зм?нну оточення

if /i defined %1 (echo змiнну %1 визначено) else (echo змiнну %1 невизначено)
rem if /i not defined %1 (echo змiнну %1 визначено) else (echo змiнну %1 невизначено)
pause