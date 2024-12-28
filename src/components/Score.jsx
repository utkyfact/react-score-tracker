import { useState } from 'react'
import axios from "axios";
import DeletePlayer from './DeletePlayer';

function Score({ player, fetchPlayers }) {

    const [inputScores, setInputScores] = useState({})


    const handleScoreSubmit = async (id, currentScore, e) => {
        e.preventDefault()
        const inputValue = inputScores[id] || "0"
        setInputScores({ ...inputScores, [id]: "" })

        const scoreToAdd = parseInt(inputValue) || 0
        const newScore = currentScore + scoreToAdd

        try {
            await axios.patch(`http://localhost:3000/players/${id}`, {
                score: newScore
            })
            fetchPlayers()
        } catch (error) {
            console.error('Score Updated Error:', error)
        }
    }

    return (
        <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
            <form onSubmit={(e) => handleScoreSubmit(player.id, player.score, e)}>
                <input value={inputScores[player.id] || ""}
                    onChange={(e) => setInputScores({
                        ...inputScores,
                        [player.id]: e.target.value
                    })}
                    type="number"
                    placeholder='Add Score'
                    className='w-36 md:w-32 text-center border-2 md:border-r-0 border-blue-600 outline-none md:rounded-s-lg p-2 md:p-3' />
            </form>
            <button
                onClick={(e) => handleScoreSubmit(player.id, player.score, e)}
                className='border-2 md:border-l-0 md:border-r-0 border-blue-600 outline-none text-blue-500 font-bold hover:text-white px-4 bg-white hover:bg-blue-600 duration-700 w-36 p-2 md:p-0'>Add Score
            </button>

            <DeletePlayer fetchPlayers={fetchPlayers} player={player} />

        </div>
    );
}

export default Score;