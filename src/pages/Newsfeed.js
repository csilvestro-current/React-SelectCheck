import React, { Component } from 'react'
//import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import MyForm from '../components/myForm/MyForm'
// import ListItem from '../components/listItem/ListItem'
// import Search from '../components/search/Search';


// function searchAList(search) {
//   return function (searchMe){
//     return searchMe.gName.toLowerCase().includes(search.toLowerCase()) || !search
//   }  
// }

class Newsfeed extends Component {
  state = {
    myInput: '',
    gList: [{
      gName: 'Bread',
      gPrice: '$1.99'
    },
    {
      gName: 'Cheese',
      gPrice: '$3.49'
    }],
    search: ''
  }


//ADD A LIFECYLE FOR INITIAL LOAD
componentDidMount() {
  if(localStorage.getItem('gList')) {
    //Declare a var to read the data as string then convert to JSON object
    let gList = JSON.parse(localStorage.getItem('gList'))
    this.setState({gList:gList})
  } 
}

  changeMeMan = e => {
    this.setState({myInput: e.target.value})
  }

  searchList = e => {
    this.setState({search: e.target.value})
  }

  addName = e =>  {
    e.preventDefault()
      this.setState({
        gList: [...this.state.gList, {gName:this.state.myInput}]
      });
      let gList = [...this.state.gList]
    localStorage.setItem('gList', JSON.stringify(gList))
    //There is glitch here. It only loads after second time you click the button
    //localStorage.setItem('gList', JSON.stringify([...this.state.gList]))
    //Clear Form
    e.target.reset()
  }

  removeName = key => {
    this.state.gList.splice(key, 1)
    //this.setState({ gList: this.state.gList})
    this.setState({
      gList: [...this.state.gList]
    })
    //USE LS VARIABLE to use local storage
    let gList = [...this.state.gList]
    localStorage.setItem('gList', JSON.stringify(gList))
  }

  render() {
    // const {search} = this.state
    // let myList = this.state.gList.filter(searchAList(search)).map((element, i) => {
    //     //Pass through the value and key from the props comp.
    //     return <ListItem 
    //               key={i} 
    //               val={element}  
    //               delMe={() =>this.removeName(i)}/>
    //   })

    return (
      <div style={styles.container}>
        <Header pgTitle='My Application' />
        {/* <div> 
          <Search searchList={this.searchList}
            placeholder='Search Posts ...'/>
        </div>
        <MyForm 
          changeMeMan={this.changeMeMan} 
          myInput={this.state.myInput}
          addName={this.addName}
        />  
        {myList} */}
        <Footer />    
      </div>
    )
  }
}
export default Newsfeed
        
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: 'gray'
  }
}