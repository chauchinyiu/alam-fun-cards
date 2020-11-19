import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar'
import ImageCarousel from '../Carousel/ImageCarousel' 
import Button from 'react-bootstrap/Button'
import './QuizApp.css';
function QuizApp(props) {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    useEffect(() => {
        // Anything in here is fired on component mount.
        console.log('Quiz props start', props )
        loadCards()
        
	}, [props]);
	

	const loadCards = () => {
		fetch('https://learning-card-api.herokuapp.com/cards')
		.then(res => res.json())
		.then((data) => {
		  console.log("update data", data)
		 
		   generateQuestions(data)
		})
		.catch(console.log)
	}
	const generateQuestions = function(cards) {
		let selectedCards =  getRandomArrayElements(cards, 10)
		console.log("selected cards", selectedCards)
	}
	const getRandomArrayElements = function(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [userAnswer, setUserAnswer] = useState();

	const handleAnswerOptionClick = (answer) => {
		setUserAnswer(answer)
		console.log('user answer',answer)
		if (answer.isCorrect) {
			setScore(score + 1);
		}


	};

	const next = () => {
		setUserAnswer()
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


	return (
        <div>
            <NavBar/>
            <div id='quizApp'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <div>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
						<div className='question-image'>
							<ImageCarousel showThumbs={false} searchText="fruit"/>
						</div>	
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
								<button disabled={userAnswer ? true : false}
								className={
 										userAnswer ?
										answerOption.answerText === userAnswer.answerText ?
										userAnswer.isCorrect ? 'correct':'incorrect'
										: answerOption.isCorrect ? 'correct':'' 
										:''	 
								}
								key={answerOption.answerText}
								 onClick={() => handleAnswerOptionClick(answerOption)} > {answerOption.answerText} </button>
                            ))}
                        </div>
						<Button variant={userAnswer?"dark":"outline-dark"} disabled={userAnswer?false:true}  onClick={() => next()}> Next </Button>

                    </div>
                )}
            </div>
        </div>
	);
}

export default QuizApp