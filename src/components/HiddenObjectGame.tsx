'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { create } from 'zustand';

interface GameState {
  foundItems: string[];
  currentClue: number;
  isGameComplete: boolean;
  addFoundItem: (item: string) => void;
  advanceClue: () => void;
  resetGame: () => void;
}

const useGameStore = create<GameState>((set) => ({
  foundItems: [],
  currentClue: 0,
  isGameComplete: false,
  addFoundItem: (item) =>
    set((state) => ({
      foundItems: [...state.foundItems, item],
      isGameComplete: state.foundItems.length + 1 === gameItems.length,
    })),
  advanceClue: () =>
    set((state) => ({
      currentClue: state.currentClue + 1,
    })),
  resetGame: () =>
    set({
      foundItems: [],
      currentClue: 0,
      isGameComplete: false,
    }),
}));

const gameItems = [
  {
    id: 'ancient-book',
    name: 'Ancient Tome',
    clue: 'A leather-bound volume whispers secrets of forgotten lore...',
    position: { x: 25, y: 35 },
  },
  {
    id: 'quill',
    name: 'Scholar\'s Quill',
    clue: 'The instrument of knowledge lies dormant, waiting to dance across parchment...',
    position: { x: 45, y: 65 },
  },
  {
    id: 'inkwell',
    name: 'Brass Inkwell',
    clue: 'Dark waters of creativity rest in aged metal...',
    position: { x: 35, y: 45 },
  },
  {
    id: 'pocket-watch',
    name: 'Timekeeper',
    clue: 'Time\'s guardian marks the hours of study...',
    position: { x: 85, y: 15 },
  },
  {
    id: 'scroll',
    name: 'Ancient Scroll',
    clue: 'Rolled wisdom from centuries past awaits discovery...',
    position: { x: 85, y: 25 },
  },
];

export default function HiddenObjectGame() {
  const { foundItems, currentClue, isGameComplete, addFoundItem, advanceClue, resetGame } = useGameStore();
  const [showHint, setShowHint] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    if (isGameComplete) {
      setShowCongrats(true);
    }
  }, [isGameComplete]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setClickPosition({ x, y });

    const clickRadius = 5; // Tolerance radius in percentage
    const currentItem = gameItems[currentClue];

    if (currentItem) {
      const distance = Math.sqrt(
        Math.pow(x - currentItem.position.x, 2) + Math.pow(y - currentItem.position.y, 2)
      );

      if (distance < clickRadius && !foundItems.includes(currentItem.id)) {
        addFoundItem(currentItem.id);
        advanceClue();
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#1a1a1a] p-6 rounded-none border-2 border-[#e6d5b8]">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest">The Scholar's Study</h2>
        <p className="text-[#e6d5b8] italic mb-6 font-serif">
          {isGameComplete
            ? "You've uncovered all the secrets..."
            : gameItems[currentClue]?.clue || "Begin your search..."}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#e6d5b8]">
            Found: {foundItems.length}/{gameItems.length}
          </span>
          <button
            onClick={() => setShowHint(true)}
            className="px-4 py-2 border border-[#e6d5b8] hover:bg-[#e6d5b8] hover:text-[#1a1a1a] transition-all text-sm uppercase tracking-wider"
          >
            Request Hint
          </button>
        </div>
      </div>

      <div
        className="relative aspect-[16/9] bg-[#2a2a2a] border border-[#e6d5b8] cursor-pointer"
        onClick={handleImageClick}
      >
        {/* Game scene background */}
        <div className="absolute inset-0 bg-[url('/library-scene.jpg')] bg-cover bg-center opacity-80" />
        
        {/* Click indicator */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1 }}
          className="absolute w-4 h-4 border-2 border-[#e6d5b8] rounded-full"
          style={{
            left: `${clickPosition.x}%`,
            top: `${clickPosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Found items indicators */}
        {foundItems.map((itemId) => {
          const item = gameItems.find((i) => i.id === itemId);
          if (!item) return null;
          return (
            <motion.div
              key={item.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute w-6 h-6 bg-[#e6d5b8] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${item.position.x}%`,
                top: `${item.position.y}%`,
              }}
            />
          );
        })}
      </div>

      {/* Hint Modal */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={() => setShowHint(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1a1a] border-2 border-[#e6d5b8] p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Scholar's Hint</h3>
              <p className="text-[#e6d5b8] italic font-serif mb-6">
                {gameItems[currentClue]?.clue}
              </p>
              <button
                onClick={() => setShowHint(false)}
                className="w-full px-4 py-2 border border-[#e6d5b8] hover:bg-[#e6d5b8] hover:text-[#1a1a1a] transition-all uppercase tracking-wider"
              >
                Continue Search
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Congratulations Modal */}
      <AnimatePresence>
        {showCongrats && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1a1a] border-2 border-[#e6d5b8] p-8 max-w-md w-full text-center"
            >
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">
                Scholarly Achievement
              </h3>
              <p className="text-[#e6d5b8] italic font-serif mb-6">
                You've mastered the art of observation and uncovered all the hidden treasures within
                the scholar's study. Your dedication to detail marks you as a true academic.
              </p>
              <button
                onClick={() => {
                  resetGame();
                  setShowCongrats(false);
                }}
                className="px-6 py-3 border-2 border-[#e6d5b8] hover:bg-[#e6d5b8] hover:text-[#1a1a1a] transition-all uppercase tracking-wider"
              >
                Begin New Study
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
