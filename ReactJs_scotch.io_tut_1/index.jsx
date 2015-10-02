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
          <MyComponents social="Facebook"></MyComponents>
          <MyComponents social="Twitter"></MyComponents>
          <MyComponents social="GooglePlus"></MyComponents>
      </div>
    </div>,
    document.getElementById('content'));

module.exports= index;