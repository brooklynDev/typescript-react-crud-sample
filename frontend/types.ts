export type PersonFormButtonType = 'edit' | 'add';
import {Person} from '../backend/models/Person';

export interface PeopleInterface {
    people: Person[];
}

export interface PersonInterface {
    person: Person;
}

export interface EditDeleteButtonClicks {
    deleteClick: (person: Person) => void;
    editClick: (person: Person) => void;
}