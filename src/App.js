import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
          {
              id: 1,
              text: 'Doctro Appt',
              day: 'May 5th at 2:30pm',
              reminder: true,
          },
          {
              id: 2,
              text: 'Meeting with Angela',
              day: 'May 12th at 3:30pm',
              reminder: true,
          },
          {
              id: 3,
              text: 'Vet Appointment',
              day: 'May 25th at 10:30am',
              reminder: true,
          },
          {
              id: 4,
              text: 'Grocery Shopping',
              day: 'May 10th at 12:30pm',
              reminder: false,
          }
      ])

  return (
    <div className="container">
      <Header />   
      <Tasks tasks={tasks}/>   
    </div>
  );
}

export default App;
