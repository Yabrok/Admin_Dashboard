import './tickets.scss'
import data from '../../data.js'

export const unresolvedTickets = () => {
  console.log(data);
  return (
    <div className='tickets'>
      <div className='tickets__desc'>
        <h2 className='tickets__title'>
          Unresolved tickets
        </h2>
        <a href='#' className='tickets__link'>
          View details
        </a>
      </div>
      <p className='tickets__group'>
        Group: <span>Support</span>
      </p>
      <ul className='tickets__list'>
        {
          data.map((item) => {
            return (
              <li className='tickets__item'>
                <div className='tickets__box'>
                  <p className='tickets__task'>{item.task}</p>
                  <p className='tickets__value'>{item.value}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default unresolvedTickets;