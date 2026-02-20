import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { MainScene } from './MainScene';

const Game = () => {
  const gameRef = useRef<Phaser.Game | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || gameRef.current) {
      return;
    }

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: containerRef.current,
      width: 800,
      height: 600,
      backgroundColor: '#D3D3D3',
      scene: [MainScene],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false
        }
      },
      pixelArt: true, 
      scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.NO_CENTER
      },
      render: {
        antialias: false,
        pixelArt: true,
        roundPixels: true
      }
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-white p-8">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-serif text-gray-900 mb-2">2D Metaverse</h1>
        <p className="text-sm text-gray-600">Phaser Tilemap Renderer</p>
      </header>
      <div ref={containerRef} className="border border-gray-300" />
    </div>
  );
};

export default Game;
