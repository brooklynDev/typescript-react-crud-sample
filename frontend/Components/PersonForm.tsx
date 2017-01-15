import * as React from "react";
import {Person as PersonEntity} from '../../backend/models/Person';
import {PersonFormButtonType, PersonInterface} from '../types';

interface PersonFormProps {
    person?: PersonEntity;
    buttonClick: (person: PersonEntity) => void;
    buttonType: PersonFormButtonType;
    cancelClick: () => void;
}

export class PersonForm extends React.Component<PersonFormProps, Partial<PersonInterface>> {
    constructor(props: PersonFormProps){
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.state = {
            person: props.person ? {...props.person} : {id: 0, firstName: '', lastName: '', age: 0}
        }
    }

    buttonClick(evt: React.MouseEvent<HTMLButtonElement>) {
        evt.preventDefault();
        this.props.buttonClick(this.state.person);
    }

    componentWillReceiveProps(props: PersonFormProps) {
        this.setState({person: props.person ? {...props.person} : {id: 0, firstName: '', lastName: '', age: 0}});
    }

    onTextChange(e: any) {
        let person:any = this.state.person;
        person[e.target.name] = e.target.value;
        this.setState({person});
    }

    render() {
        return (
            <form>
                <input className='form-control' 
                    name='firstName'
                    onChange={this.onTextChange} 
                    type='text' 
                    value={this.state.person.firstName} />
                <input 
                    name='lastName'
                    onChange={this.onTextChange} 
                    className='form-control' 
                    type='text' 
                    value={this.state.person.lastName} />
                <input 
                    name='age'
                    onChange={this.onTextChange} 
                    className='form-control' 
                    type='text' 
                    value={this.state.person.age} />
                <button 
                    className={this.props.buttonType == 'edit' ? 'btn btn-success': 'btn btn-primary'}
                    onClick={this.buttonClick}
                    >
                    {this.props.buttonType == 'edit' ? 'Update': 'Add'}
                </button>
                <button type='button'
                    className='btn btn-danger'
                    onClick={this.props.cancelClick}
                    >
                    Cancel
                </button>
            </form>
        )
    }
}