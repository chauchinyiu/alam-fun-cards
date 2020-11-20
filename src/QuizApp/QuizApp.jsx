import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar'
import ImageCarousel from '../Carousel/ImageCarousel' 
import Button from 'react-bootstrap/Button'
import './QuizApp.css';
import {getRandomArrayElements, removeItemOnce, shuffle} from '../Utility/Utils'

function QuizApp(props) {

	const [questions, setQuestions] = useState([{id_text:"loading ...", answerOptions:[{id_answer :"wait", answerText: "wait"}]}])
	const [language, setLanguage] = useState("en")
    useEffect(() => {
        // Anything in here is fired on component mount.
		console.log('Quiz props start', props )
		const lang = props.match.params.lang;
		setLanguage(lang)
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
		var result = []
		for (var i = 0; i < selectedCards.length; i++) {
			 
			 var answerOptions = [{id_answer: selectedCards[i].english, answerText: answerTextByLanguage(selectedCards[i])}]
			 var othercards = removeItemOnce(selectedCards, selectedCards[i])
			 var options = getRandomArrayElements(othercards, 3)
			  
			 for(var j=0; j < options.length; j++) {
				 answerOptions.push({id_answer: options[j].english, answerText : answerTextByLanguage(options[j])})
			 }
			 
			 let questionObject = {id_text: selectedCards[i].english,  answerOptions: shuffle(answerOptions)}
			 result.push(questionObject)
		 }
		 console.log("Generate Question ::::::", result)
		 setQuestions(result)
	}
	
	const answerTextByLanguage = function (card) {

		if (language === 'zh-hk') {
			return card.chinese
		} else if (language === 'de') {
			return card.german 
		} else {
			return card.english
		}
	}

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [userAnswer, setUserAnswer] = useState();

	const handleAnswerOptionClick = (answer, id_text) => {
		setUserAnswer(answer)
		console.log('user answer',answer)
		if (answer.id_answer === id_text) {
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
                            <div className='question-text'>What is this?</div>
                        </div>
						<div className='question-image'>
							<ImageCarousel showThumbs={false} searchText={questions[currentQuestion].id_text}/>
						</div>	
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
								<button disabled={userAnswer ? true : false}
								className={
 										userAnswer ?
										answerOption.id_answer === userAnswer.id_answer ?
										userAnswer.id_answer === questions[currentQuestion].id_text ? 'correct':'incorrect'
										: answerOption.id_answer === questions[currentQuestion].id_text ? 'correct':'' 
										:''	 
								}
								key={answerOption.id_answer}
								 onClick={() => handleAnswerOptionClick(answerOption, questions[currentQuestion].id_text)} > {answerOption.answerText} </button>
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