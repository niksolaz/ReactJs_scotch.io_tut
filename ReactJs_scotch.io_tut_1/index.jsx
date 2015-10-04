
var NameOfHeader = React.createClass({
    render: function(){
      return (
              <h3> SMSL of {this.props.name} </h3>              
      );
    }
});

var ButtonSocial = React.createClass({
    getInitialState: function() {
        return {value: 'Type some text here!'};
    },
    handleChange: function() {
        this.setState({value: React.findDOMNode(this.refs.textarea).value});
    },
    sendMarkup: function() {
        return { __html: marked(this.state.value, {sanitize: true}) };
    },
    render: function(){
      return (
            <div className="ButtonSocial">
            <h3>Insert Your "Text"</h3>
            <textarea
                onChange={this.handleChange}
                ref="textarea"
                defaultValue={this.state.value} />
            <div
                className="content" />
            <button type="submit" href={this.props.site}>
            {this.props.social}
            </button>
            </div>
            
            
      );
    }
});

React.render(
    <div>
        <NameOfHeader name="Nik Solaz" />
        <form>
            <ButtonSocial social="Facebook" site="http://www.facebook.com" />
            <ButtonSocial social="Twitter" site="http://www.twitter.com" />
            <ButtonSocial social="Google Plus" site="http://www.googleplus.com" />
        </form>
    </div>,
    document.getElementById('content'));

module.exports= index;





