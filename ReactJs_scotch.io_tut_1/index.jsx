var MyComponents = React.createClass({

          doSomething: function(){
            <button>{this.props.children}</button>
          },

          render: function(){
            return (
                    <div>
                          <h1>{this.props.name}</h1>
                          <input type="button" id="myBtn" onClick={this.doSomething}>{this.props.social}</input>
                          
                    </div>
                    
            );
          }
      });

React.render(

    <div>
          <MyComponents name="Nik Solaz" />
          <MyComponents social="Facebook"><a href="http://www.facebook.com"></a></MyComponents>
          <MyComponents social="Twitter"><a href="http://www.twitter.com"></a></MyComponents>
          <MyComponents social="GooglePlus"><a href="http://www.googleplus.com"></a></MyComponents>
    </div>,
    document.getElementById('content'));

module.exports= index;