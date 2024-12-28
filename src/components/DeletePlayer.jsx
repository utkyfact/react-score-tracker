import axios from "axios";


function DeletePlayer({ player,fetchPlayers }) {

    const deletePlayer = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/players/${id}`)
          fetchPlayers()
        } catch (error) {
          console.error('Player Delete Error:', error)
        }
      }

    return ( 
        <>
            <button
                onClick={() => deletePlayer(player.id)}
                className="border-2 md:border-l-0 border-blue-600 md:rounded-r-lg bg-white hover:bg-red-600 text-red-600 font-bold hover:text-white px-4  duration-700 w-36 p-2 md:p-0"
              >
                Delete Player
            </button>
        </>
     );
}

export default DeletePlayer;