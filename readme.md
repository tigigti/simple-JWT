<h1>Ablauf der Authentifizierung</h1>
<h2>1. Login und Token erhalten</h2>
<p>
Eine Abfrage wird vom Frontend aus gesendet und man erhält als Antwort ein mit einem Geheimwort codiertes Token. Das Token wird in einer Variablen gespeichert.
</p>
<h2>2. Abfrage mit Token</h2>
<p>
Bei der Post Abfrage wird das erhaltene Token als Header festgelegt und mit dem request mitgeschickt. Der Server hat eine Middleware um das Token zu verifizieren.
</p>
<h2>3. JWT verifizieren</h2>
<p>
Der Server nutzt eine Middleware um das Token zu verifizieren. Sollte es mit dem Geheimwort übereinstimmen und zeitich nicht abgelaufen sein, wird die Anfrage
durchgeführt. Ansonsten wird die Anfrage blockiert.
</p>