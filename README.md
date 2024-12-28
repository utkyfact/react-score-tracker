# Player Score Tracker

This project is a **React** application developed using **Vite**. It allows users to add players, assign scores to each player, and store these scores in a `db.json` file. The application also provides functionality to calculate the total scores of all players.

## Features

- **Add Players**: Dynamically add new players to the application.
- **Score Assignment**: Input and update scores for each player.
- **Persistent Storage**: Scores are saved to a `db.json` file.
- **Total Score Calculation**: Automatically calculates and displays the total score of all players.

## Tech Stack

- **Frontend**: React + Vite
- **Data Handling**: JSON file for persistent score storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/utkyfact/react-score-tracker.git
   cd react-score-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Add a player by entering the player's name and clicking the **Add Player** button.
2. Assign or update the score for a player in the provided input field.
3. View the total score of all players at the bottom of the page.

## Project Structure

```
.
├── public
├── src
│   ├── components
│   │   ├── AddPlayer.jsx
│   │   ├── DeletePlayer.jsx
│   │   ├── ResetScore.jsx
│   │   └── Score.jsx
│   ├── App.jsx
│   ├── Index.css
│   └── main.jsx
├── db.json
├── package.json
└── vite.config.js
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build

## Dependencies

- React
- Vite

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Make your changes and commit them.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the React and Vite communities for their amazing tools and support.
