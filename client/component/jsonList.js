import React from 'react';
import axios from 'axios';

export default class JsonList extends React.Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
    
  }
  componentDidMount() {
    
  axios.get('http://www.json-generator.com/api/json/get/clvUnDHQEi?indent=2')
  .then(list => {
    console.log(list);
    
   
    this.setState({data : list.data})
    console.log("333333333333333333333333", list.data);
    
  })
  .catch(error => {
    console.log("Error in axios", error);
  });
  
  }

  craeteList(){
    return this.state.data.map((item) => {
      return(
        <tr>
          <td>{item.id}</td>
           <td>{item.name}</td>
           <td>{item.hobby}</td>
          </tr>
      )
           
      })
  }

  
  render() {
        
    return (
      <div>
      <table>
            {this.craeteList()}
        </table>
      </div>
     
    )
  }
}
