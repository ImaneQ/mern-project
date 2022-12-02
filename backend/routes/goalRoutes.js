// /le ROUTER aide à créer une liste de toutes les routes d'appli et à 
// les associer à un fichier de contrôleur contenant  le code d'implémentation
// dans ce fichier on met toutes nos routes pour 1 ressource en particulier ici GOALS

// on récupère express
const express = require('express')
// on crée d'abord une instance de l'objet Router
const router = express.Router()
// ensuite on importe toutes les fonctions du contrôleur 

const {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal } = require('../controllers/goalController')
// ('..') pour revenir en arrière



// ! routage fait référence à la détermination de la façon dont une appli répond à un noeud final => URI(ou chemin)
// ! et une méthode de requête HTTP(GET,POST,etc)
//**************/ definition de la route : app.METHOD(PATH, HANDLER)
//******/ app = instance d'express
//******/ METHOD = méthode de demande HTTP
//******/ PATH = chemin sur le serveur
//*****/ HANDLER = fonction éxecutée lorsque la route est mise en correspondance 
// get est la requête qu'on veut écouter, (req,res) 2e argument de get()
//  qui prend comme variable req et res

// ! route racine(/)
// on utilise l'objet router pour créer une association de route et de contrôleur 
router.route('/').get(getGoal).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)


module.exports = router