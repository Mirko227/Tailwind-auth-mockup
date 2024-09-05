### Come Funziona:

1. **Blocco di codice**: Il codice è racchiuso tra tre backtick \`\`\`.
2. **Specificare la sintassi**: Dopo i tre backtick iniziali, aggiungi `bash` per indicare che il codice è Bash. Questo permette a GitHub di applicare l'evidenziazione della sintassi appropriata.
3. **Scrivi il tuo codice**: Inserisci il codice Bash all'interno del blocco.

### Output nel file Markdown:

Nel file Markdown su GitHub, il codice apparirà con l'evidenziazione della sintassi corretta, rendendolo più leggibile per gli sviluppatori.

### Risultato su GitHub:

```bash
#!/bin/bash

# Update and upgrade the system
sudo apt-get update && sudo apt-get upgrade -y

# Install necessary packages
sudo apt-get install -y git curl

# Clone the repository
git clone https://github.com/username/repository.git

# Navigate to the project directory
cd repository

# Run the setup script
./setup.sh
