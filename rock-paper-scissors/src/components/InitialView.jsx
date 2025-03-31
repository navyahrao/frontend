import './InitialView.css'

const InitialView = ({onClick}) => {
  return (
    <div className='initial-view-container'>
      <button className="play-button paper" aria-label="paper" onClick={() => onClick('paper')}></button>
      <button className="play-button rock" aria-label="rock" onClick={() => onClick('rock')}></button>
      <button className="play-button scissors" aria-label="scissors"  onClick={() => onClick('scissors')}></button>
    </div>
  )
}

export default InitialView;
