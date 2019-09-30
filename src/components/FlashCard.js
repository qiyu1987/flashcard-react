import React, {Component} from 'react'
class FlashCard extends Component {
    state = { displayQuestion: true }
    render(){
        const displayQuestion = {display: 'inline'}
        const displayAnswer = {display:'none'}
        displayQuestion.display = this.state.displayQuestion ? 'inline' : 'none'
        displayAnswer.display = this.state.displayQuestion ? 'none' : 'inline'
        // console.log('state displayQuestion',this.state.displayQuestion)
        // console.log(displayQuestion)
        const handleClick = () => {
            this.setState({ displayQuestion: !this.state.displayQuestion }) 
        }
        return (
            <div>
                <p style = {displayQuestion} >
                    Question: {this.props.question}
                </p>
                <p style = {displayAnswer} >
                    Answer: {this.props.answer}
                </p>
                <br></br>
                <button onClick = {handleClick} >Button</button>
            </div>
        
        )
    }
}
export default FlashCard