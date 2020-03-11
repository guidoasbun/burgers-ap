const React = require('react')
const Html = require('./layouts/default.jsx')
const LeftPanel = require('./components/leftPanel.jsx')
const RightPanel = require('./components/rightPanel.jsx')
const CenterPanel = require('./components/centerPanel.jsx')
const Burger = require('./components/burger.jsx')
const Home = props => {
    return (
        <Html>
            <div className="b-contain bg-info row">
                <LeftPanel>
                    {props.burgers.map((elem, index) => {
                        if (!elem.wasEaten) { return (<Burger burger={elem} key={index} />) }
                    })}
                </LeftPanel>
                <CenterPanel />
                <RightPanel>
                    {props.burgers.map((elem, index) => {
                        if (elem.wasEaten) { return (<Burger burger={elem} key={index} />) }
                    })}
                </RightPanel>
            </div>
        </Html>
    )
}

module.exports = Home