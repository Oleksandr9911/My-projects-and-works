echo the link-Script request was executed
echo.
if "%1"=="" (echo Request time %time%) 
if "%1"=="user" (net user %UserName%)
if "%1"=="proc" (tasklist)
if "%1"=="os" (systeminfo | find /i "OS Name:")
