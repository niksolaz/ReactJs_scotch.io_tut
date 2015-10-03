var MyComponents = React.createClass({

          doSomething: function(){
            return (
              <div>
                    <p>{this.props.children}</p>
              </div>
              );
          },

          render: function(){
            return (
                    <div>
                          <h1>{this.props.name}</h1>
                          <input type="submit"><a onClick={this.doSomething}>Send to this {this.props.social}</a></input>
                          
                    </div>
                    
            );
          }
      });

React.render(

    <div>
      <div>
          <MyComponents name="Nik Solaz" />
          <p>all social</p>
      </div>
      <div>
          <MyComponents social="Facebook"><a href="http://www.facebook.com"></a></MyComponents>
          <MyComponents social="Twitter"><a href="http://www.twitter.com"></a></MyComponents>
          <MyComponents social="GooglePlus"><a href="http://www.googleplus.com"></a></MyComponents>
      </div>
    </div>,
    document.getElementById('content'));

module.exports= index;