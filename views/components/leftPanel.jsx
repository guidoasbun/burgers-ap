const React = require('react')

const LeftPanel = props => {
    return(
        <div className="col-sm-4 col-12" id="left-panel">
            {props.children}
        </div>
    )
}

module.exports = LeftPanel