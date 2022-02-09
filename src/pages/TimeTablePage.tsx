import { Component } from "react";

import '../css/table.css'

interface Task {
    subject: string;
    task: string;
    marks: Array<number>;
}

interface MyState {
    data: Array<Array<Array<Task>>>;
}

interface MyProps {

}

export default class TimeTablePage extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);

        const data = [
            [
                {subject: 'Biology', task: 'Bla bla bla 1', marks: [6, 11]},
                {subject: 'Biology', task: 'Bla bla bla 1', marks: [6, 11]},
                {subject: 'Biology', task: 'Bla bla bla 1', marks: [6, 11]},
            ],
            [
                {subject: 'Biology', task: 'Bla bla bla 2', marks: []},
                {subject: 'Biology', task: 'Bla bla bla 2', marks: [6, 11]},
                {subject: 'Biology', task: 'Bla bla bla 2', marks: []},
            ],
            [
                {subject: 'Biology', task: 'Bla bla bla 3', marks: [6, 11]},
                {subject: 'Biology', task: 'Bla bla bla 3', marks: []},
                {subject: 'Biology', task: 'Bla bla bla 3', marks: [6, 11]},
            ],
            [
                {subject: 'Biology', task: 'Bla bla bla', marks: [6, 11]},
                {subject: 'Biology', task: 'Bla bla bla 4', marks: [6, 11]},
                {subject: 'Biology', task: 'Bla bla bla 4', marks: []},
            ],
            [
                {subject: 'Biology', task: 'Bla bla bla 5', marks: []},
                {subject: 'Biology', task: 'Bla bla bla 5', marks: [6, 11]},
                {subject: 'Biology', task: 'Bla bla bla 5', marks: [6, 11]},
            ],
            [

            ],
        ];

        const middleIndex = Math.ceil(data.length / 2);

        const firstHalf = data.slice().splice(0, middleIndex);
        const secondHalf = data.slice().splice(-middleIndex);

        this.state = {
            data: [firstHalf, secondHalf],
        }
    }

    render() {
        return (
            <div className="main">
                <div className="row">
                    {this.state.data.map((half, index) => {
                        return (
                            <div className="col s12 m6" key={index}>
                                {half.map((day, i) => {
                                    return (
                                        <>
                                            {day.length > 0 ? (
                                                <table className="centered" key={i*Math.random()}>
                                                    <thead>
                                                    <tr>
                                                        <th style={{width: '5%'}}>#</th>
                                                        <th style={{width: '25%'}}>Урок</th>
                                                        <th style={{width: '50%'}}>Домашнє завдання</th>
                                                        <th style={{width: '20%'}}>Оцінки</th>
                                                    </tr>
                                                    </thead>

                                                    <tbody>
                                                    {day.map((task, j) => {
                                                        return (
                                                            <tr key={j}>
                                                                <td>{j + 1}</td>
                                                                <td>{task.subject}</td>
                                                                <td>{task.task}</td>
                                                                <td>{task.marks.join(' ')}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                    </tbody>
                                                </table>
                                            ) : (<>
                                                <table className="centered" key={i*Math.random()}>
                                                    <thead>
                                                    <tr>
                                                        <th style={{width: '5%'}}>#</th>
                                                        <th style={{width: '25%'}}>Урок</th>
                                                        <th style={{width: '50%'}}>Домашнє завдання</th>
                                                        <th style={{width: '20%'}}>Оцінки</th>
                                                    </tr>
                                                    </thead>

                                                    <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td/>
                                                        <td/>
                                                        <td/>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </>)}
                                        </>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
