@echo off
cls

rem | ����i襭�� �� 㬮���. ���� defined ������� ��?��� ��祭��

if /i defined %1 (echo ��i��� %1 �����祭�) else (echo ��i��� %1 �������祭�)
rem if /i not defined %1 (echo ��i��� %1 �����祭�) else (echo ��i��� %1 �������祭�)
pause