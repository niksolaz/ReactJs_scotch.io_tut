
var NameOfHeader = React.createClass({
    render: function(){
      return (
              <h3> SMSL of {this.props.name} </h3>              
      );
    }
});

var ButtonSocial = React.createClass({
    render: function(){
      return (
            <button type="submit" href={this.props.site}>
            {this.props.social}
            </button>
            
            
      );
    }
});

React.render(
    <div>
        <NameOfHeader name="Nik Solaz" />
        <form>
            <br />
            <label>Insert your text</label>
            <br />
            <textarea row="4" col="50"></textarea>
            <br />
            <ButtonSocial social="Facebook" site="http://www.facebook.com" />
            <ButtonSocial social="Twitter" site="http://www.twitter.com" />
            <ButtonSocial social="Google Plus" site="http://www.googleplus.com" />
        </form>
    </div>,
    document.getElementById('content'));

module.exports= index;





