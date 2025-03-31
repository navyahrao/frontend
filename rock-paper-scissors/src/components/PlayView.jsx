import './PlayView.css';

const PlayView = ({playerSelected, houseSelected, winner, playAgain}) => {

  const getWinner = () => {
      if(winner) {
        return (
          <>
            <div>{winner}</div>
            <button className="play-again" onClick={playAgain}>PLAY AGAIN</button>
          </>
        )
      }
  }

  return (
    <>
      <div className="play-view-container">
        <div className='play-view-content'>
          <div>YOU PICKED</div>
          <button className={`play-button ${playerSelected}`}></button>
        </div>

        <div className='desktop play-view-content'>{getWinner()}</div>

        <div className='play-view-content'>
          <div>THE HOUSE PICKED</div>
          <button className={`play-button ${houseSelected}`}></button>
        </div>
      </div>

      <div className='mobile play-view-content'>{getWinner()}</div>
    </>
  )
}

export default PlayView;
