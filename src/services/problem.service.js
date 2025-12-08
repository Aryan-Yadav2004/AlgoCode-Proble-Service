import { sanitizeMarkdown } from "../utils/index.js";

class ProblemService {
    constructor (problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try {
            // 1. Sanitize the markdown for description.
            problemData.description = sanitizeMarkdown(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);
            console.log(problem);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default ProblemService;