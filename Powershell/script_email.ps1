﻿Send-MailMessage -From 'sanchosr99@gmail.com' -To 'rudiako99@gmail.com','sanchosr99@gmail.com' -Subject "Alert from Server1" -Body "It is email body" -Attachments "E:\Sanchos\Резюме\Резюме Рудяк О.О\CV Рудяк О.О Системний адміністратор.pdf" –SmtpServer 'smtp.gmail.com' -Port 587 –UseSsl -Credential sanchosr99@gmail.com