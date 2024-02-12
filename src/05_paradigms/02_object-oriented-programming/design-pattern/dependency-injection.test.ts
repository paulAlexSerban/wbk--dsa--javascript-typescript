import { GameLoader, NextGenGameLoader, PlaystationGame } from './dependency-injection';

describe('Dependency Injection', () => {
    it('should load the game', () => {
        const gameLoader = new GameLoader('FIFA 2022');
        const playstationGame = new PlaystationGame(gameLoader);
        const consoleSpy = jest.spyOn(console, 'log');
        playstationGame.play();
        expect(consoleSpy).toHaveBeenCalledWith('Playing game on Playstation');
        expect(consoleSpy).toHaveBeenCalledWith('Loading game FIFA 2022');
    });

    it('should load the next gen game', () => {
        const nextGenGameLoader = new NextGenGameLoader('FIFA 2024');
        const playstationGame = new PlaystationGame(nextGenGameLoader);
        const consoleSpy = jest.spyOn(console, 'log');
        playstationGame.play();
        expect(consoleSpy).toHaveBeenCalledWith('Playing game on Playstation');
        expect(consoleSpy).toHaveBeenCalledWith('Loading next gen. game FIFA 2024');
    });
});
