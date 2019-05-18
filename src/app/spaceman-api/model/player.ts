import { PlayerLoginInfo } from './player-login-info';

export interface Player {
    username: string;
    name: string;
    type: 0;
}

export interface PlayerFull extends Player, PlayerLoginInfo {
    password: string;
}
