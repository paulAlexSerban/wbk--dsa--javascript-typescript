interface IWeaponBehavior {
    useWeapon(): void;
}

class KnifeBehavior implements IWeaponBehavior {
    useWeapon() {
        console.log('Knife');
    }
}

class SwordBehavior implements IWeaponBehavior {
    useWeapon() {
        console.log('Sword');
    }
}

class AxeBehavior implements IWeaponBehavior {
    useWeapon() {
        console.log('Axe');
    }
}

class BowAndArrowBehavior implements IWeaponBehavior {
    useWeapon() {
        console.log('Bow and Arrow');
    }
}

abstract class Character {
    protected weaponBehavior: IWeaponBehavior;
    constructor(weapon: IWeaponBehavior) {
        this.weaponBehavior = weapon;
    }

    abstract fight(): void;
    setWeapon(weapon: IWeaponBehavior) {
        this.weaponBehavior = weapon;
    }
}

class King extends Character {
    constructor(weapon: IWeaponBehavior) {
        super(weapon);
    }

    fight() {
        console.log('I am a King');
        this.weaponBehavior.useWeapon();
    }
}

class Queen extends Character {
    constructor(weapon: IWeaponBehavior) {
        super(weapon);
    }

    fight() {
        console.log('I am a Queen');
        this.weaponBehavior.useWeapon();
    }
}

class Knight extends Character {
    constructor(weapon: IWeaponBehavior) {
        super(weapon);
    }

    fight() {
        console.log('I am a Knight');
        this.weaponBehavior.useWeapon();
    }
}

class Troll extends Character {
    constructor(weapon: IWeaponBehavior) {
        super(weapon);
    }

    fight() {
        console.log('I am a Troll');
        this.weaponBehavior.useWeapon();
    }
}

const king = new King(new KnifeBehavior());
king.fight();
king.setWeapon(new SwordBehavior());
king.fight();

const queen = new Queen(new BowAndArrowBehavior());
queen.fight();
queen.setWeapon(new AxeBehavior());
queen.fight();

const knight = new Knight(new SwordBehavior());
knight.fight();
knight.setWeapon(new BowAndArrowBehavior());
knight.fight();

const troll = new Troll(new AxeBehavior());
troll.fight();
troll.setWeapon(new KnifeBehavior());
troll.fight();
