import axios from "axios";



function ResetScores({ players,fetchPlayers }) {

    const resetScores = async () => {
        try {
          await Promise.all(
            players.map(player =>
              axios.patch(`http://localhost:3000/players/${player.id}`, {
                score: 0
              })
            )
          )

          fetchPlayers()
        } catch (error) {
          console.error('Reset Error:', error)
        }
      }


    return (
        <>
            <button
                onClick={resetScores}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-bold"
            >
                Reset Scores
            </button>
        </>
    );
}

export default ResetScores;