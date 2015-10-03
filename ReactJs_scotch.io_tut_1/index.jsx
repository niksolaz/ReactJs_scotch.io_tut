var Header = React.createClass({
          render: function(){
            return (
                    <div> 
                          <h3> SMSL of {this.props.name}</h3>      
                    </div>
                    
            );
          }
      });

React.render(

    <div>
          <Header name="Nik Solaz" /> 
    </div>,
    document.getElementById('content'));

module.exports= index;





//<input type="submit"><a onClick={this.doSomething}>Send to this {this.props.social}</a></input>