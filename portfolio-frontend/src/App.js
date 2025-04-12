import './App.css';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <motion.h1
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Portfolio
      </motion.h1>
    </div>
  );
}

export default App;
