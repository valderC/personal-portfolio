const express = require('express'); 
const app = express(); 

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`connected on port: ${port}`)
})

// Serve files from the project root so `index.html` at repo root is accessible
app.use(express.static(__dirname)); 