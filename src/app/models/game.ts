import { Card } from './card';

export class Game {
    turn: string;
    turnDirection: string;
    playerList: string[];
    dropPile: Card[];
    deck: Card[];
}
