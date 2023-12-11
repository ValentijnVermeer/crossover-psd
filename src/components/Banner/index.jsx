import './styles.css'
import stroke from '../../assets/Stroke.png'

export default function index() {
  return (
    <div className='Banner'>
      <img src={stroke} />
      <div className='Header'>
        <h1><span>PARTY</span> YOUR HEART OUT!</h1>
      </div>
      <div className='textBtn'>
        <p><span>Lorem ipsum dolor, sit amet </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, totam porro sapiente incidunt qui reiciendis magni illum.</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  )
}
