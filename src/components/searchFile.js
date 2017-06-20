import React,{Component} from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  errorStyle: {
    color: "black",
  },
  underlineStyle: {
    borderColor: "black" ,
  }
}
class SearchBar extends Component
{

    constructor(props){
        super(props);
        this.state={term:''}
    }
    render(){
        return <div className="col-md-8" > 
            <TextField hintStyle={styles.errorStyle} fullWidth={true}
            underlineStyle={styles.underlineStyle}
            value={this.state.term}//controlled form component as form element value is set by state
            onChange={event=>this.onInputChange(event.target.value) }
             />
             
        </div>
    }

    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;