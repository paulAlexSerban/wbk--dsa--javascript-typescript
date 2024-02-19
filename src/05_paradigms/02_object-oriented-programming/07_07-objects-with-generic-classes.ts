(() => {
interface IVideo {
    title: string;
    description: string;
    url: string;
    data: string;
}

interface ISong {
    title: string;
    description: string;
    url: string;
    data: string;
}

class Playlist<T> {
    constructor(public name: string, public videos: T[]) {}

    get playlistName() {
        return this.name;
    }

    get playlistVideos() {
        return this.videos;
    }

    changePlaylistName(newName: string) {
        this.name = newName;
    }
}

const playlist = new Playlist<IVideo>("My Playlist", [
    {
        title: "TypeScript",
        description: "Learn TypeScript",
        url: "https://www.typescriptlang.org/",
        data: "2021-01-01",
    },
    {
        title: "React",
        description: "Learn React",
        url: "https://reactjs.org/",
        data: "2021-01-01",
    },
    {
        title: "Node",
        description: "Learn Node",
        url: "https://nodejs.org/en/",
        data: "2021-01-01",
    }])

console.log(playlist.playlistName)
console.log(playlist.playlistVideos)
playlist.changePlaylistName("My New Playlist")
console.log(playlist.playlistName)

const playlist2 = new Playlist<ISong>("My Playlist", [
    {
        title: "TypeScript",
        description: "Learn TypeScript",
        url: "https://www.typescriptlang.org/",
        data: "2021-01-01",
    }])

console.log(playlist2.playlistName)

})()