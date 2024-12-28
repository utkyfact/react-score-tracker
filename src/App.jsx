import { useState, useEffect } from 'react'
import AddPlayer from './components/AddPlayer'
import axios from "axios";
import Score from './components/Score';
import ResetScores from './components/ResetScores';

function App() {

  const [players, setPlayers] = useState([])

  // Oyuncuları getir
  useEffect(() => {
    fetchPlayers()
  }, [])

  const fetchPlayers = async () => {
    const response = await axios.get('http://localhost:3000/players')
    setPlayers(response.data)
  }



  return (
    <>
      <h1 className='font-bold text-4xl text-center my-4'>Score Tracker</h1>
      <div className='flex gap-10 justify-around py-6'>
        <AddPlayer fetchPlayers={fetchPlayers} />
      </div>
      <div className='flex justify-center md:justify-end px-5 mb-4'>
        <ResetScores players={players} fetchPlayers={fetchPlayers} />
      </div>

      <div className="flex flex-col gap-4 p-4">
        {players.map((player) => (
          <div
            key={player.id}
            className="border-2 border-blue-500 p-4 rounded-xl flex items-center justify-center md:justify-between gap-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <span
                className="font-bold text-md md:text-xl break-words text-center md:text-left max-w-xs"
              >
                {player.name}
              </span>
              <span className="text-gray-600">Total: {player.score}</span>
            </div>
            <Score fetchPlayers={fetchPlayers} player={player} />
          </div>
        ))}
      </div>

    </>
  )
}

export default App
