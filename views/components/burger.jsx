const React = require('react')

const Burger = props => {
    return (
        <div className={`${props.burger.wasEaten ? 'bg-secondary' : 'bg-warning'} w-100 burger-item border row`}>
            <div className="col-9 col-sm-8 h5">{props.burger.burgerName}</div>
            {props.burger.wasEaten ? '':
                <div className="col-3 col-sm-4 p-0"><button className="btn btn-danger h-100 w-100 mr-0" id={`burger-${props.burger.id}`}>Devour</button></div>}
        </div>
    )
}

module.exports = Burger