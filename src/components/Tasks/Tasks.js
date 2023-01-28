import plus from '../../assets/images/plus.svg'
import './tasks.scss'
import '../Tickets/tickets.scss'
import { useRef, useState } from 'react'
export const Tasks = () => {

  const value = useRef()
  const typeBtn = useRef()


  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   value: 'gaganchik'
    // },

  ])

  function handleSubmit(evt) {
    evt.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        value: value.current.value
      }
    ])
    value.current.value = '';
  }

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
      <form onSubmit={handleSubmit} className='form__label'>
        <label className='tasks__label'>
          <input ref={value} className='tasks__input' placeholder='Create new task' required/>
          <button type="button" className="plusbtn btn btn-primary p-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img src={plus} />
          </button>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Select status</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h3 className='text-center'>Select status</h3>
                </div>
                <div className='d-flex justify-content-center mb-3'>
                  <button type='button' className='btn text-white btn-warning'>Urgent</button>
                  <button type='button' className='btn text-white mx-3 btn-success'>New</button>
                  <button type='button' className='btn text-white btn-primary'>Default</button>
                </div>
                <button ref={typeBtn} type='submit' className='btn btn-secondary rounded-5 mb-3 mx-3' data-bs-dismiss="modal">+</button>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </label>
      </form>
      {
        todos.length ? (
          <ul className='list-unstyled'>
            {
              todos.map(todo =>
                <li className='tasks__item'>
                  <div className='tickets__box justify-content-start'>
                    <input className='mt-2' type='checkbox' />
                    <p className='todo ms-3'>{todo.value}</p>
                    <button type='button' className='btn text-white btn-success ms-auto'>New</button>
                  </div>
                </li>
              )
            }
          </ul>

        ) : ('')
      }


    </div>
  )
}

export default Tasks;