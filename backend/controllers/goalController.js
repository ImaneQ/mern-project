const asyncHandler = async
// description: Get goal
// route: GET/ api/goals
// access: private

const getGoal = async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}


// description: Set goal
// route: POST/ api/goals
// access: private

const setGoal = async (req, res) => {
     console.log(req.body);
    // on a une propriété body dans req
    // condition si il n'y a pas de texte dans le champ texte 
   if(!req.body.text){
    // client error 400 ou bad request
    res.status(400)
    throw new Error('Please add a text field')
   }

    res.status(200).json({ message: 'Set goal' })
}

// description:UPDATE goal
// route: PUT/ api/goals/:id
// access: private

const updateGoal = async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// description: Delete goal
// route: GET/ api/goals/:id
// access: private

const deleteGoal = async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

//! avec module.exports on exporte les composants
// ! afin de pouvoir les utiliser ailleurs ds notre appli

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}