const express = require('express');
const path = require('path');
const app = express();

//parsear json y urlencode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//elimina el cache 
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

//Uso de archivos estaticos
app.use(express.static(path.join(__dirname, '../public')));

//ruta para el menu principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'));
});

//Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

//Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});