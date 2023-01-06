import React from "react";

type ToodolistPropsType = {
    shapka: string;
    tasks: Array<TaskType>;
}
type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

export const Toodolist = (props: ToodolistPropsType) => {
    return (
        <div>

            <h3>{props.shapka}</h3>

            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map( (item) => {
                    return(
                        <li><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span></li>
                    )
                })}

                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
                {/*<li><input type="checkbox" checked={false}/> <span>React</span></li>*/}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div>
                <input type="date"/>
                <input type="text" placeholder='date of birth'/>
                <input type="button" value={'text inside button'}/>
            </div>
        </div>
    );
}