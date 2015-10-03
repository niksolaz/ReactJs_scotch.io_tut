
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
            <input type="submit" value="Send to">
            <a  href={this.props.site}>{this.props.social}</a>
            </input>
      );
    }
});

React.render(
    <div>
    <NameOfHeader name="Nik Solaz" />
    <ButtonSocial social="Facebook" site="http://www.facebook.com" />
    </div>,
    document.getElementById('content'));

module.exports= index;





