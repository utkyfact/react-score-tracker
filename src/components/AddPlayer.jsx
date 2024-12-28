import axios from "axios";
import { useState } from "react";


function AddPlayer({ fetchPlayers }) {

    const [newPlayerName, setNewPlayerName] = useState('')

    const addPlayer = async (e) => {
        e.preventDefault()
        if (newPlayerName.trim() !== '') {
          await axios.post('http://localhost:3000/players', {
            name: newPlayerName,
            score: 0
          })
          setNewPlayerName('')
          fetchPlayers()
        }
      }


    return (
        <>
            <form onSubmit={addPlayer} className="flex">
                <input value={newPlayerName} onChange={(e) => setNewPlayerName(e.target.value)} className="border-2 border-r-0 border-blue-600 outline-none rounded-s-lg p-2" placeholder="Add Player"/>
                <button type="submit" className="border-2 border-l-0 border-blue-600 focus:outline-blue-300 rounded-r-lg p-2 text-blue-500 font-bold hover:text-blue-800 px-4 hover:bg-blue-200 duration-700">Add Player</button>
            </form>
        </>
    );
}

export default AddPlayer;