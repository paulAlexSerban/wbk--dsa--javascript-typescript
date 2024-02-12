interface GameLoaderType {
  load(): void;
}

export class GameLoader implements GameLoaderType {
  private input: string;

  constructor(input: string) {
    this.input = input
  }

  load() {
    console.log(`Loading game ${this.input}`);
  }
}
export class NextGenGameLoader implements GameLoaderType{
  private input: string;

  constructor(input: string) {
    this.input = input
  }

  load() {
    console.log(`Loading next gen. game ${this.input}`);
  }
}

export class PlaystationGame {
  private gameLoader: GameLoaderType;
  constructor(gameLoader: GameLoaderType) {
    this.gameLoader = gameLoader;
  }

  play() {
    console.log('Playing game on Playstation');
    this.gameLoader.load();
  }
}

