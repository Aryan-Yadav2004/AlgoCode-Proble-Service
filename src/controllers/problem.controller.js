import NotImplemented from '../errors/notImplemented.error.js';
import { ProblemService } from '../services/index.js'
import { ProblemRepository } from '../repositories/index.js';
import { StatusCodes } from 'http-status-codes';

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res) {
    return res.json({message: 'Ping controller is up'});
}

async function addProblem(req, res, next){
    try {
        console.log("incoming req body",  req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: newproblem
        })
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

async function getProblems(req, res, next) {
    try {
        const problems = await problemService.getAllProblems();
        return  res.status(StatusCodes.CREATED).json({success: true, message: 'Succesfully fetched all the problems', error: {}, data: problems});
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