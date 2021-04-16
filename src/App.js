import './App.scss';
import { useEffect, useState } from 'react';
import DaysNav from './componentes/daysNav.js';
import AddForm from './componentes/addForm.js';
import { useForm } from './useForm.js';
import TaskList from './componentes/task';


const stringfyDate = (d = new Date()) => {
  const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`
  const days = d.getDate().length > 1 ? `${d.getDate()}` : `0${d.getDate()}`

  const dateString = `${d.getFullYear()}`.concat('-', month, '-', days);
  return dateString;
}

function App() {
  const [values, setValues] = useForm({ task: '', date: stringfyDate() })
  const [list, setList] = useState([{
    date: '2021-04-04',
    tasks: ['take gabo out']
  }]);
  const today = new Date();

  function moveDown(e) {
    const form = document.querySelector('.add-form');
    const listHeight = document.querySelector('.task-list').getBoundingClientRect().height;
    const formHeight = form.getBoundingClientRect().height;
    const container = document.querySelector('.add-container');
    form.style.setProperty('opacity', '1');
    container.classList.add('active')
    const icon = e.target;
    icon.classList.add('icon-rot');
    container.style.setProperty('transform', `translateY(-${listHeight}px)`);
    if (values.task) {
      handleSubmit(values);
      // setValues({ task: '', date: '' });
      const ListofTasks = document.querySelector('.task-list');
      container.style.setProperty('transform', `translateY(0`);
      ListofTasks.classList.add('list-active');
      setTimeout(() => {
        ListofTasks.style.setProperty('opacity', '1');
      }, 400)
    }

  }

  const handleSubmit = (newTask) => {
    const indexOfItem = list.findIndex(item => item.date === newTask.date);
    console.log(indexOfItem);
    indexOfItem >= 0 ? setList(list.map((item, index) => {
      return index == !indexOfItem ? item : { date: item.date, tasks: [...item.tasks, newTask.task] }
    }))
      : setList([...list, { date: newTask.date, tasks: [newTask.task] }]);

  }

  useEffect(() => {
    // handleSubmit({ name: 'pipa' });
    console.log(list)
    const container = document.querySelector('.add-container');

    console.log(container)
    const form = document.querySelector('.add-form');
    const ListofTasks = document.querySelector('.task-list');
    const listHeight = ListofTasks.getBoundingClientRect().height;
    console.log('Height of list' + listHeight);
    const formCoords = form.getBoundingClientRect();
    container.style.setProperty('transform', `translateY(-${formCoords.height + listHeight}px)`);

  }, [])

  useEffect(() => {
    if (values.task !== '') {
      const container = document.querySelector('.add-container');
      container.classList.remove('active');
      const task = document.querySelector('.task-list');
      // const taskHeight = task.getBoundingClientRect().height;
      // container.style.setProperty('transform', `translateY(-${taskHeight}px)`);
    }
  }, [values])

  // useEffect(() => {
  //   const icon = document.querySelector('.AddIcon')
  //     const hello = () => {
  //         console.log('hello');
  //     }
  //     document.addEventListener('click', hello)
  // }, [])
  // const iconDiv = document.querySelector('.add-icon');

  return (
    <div className="App">

      <p>HOLA MUNDO como estas ?</p>
      <div className='main-container' >
        <DaysNav date={today}></DaysNav>
        <TaskList list={list}></TaskList>
        <AddForm moveDown={moveDown} values={values} setValues={setValues}  ></AddForm>

      </div>
    </div>
  );
}


export default App;
