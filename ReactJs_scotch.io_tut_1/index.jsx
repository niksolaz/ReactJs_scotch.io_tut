var MyComponents = React.createClass({
          render: function(){
            return (

                    <h1>Welcome {this.props.name}!</h1>
            );
          }
      });

React.render(
    <div>
          <MyComponents name="Facebook"><a href="http://www.facebook.com">Facebook</a></MyComponents>
          <MyComponents name="Twitter"><a href="http://www.twitter.com">Twitter</a></MyComponents>
          <MyComponents name="Google+"><a href="http://www.googleplus.com">Google Plus</a></MyComponents>
    </div>,
    document.getElementById('content'));

module.exports= index;