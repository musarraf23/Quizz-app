const server_url = 'http://localhost:1000';


export async function getQuestions() {
    const questions = await fetch(server_url).then(r=>r.json());
    
    return questions.map(({question, incorrect_answers, correct_answer})=>({
        question,
        options: [correct_answer, incorrect_answers].sort(()=>Math.random() - 0.5),
        answer: correct_answer,    
    }));
}