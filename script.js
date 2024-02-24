class ReactContainer extends React.Component{
      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div>In this, we are using babel</div>
         </div> )
      };  
  }

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer/>,container);