var MyComponents = React.createClass({

          doSomething: function(){
          
          },

          render: function(){
            return (
                    <div>
                          <h1>{this.props.name}</h1>
                          <input type="submit"><a onClick={this.doSomething}>{this.props.social}</a></input>
                          
                    </div>
                    
            );
          }
      });

React.render(

    <div>
      <div>
          <MyComponents name="Nik Solaz" />
      </div>
      <div>
          <MyComponents social="Facebook"><a href="http://www.facebook.com"><a></MyComponents>
          <MyComponents social="Twitter"><a href="http://www.twitter.com"><a></MyComponents>
          <MyComponents social="GooglePlus"><a href="http://www.googleplus.com"><a></MyComponents>
      </div>
    </div>,
    document.getElementById('content'));

module.exports= index;