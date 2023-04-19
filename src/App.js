import './App.css';
import React from 'react';
import Card from './components/card';
import SearchBox from './components/search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData : [],
      searchKey : ""
    }
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users")
    .then((response) => {
      return response.json();
    }).then((data) => {
      this.setState(() =>  {

        return {
          userData : data.data
        }
    })
    })
  }

  searchHandler = (event) => {
   let searchText = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchKey : searchText
      }
    })
  }
  render() {
    let filterdata = this.state.userData.filter((user) => {
      return user.first_name.toLowerCase().includes(this.state.searchKey) || user.last_name.toLowerCase().includes(this.state.searchKey)
    })
    return(<>
        <h1 id='head'>API Creaters</h1>
        <SearchBox placeholder="Search the users" search={this.searchHandler}/>
      <div className='main-div'>
        {
          filterdata.map((user) => {
            return <Card src={user.avatar} fName={user.first_name} lName={user.last_name} email={user.email} key={user.id}/>
          })
        }
      </div>
      </>)
  }
}

export default App;
