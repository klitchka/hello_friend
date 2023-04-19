import LikeButton from './Button';
import HappyButton from './HappyButton';
import LoveButton from './LoveButton';
import HealthyButton from './HealthyButton';

const name = 'Klitchka';

export const MainSquare = ({ title }) => {
  
  return (
    <header>
      <h1>Hello, {name}</h1>
      <h1 style={questions}>Are you happy?<HappyButton />
      </h1>
      <h1 style={questions}>Are you in love?<LoveButton />
      </h1>
      <h1 style={questions}>Are you healthy?<HealthyButton />
      </h1>
      <br></br>
      <p>{title}</p>
      <LikeButton text='Give Love' />
    </header>
  )
}

MainSquare.defaultProps = {
  title: "holi",
}

/*const mainstyle = {
  color: 'black', 
  backgroundColor: 'white'
}*/

const questions = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '16px'
}
