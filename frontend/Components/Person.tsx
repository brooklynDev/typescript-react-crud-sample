import * as React from "react";
import {PersonInterface, EditDeleteButtonClicks} from '../types';

const Person = (props: PersonInterface & EditDeleteButtonClicks) => {
    return <tr>
        <td>{props.person.firstName}</td>
        <td>{props.person.lastName}</td>
        <td>{props.person.age}</td>
        <td>
            <div className="row">
                <div className="col-md-3">
                    <button className='btn btn-warning'
                        onClick={() => props.editClick(props.person)}>
                        Edit
                    </button>
                </div>
                <div className="col-md-2">
                <button className='btn btn-danger' 
                    onClick={() => props.deleteClick(props.person)}>
                    Delete
                </button>
                </div>
            </div>
        </td>
    </tr>
}

export {Person};