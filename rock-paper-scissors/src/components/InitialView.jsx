import './InitialView.css'

const InitialView = ({onClick}) => {
  return (
    <div className='initial-view-container'>
      <button className="play-button paper" onClick={() => onClick('paper')}></button>
      <button className="play-button rock" onClick={() => onClick('rock')}></button>
      <button className="play-button scissors" onClick={() => onClick('scissors')}></button>
    </div>
  )
}

export default InitialView;
