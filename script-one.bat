@echo off

rem echo ^| ======================================
rem echo ^| ��ਯ�: script-one.bat
rem echo ^| ��� �⢮७��: 13.03.2024
rem echo ^| ����: ��� ����ᠭ��
rem echo ^| Email: orudiak@loe.com  
rem echo ^| ======================================
rem echo ^| ����: ����� �ਯ� ������� �������
rem echo ^| ��������� i�'� ��, ���, ������ � 
rem echo ^| ip-����i����i�.
rem echo ^| ======================================

title I��ଠ�i� �� ��
rem | ������� ������, �� 4-�ࢮ���(䮭), 0-�୨�(����)
color 40

echo =======================================
echo =         ip-����i����i� ��          =
echo =======================================

rem | �������� i�'� ��
echo.
hostname
echo.
rem | �i���ࠦ�� ����, �i���� � �i� �� ��
date /t
rem | �i���ࠦ�� ������ �� ��
time /t
ipconfig | findstr /i "wi-fi ipv4 mask gateway"
pause
cmd /k