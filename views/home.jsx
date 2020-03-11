const React = require('react')
const Html = require('./layouts/default.jsx')
const LeftPanel = require('./components/leftPanel.jsx')
const RightPanel = require('./components/rightPanel.jsx')
const CenterPanel = require('./components/centerPanel.jsx')

const Home = props => {
    return (
        <Html>
            <div className="b-contain bg-info row">
                <LeftPanel>
                    <h1>LeftPanel</h1>
                </LeftPanel>
                <CenterPanel />
                <RightPanel>
                    <h1>RightPanel</h1>
                </RightPanel>
            </div>
        </Html>
    )
}

module.exports = Home