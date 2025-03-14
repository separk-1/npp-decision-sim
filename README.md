# NPP Decision Simulation

## 📌 Project Overview
**NPP Decision Simulation** is an interactive simulation inspired by the **Three Mile Island (TMI-2) nuclear accident.**
The project explores concepts like **Shared Mental Model** and **Cognitive Alignment,** illustrating how operators' beliefs can evolve over time, leading to either safe decision-making or catastrophic failure.

This simulation allows players to experience the decision-making challenges that nuclear power plant operators face, highlighting how small initial misunderstandings can escalate into major incidents.

## 🚀 Features & Simulation Flow
### 1️⃣ **Initial Scenario**
- The simulation begins right after a reactor shutdown when the **Pressure Operated Relief Valve (PORV) remains open.**
- Team members hold different interpretations of the situation, and the player must navigate these conflicting beliefs.

### 2️⃣ **Belief Formation & Evolution**
- Each decision the player makes influences **the shared mental model of the team.**
- If incorrect beliefs are reinforced, operators may dismiss critical warning signals.

### 3️⃣ **Key Decision Points**
- *Should we trust the valve closure indicator?*
- *Is the coolant level sufficient?*
- *Should the cooling pumps be turned off due to excessive vibrations?*

### 4️⃣ **Outcomes**
- **Correct decisions prevent accidents,** while reinforcing **faulty shared beliefs** leads to disaster.
- The simulation offers **multiple endings** based on the decisions taken.

## 🛠️ Tech Stack
- **Frontend:** React (Vite-based)
- **State Management:** Zustand
- **Routing:** React Router
- **Animations:** Framer Motion

## 📂 Project Structure
```
npp-decision-sim/
│── public/                    # Static files (images, icons, etc.)
│── src/                       # Source code folder
│   │── context/               # State management using Zustand
│   │   └── SimulationStore.js  # Stores team belief states
│   │── pages/                 # Page components
│   │   ├── Home.jsx           # Main landing page
│   │   ├── Simulation.jsx     # Interactive simulation screen
│   │   ├── Results.jsx        # Simulation results and analysis
│   │── App.jsx                 # Main app routing
│   │── main.jsx                # React entry point
│── package.json               # Project dependencies
│── vite.config.js              # Vite configuration
│── README.md                   # Project documentation
```

## 🏗️ Installation & Running the Project
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/npp-decision-sim.git
cd npp-decision-sim
```
### 2️⃣ **Install Dependencies**
```sh
npm install
```
### 3️⃣ **Run the Local Development Server**
```sh
npm run dev
```
- By default, the project runs on `http://localhost:5173`.

## 🎯 Objectives & Impact
- **Analyzing Cognitive Errors in Nuclear Accidents:**
  - Understanding how shared mental models can lead to incorrect decision-making.
- **Training Tool for Nuclear Operators:**
  - Helps operators recognize cognitive misalignment in high-risk environments.
- **Visualizing Belief Evolution in Decision-Making:**
  - Demonstrates how faulty logic escalates over time.

## 📜 License
This project is licensed under the **MIT License.**

## 🤝 Contributing
Contributions are welcome! If you’d like to improve the simulation, please open an issue or submit a pull request.

