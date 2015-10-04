
var NameOfHeader = React.createClass({
    render: function(){
      return (
              <h3> SMSL of {this.props.name} </h3>              
      );
    }
});

var ButtonSocial = React.createClass({
    getInitialState: function() {
        return {click: false };
    },
    handleChange: function() {
        this.setState({click: !this.state.click});
    },
    render: function(){ 
              return (
                    <div className="content">
                    <button onClick={this.handleChange} href={this.props.site}>
                    {this.props.social}
                    </button>
                    </div>
                    
                    
              );
    }
});

React.render(
    <div>
        <NameOfHeader name="Nik Solaz" />
        <nav>
            <ButtonSocial social="Facebook" site="http://www.facebook.com" />
            <ButtonSocial social="Twitter" site="http://www.twitter.com" />
            <ButtonSocial social="Google Plus" site="http://www.googleplus.com" />
        </nav>
    </div>,
    document.getElementById('content'));

module.exports= index;





