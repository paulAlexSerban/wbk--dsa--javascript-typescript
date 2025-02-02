interface IGameLoader {
  load(): void;
}

export class GameLoader implements IGameLoader {
  private input: string;

  constructor(input: string) {
    this.input = input
  }

  load() {
    console.log(`Loading game ${this.input}`);
  }
}
export class NextGenGameLoader implements IGameLoader{
  private input: string;

  constructor(input: string) {
    this.input = input
  }

  load() {
    console.log(`Loading next gen. game ${this.input}`);
  }
}

export class PlaystationGame {
  private gameLoader: IGameLoader;
  constructor(gameLoader: IGameLoader) {
    this.gameLoader = gameLoader;
  }

  play() {
    console.log('Playing game on Playstation');
    this.gameLoader.load();
  }
}

