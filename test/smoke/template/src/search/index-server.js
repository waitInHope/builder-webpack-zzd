
// import React from 'react';
// import ReactDOM from 'react-dom';

// import './search.less'
// import logo from './images/logo.png'

// import '../common/utils.js';
// import { a } from '../common/treeShaking.js';

// import largeNumberAdd from 'large-number-zzd';

const React = require('react')
// const ReactDOM = require('react-dom');
require('./search.less')
const logo = require('./images/logo.png')
require('../common/utils.js')
const { a } = require('../common/treeShaking.js')
const largeNumberAdd  = require('large-number-zzd')

class Search extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }
    
    // 动态import的代码示例
    loadComponent() {
        import('./text.js').then((str) => {
            this.setState({
                Text: str.default
            })
        })
    }

    render(h) {
        const { Text } = this.state;
        const addResult = largeNumberAdd('999', '1');
        return <div className="search-text">
            { addResult }
            { Text ? <Text /> : null }
            { a() }<img src = {logo} onClick={this.loadComponent.bind(this)} />搜索文件内容
        </div>
    }
}

// ReactDOM.render(
//     <Search />,
//     document.getElementById('root')
// )

module.exports = <Search />;