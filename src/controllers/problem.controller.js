import { StatusCodes } from  'http-status-codes'
function pingProblemController(req,res) {
    return res.json({message: 'Ping controller is up'});
}

function addProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: 'Not implemented'});
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: 'Not implemented'});
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: 'Not implemented'});
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: 'Not implemented'});
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: 'Not implemented'});
}

export { pingProblemController, addProblem, getProblem, getProblems, deleteProblem, updateProblem }