export interface Player {
    username: string;
    name: string;
    type: 0;
}

export interface PlayerFull extends Player {
    password: string;
}
