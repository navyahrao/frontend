import { useState } from 'react';
import InitialView from './components/InitialView';
import RulesModal from './components/RulesModal';
import './RockPaperScissors.css'
import PlayView from './components/PlayView';


const RockPaperScissors = () => {

  const [openModal, setOpenModal] = useState(false);
  const [houseSelected, setHouseSelected] = useState('');
  const [playerSelected, setPlayerSelected] = useState('');
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState(0);

  const getHouseSelected = () => {
    const values = ['paper', 'rock', 'scissors'];
    const randomIndex = Math.floor(Math.random() * values.length);
    return ( values[randomIndex]);
  }

  const handleModal = () => {
    setOpenModal((openModal) => !openModal);
  }

  const handleClick = (playerValue) => {
    const houseValue = getHouseSelected();

    setPlayerSelected(playerValue)
    setHouseSelected(houseValue);
    getWinner(playerValue, houseValue);
  }

  function getWinner(playerValue, houseValue) {
    if (playerValue === houseValue) {
      setWinner("IT IS A DRAW");
    } else if (playerValue === 'paper' && houseValue === 'rock') {
      setWinner('YOU WON');
      setScore((score) => score + 1);
    } else if (playerValue === 'rock' && houseValue === 'scissors') {
      setWinner('YOU WON');
      setScore((score) => score + 1);
    } else if (playerValue === 'scissors' && houseValue === 'paper') {
      setWinner('YOU WON');
      setScore((score) => score + 1);
    } else {
      setWinner('YOU LOSE');
      setScore((score) => score - 1);
    }
}

  return (
    <div className="container">
      <div>
        <div className="header">
          <div className='logo'></div>
          <div className='score-container'>
            <div>SCORE</div>
            <div className='score'>{score}</div>
          </div>
        </div>

        <div>
         
          {playerSelected ?
            <div>
              <PlayView 
                playerSelected={playerSelected} 
                houseSelected={(houseSelected)}
                winner={winner}
                playAgain={() => setPlayerSelected('')}
              />
            </div> 
            : <InitialView  onClick={handleClick}/>
          }  
        </div>

        <div className='rules-container'>
          <div onClick={handleModal}>Rules</div>
        </div>
        {openModal &&
          <RulesModal onClose={() => setOpenModal(false)}/>
        }
      </div>
    </div>
  )
}

export default RockPaperScissors;
