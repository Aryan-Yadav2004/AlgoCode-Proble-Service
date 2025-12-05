import { StatusCodes } from  'http-status-codes'
import NotImplemented from '../errors/notImplemented.error.js';
function pingProblemController(req,res) {
    return res.json({message: 'Ping controller is up'});
}

function addProblem(req, res, next){
    try {
        // noting implemented
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        // noting implemented
        throw new NotImplemented('getProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        // noting implemented
        throw new NotImplemented('getProblems');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        // noting implemented
        throw new NotImplemented('deleteProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        // noting implemented
        throw new NotImplemented('updateProblem');
    } catch (error) {
        next(error);
    }
} 

export { pingProblemController, addProblem, getProblem, getProblems, deleteProblem, updateProblem }