# 🧩 React Tic-Tac-Toe

A clean, modern implementation of Tic-Tac-Toe built with **React + Vite**.  
Play locally or try it live on Render: **https://react-tic-tac-toe-b8v0.onrender.com**

---

<p align="center">
  <a href="https://react.dev/"><img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000"></a>
  <a href="https://vitejs.dev/"><img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff"></a>
  <a href="https://eslint.org/"><img alt="ESLint" src="https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=fff"></a>
  <a href="https://render.com/"><img alt="Render" src="https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render&logoColor=000"></a>
  <img alt="Language" src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=000">
  <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
</p>

---

## ✨ Features

- 3×3 interactive board with click-to-play
- Player name editing (inline Edit → Save)
- Turn highlighting (whose move it is)
- Winner detection + game-over screen
- Move log (row/column history)
- Draw detection
- Clean, immutable state updates (React-friendly)

> _Intentionally **no GenAI** here—this project practices core React state & logic._

---

## 🚀 Live

**Render:** https://react-tic-tac-toe-b8v0.onrender.com

---

## 📦 Tech Stack

- **React 19** + **Vite 7**
- **ESLint 9** (with react-hooks & react-refresh plugins)
- Pure JavaScript (no state libs)

---

## 🖼️ Preview

> Add a screenshot or short GIF here:
>
> ```
> /public/preview.png
> ```
> 
> ```md
> ![Preview](public/preview.png)
> ```

---

## 🧠 How it works (quick tour)

### Components

- **`App.jsx`** – the referee. Holds state: `boardGame`, `activePlayer`, `log`, derived `winner` & `isDraw`.  
- **`components/Gameboard.jsx`** – renders the 3×3 grid; calls `onSelectSquare(r,c)` when a legal move is clicked.  
- **`components/Player.jsx`** – name badge with inline edit (Edit/Save) and “active” highlight.  
- **`components/Log.jsx`** – shows move history (player, row, column).  
- **`components/GameOver.jsx`** – appears on win/draw with a **Rematch** button.  
- **`utils/checkWinner.js`** – returns `"X"`, `"O"`, or `null` from the current board.

### Game flow (1 move = 3 steps)

1. Player clicks a cell → `Gameboard` calls `onSelectSquare(row,col)`.  
2. `App` verifies the cell is empty & game isn’t over, then:
   - Updates the board **immutably** (makes a copy, sets the cell).
   - Logs the move.
   - Toggles `activePlayer`.
3. Derived state recomputes `winner` / `isDraw`, UI reacts.

---

## 🧪 Winner logic (simplified)

```js
// utils/checkWinner.js
export function checkWinner(board) {
  // rows & cols
  for (let i = 0; i < 3; i++) {
    // row
    if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      return board[i][0];
    }
    // col
    if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      return board[0][i];
    }
  }
  // diagonals
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) return board[0][0];
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) return board[0][2];
  return null;
}
