import React from "react";
import './searchBox.css'

class SearchBox extends React.Component {

    render() {
        return (
            <div id="input-box">
            <input id="search-box" type="search" placeholder={this.props.placeholder} onChange={this.props.search}/>
            </div>
        )
    }
}
export default SearchBox;