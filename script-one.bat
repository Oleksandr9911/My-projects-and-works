@echo off

rem echo ^| ======================================
rem echo ^| Скрипт: script-one.bat
rem echo ^| Дата створення: 13.03.2024
rem echo ^| Автор: Рудяк Олександр
rem echo ^| Email: orudiak@loe.com  
rem echo ^| ======================================
rem echo ^| Опис: даний скрипт виконує команди
rem echo ^| виведення iм'я ПК, дати, години та 
rem echo ^| ip-конфiгурацiю.
rem echo ^| ======================================

title Iнформацiя про ПК
rem | команда кольору, де 4-червоний(фон), 0-чорний(шрифт)
color 40

echo =======================================
echo =         ip-конфiгурацiя ПК          =
echo =======================================

rem | Виводить iм'я ПК
echo.
hostname
echo.
rem | Вiдображає дату, мiсяць та рiк на ПК
date /t
rem | Вiдображає годину на ПК
time /t
ipconfig | findstr /i "wi-fi ipv4 mask gateway"
pause
cmd /k