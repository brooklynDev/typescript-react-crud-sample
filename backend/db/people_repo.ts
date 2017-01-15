import knex from './knex';
import {Person} from '../models/Person';

async function addPerson(person: Person) : Promise<Person> {
    let id:number[] = await knex('people').insert(person);
    return {...person, id: id[0]};
}

async function getPeople() : Promise<Person[]> {
    return await knex.select().from('people');
}

async function deletePerson(id: number) {
    return await knex('people').where({id}).del();
}

async function updatePerson(person: Person) {
    return await knex('people').where({id: person.id}).update(person);
}

export {getPeople, addPerson, deletePerson, updatePerson};