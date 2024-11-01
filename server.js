const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 8080;

// Endpoint to start the Firestore emulator
app.get('/start-emulator', (req, res) => {
    exec('firebase emulators:start --only firestore --host 0.0.0.0', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting emulator: ${error}`);
            return res.status(500).send('Error starting emulator');
        }
        console.log(`Emulator started:\n${stdout}`);
        res.send('Firestore emulator started');
    });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
