import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.tilemapTiledJSON('grassMap', '/maps/grass-patch.json');
    
    this.load.image('grassTileset', '/maps/grass-tileset.png');
  }

  create() {
    const map = this.make.tilemap({ key: 'grassMap' });
    
    const tileset = map.addTilesetImage('grasss', 'grassTileset');
    
    if (!tileset) {
      console.error('Failed to load tileset. Make sure the tileset image exists at /maps/grass-tileset.png');
      return;
    }
    
    const layer = map.createLayer('Tile Layer 1', tileset, 0, 0);
    
    if (!layer) {
      console.error('Failed to create layer');
      return;
    }

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    
    console.log('Map loaded successfully!', { 
      width: map.widthInPixels, 
      height: map.heightInPixels,
      tileWidth: map.tileWidth,
      tileHeight: map.tileHeight
    });
  }

  update() {
  }
}
