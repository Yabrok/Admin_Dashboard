import './myBox.scss'

import Tickets from '../Tickets/Tickets'
import { Tasks } from '../Tasks'

export const myBox = () => {
  return(
    <section className='details'>
      <Tickets/>
      <Tasks/>
    </section>
  )
}

export default myBox;