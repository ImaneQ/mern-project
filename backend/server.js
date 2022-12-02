// https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm
// 27min

// on fait appel à "express" pour acheminer les requêtes http
const express = require('express')
// on créée un module dotenv pour avoir accès à nos variables de 
// configuration nimporte où ds notre app
const dotenv = require('dotenv').config()
// on fait appel à errorHandler en écrivant le chemin
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

// on intialise express 
const app = express()

// pour ajouter un middleware on utilise la formule suivante
//  pour afficher données on parse avec json
app.use(express.json())
//! urlencoded(): méthode express qui reconnait 
// ! les requêtes objets en tant que string ou array
// ! .use() permet de définir les routes dans le fichier goalRoutes.js
app.use(express.urlencoded({ extended: false }))


// tous les chemins d'URL ds le fichier de routes incluront automatiquement ce préfixe
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

// notre app écoute les requêtes sur le port 5000
app.listen(port, () => console.log(`Server started on port ${port} !`))