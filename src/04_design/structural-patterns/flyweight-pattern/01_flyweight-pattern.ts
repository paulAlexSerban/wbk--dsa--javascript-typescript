interface ICourseData {
    title: string;
    user: string;
    completed: boolean;
};

class Course {
    private flyweight: Flyweight;
    private title: string;

    constructor(data: ICourseData) {
        this.flyweight = FlyweightFactory.get(data.user, data.completed);
        this.title = data.title;
    }

    public get user(): string {
        return this.flyweight.user;
    }

    public get completed(): boolean {
        return this.flyweight.completed;
    }

    public get getTitle(): string {
        return this.title;
    }
}

type FlyweightData = {
    user: string;
    completed: boolean;
};

class Flyweight implements FlyweightData {
    public user: string;
    public completed: boolean;

    constructor(user: string, completed: boolean) {
        this.user = user;
        this.completed = completed;
    }
}

class FlyweightFactory {
    private static flyweights: { [key: string]: Flyweight } = {};
    static get(user: string, completed: boolean) {
        if (!FlyweightFactory.flyweights[user + completed]) {
            FlyweightFactory.flyweights[user + completed] = new Flyweight(user, completed);
        }
        return FlyweightFactory.flyweights[user + completed];
    }
}

export { Course, ICourseData, Flyweight, FlyweightData, FlyweightFactory };
