import * as React from "react";
import axios from 'axios';
import {Person} from '../../backend/models/Person';
import {People} from './People';
import {PersonForm} from './PersonForm';
import {PersonFormButtonType, PeopleInterface} from '../types';

interface MainState {
    showPersonForm: boolean;
    personFormPerson?: Person;
    personFormButtonType: PersonFormButtonType
}

export class Main extends React.Component<undefined, Partial<MainState & PeopleInterface>> {
    constructor(){
        super();
        this.state = {
            people: ([] as Person[]),
            showPersonForm: false,
            personFormButtonType: 'add'
        }

        this.deleteClick = this.deleteClick.bind(this);
        this.editClick = this.editClick.bind(this);
        this.formButtonClick = this.formButtonClick.bind(this);
        this.newPersonClick = this.newPersonClick.bind(this);
        this.personFormCancelClick = this.personFormCancelClick.bind(this);
    }

    async deleteClick(person: Person) {
        await axios.delete(`/people/${person.id}`);
        await this.loadPeople();
    }

    editClick(person: Person) {
        this.setState({showPersonForm: true, personFormPerson: person, personFormButtonType: 'edit'});
    }

    async formButtonClick(person: Person) {
        let func = this.state.personFormButtonType === 'edit' ? axios.put : axios.post;
        await func('/people', person);
        await this.loadPeople();
        this.setState({showPersonForm: false});
    }

    async componentDidMount() {
        this.loadPeople();
    }

    async loadPeople(){
        let people = await axios.get('/people');
        this.setState({people: people.data});
    }

    newPersonClick() {
        this.setState({showPersonForm: true, personFormPerson: null, personFormButtonType: 'add'});
    }

    personFormCancelClick() {
        this.setState({showPersonForm: false});
    }

    render() {
        return(
            <div className='container'>
                <h1>React People with TypeScript</h1>
                <button className='btn btn-primary' onClick={this.newPersonClick}>New Person</button>
                <br />
                {this.state.showPersonForm && <PersonForm 
                    person={this.state.personFormPerson}
                    buttonType={this.state.personFormButtonType} 
                    buttonClick={this.formButtonClick}
                    cancelClick={this.personFormCancelClick} />}
                <People people={this.state.people} 
                deleteClick={this.deleteClick}
                editClick={this.editClick} />
            </div>
        );
    }
}