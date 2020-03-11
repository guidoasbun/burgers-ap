const React = require('react')

const CenterPanel = props => {
    return (
        <div className="col-sm-4 col-12">
            <div className="d-flex w-100 justify-content-center">
                <img className="img-burger align-middle" src="./burger-p.png" alt="burger" />
            </div>
            <h2 className="w-100 text-center mt-5">Eat-Da-Burger!</h2>
            <div className="d-flex w-100 justify-content-center">
                <input type="text" name="burger-name-inout" id="burger-name" className="w-75" />
            </div>
            <div className="d-flex w-100 justify-content-center mt-2">
                <button className="btn btn-primary" id="submit-burger">Submit</button>
            </div>
        </div>
    )
}

module.exports = CenterPanel