const React = require('react')

const RightPanel = props => {
        return(
            <div className="col-sm-4 col-12" id="right-panel">
                {props.children}
            </div>  
        )
}

module.exports = RightPanel