import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game';
import Header from './header';
import GuessList from './guess-list';
import GuessCount from './guess-count';
import GuessSection from './guess-section';

describe('<Game />', () => {
  
  it('Renders without an error', () => {
    shallow(<Game />);
  })

  it('Has the right initial state', () => {
    const renderedGameState = shallow(<Game />).state();
    expect(Array.isArray(renderedGameState.guesses)).toBe(Array.isArray([]));
    expect(renderedGameState.feedback).toBe('Make your guess!');
    expect(renderedGameState.correctAnswer).toBeGreaterThan(0);
    expect(renderedGameState.correctAnswer).toBeLessThanOrEqual(100);
  })

  it ('Resets the state after new game', () => {
    const renderedGameInstance = shallow(<Game />).instance();
    console.log(renderedGameInstance.newGame);
    const firstAnswer = renderedGameInstance.state.correctAnswer;
    renderedGameInstance.newGame();
    const newAnswer = renderedGameInstance.state.correctAnswer;
    console.log(firstAnswer, newAnswer);
    expect(firstAnswer).not.toEqual(newAnswer);
  })

  it ('Sets state properly when passed a NaN value as a guess', () => {
    const renderedGameInstance = shallow(<Game />).instance();
    renderedGameInstance.guess(NaN);
    expect(renderedGameInstance.state.feedback). toBe('Please enter a valid number');

  })

  it ('Sets state properly when passed a number that is 50 away from the correct answer', () => {
    const renderedGameInstance = shallow(<Game />).instance();
    const correctAnswer = renderedGameInstance.state.correctAnswer;
    const currentGuess = correctAnswer + 50;
    renderedGameInstance.guess(currentGuess);
    expect(renderedGameInstance.state.feedback).toBe(`You're Ice Cold...`);
    expect(renderedGameInstance.state.guesses[renderedGameInstance.state.guesses.length-1]).toEqual(currentGuess);

  })

  it ('Sets state properly when passed a number that is 30 away from the correct answer', () => {
    const renderedGameInstance = shallow(<Game />).instance();
    const correctAnswer = renderedGameInstance.state.correctAnswer;
    const currentGuess = correctAnswer + 30;
    renderedGameInstance.guess(currentGuess);
    expect(renderedGameInstance.state.feedback).toBe(`You're Cold...`);
    expect(renderedGameInstance.state.guesses[renderedGameInstance.state.guesses.length-1]).toEqual(currentGuess);

  })

  it ('Sets state properly when passed a number that is 10 away from the correct answer', () => {
    const renderedGameInstance = shallow(<Game />).instance();
    const correctAnswer = renderedGameInstance.state.correctAnswer;
    const currentGuess = correctAnswer + 10;
    renderedGameInstance.guess(currentGuess);
    expect(renderedGameInstance.state.feedback).toBe(`You're Warm`);
    expect(renderedGameInstance.state.guesses[renderedGameInstance.state.guesses.length-1]).toEqual(currentGuess);

  })

  it ('Sets state properly when passed a number that is 1 away from the correct answer', () => {
    const renderedGameInstance = shallow(<Game />).instance();
    const correctAnswer = renderedGameInstance.state.correctAnswer;
    const currentGuess = correctAnswer + 1;
    renderedGameInstance.guess(currentGuess);
    expect(renderedGameInstance.state.feedback).toBe(`You're Hot!`);
    expect(renderedGameInstance.state.guesses[renderedGameInstance.state.guesses.length-1]).toEqual(currentGuess);

  })

  it ('Sets state properly when passed a number that is the correct answer', () => {
    const renderedGameInstance = shallow(<Game />).instance();
    const correctAnswer = renderedGameInstance.state.correctAnswer;
    renderedGameInstance.guess(correctAnswer);
    expect(renderedGameInstance.state.feedback).toBe(`You got it!`);
    expect(renderedGameInstance.state.guesses[renderedGameInstance.state.guesses.length-1]).toEqual(correctAnswer);

  })

  it ('Renders the GuessCount component', () => {
    const renderedGame = shallow(<Game />);
    expect(renderedGame.contains([<GuessCount count={0} />])).toEqual(true);
  })

  it ('Renders the Header component', () => {
    const renderedGame = shallow(<Game />);

    const gameInstance = shallow(<Game />).instance();
    

    expect(renderedGame.contains([<Header onNewGame={() => {gameInstance.newGame()}} />]))
  })

  it ('Renders the GuessSection component', () => {
    const renderedGame = shallow(<Game />);
    
    expect(renderedGame.equals([<GuessSection feedback={renderedGame.state().feedback} />])).toEqual(true)
  })

  it ('Renders the GuessList component', () => {
    const renderedGame = shallow(<Game />);
    
    expect(renderedGame.contains([<GuessList feedback={renderedGame.state().guesses} />]))
  })

})

