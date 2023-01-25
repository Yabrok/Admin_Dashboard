import data from '../../data.js'


export const Tasks = () => {


  return (
    <div className='tickets'>
      <div className='tickets__desc'>
        <h2 className='tickets__title'>
          Tasks
        </h2>
        <a href='#' className='tickets__link'>
          View all
        </a>
      </div>
      <p className='tickets__group'>
        Today
      </p>
      {/* <ul className='tickets__list'>
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
      </ul> */}
    </div>
  )
}

export default Tasks;