import React from 'react'
import axios from 'axios'
class Showpost extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var time=today.toLocaleTimeString()
    //  lấy  thời gian từ ngày ISO rồi chuyển qua
    //  var today=new Date("2020-12-28T08:42:52.405Z");
    // var test=today.getSeconds()
    var minute = today.getMinutes();
    var hour = today.getHours();
    var date = today.getDate();
    var month=today.getMonth();
    this.state = { post: [], minute: minute, date: date, hour: hour,month:month,time:time };
  };



  componentWillMount() {
    axios.get('http://localhost:9000/allpost').then(resolve => {
      this.setState({
        post: resolve.data.message
      })
    }).catch(err => console.log(err))

  };


  render() {
    var { post, hour, minute, date,month,time} = this.state;
    var postlist = post.reverse();

    function test(value) {
      var today = new Date(value);
      var time = today.getHours();
      return time;
    }
    function settime(datenow, hournow, minutenow, value) {
      var today = new Date(value);
      var timedate = today.getDate();
      var timehour = today.getHours();
      var timeminute = today.getMinutes();
    if(datenow===timedate){
      if(hournow===timehour){
        if(minutenow===timeminute){
          return "bây giờ";
        }
        else{
          return minutenow-timeminute+" phút trước";
        }
      }
      if(hournow-timehour === 1){
          if( minutenow < timeminute){
            return 60-timeminute+minutenow+" phút trước";
          }
          if( minutenow >= timeminute){
            return "1 tiếng trước"
          }
      }
      if(hournow-timehour >1){
        if( minutenow < timeminute){
          return hournow-timehour-1+" tiếng trước";
        }
        if( minutenow >= timeminute){
          return  hournow-timehour+ " tiếng trước"
        }
      }
    }
      if(datenow-timedate===1){
        if(hournow<timehour){
          if(minutenow<timeminute){
            return 24-timehour+hournow-1+" giờ trước";
          }
          if(minutenow >= timeminute){
            return   24-timehour+hournow+" giờ trước";
          }
        }
        if(hournow===timehour){
          if(minutenow<timeminute){
            return 24-timehour+hournow-1+" giờ trước";
          }
          if(minutenow>=timeminute){
            return datenow-timedate+" 1 ngày trước";
          }
      }}
      if(datenow-timedate>1){
       
        if(hournow<timehour){
          return datenow-timedate-1+"ngày trước";
        }
        if(hournow===timehour){
          if(minutenow<timeminute){
            return datenow-timedate-1+" ngày trước";
          }
          if(minutenow>=timeminute){
            return datenow-timedate+" ngày trước";
          }
        }
        if(hournow>timehour){
          return datenow-timedate+" ngày trước"
        }
       
      }
        
     

    }

    var { checkfriend, checkpost } = this.props;

    const checkpostfriend = (arr, value) => {
      return arr.some(function (arrValue) {
        return arrValue.idfriend === value
      })
    }
    console.log(checkpost)
    console.log(typeof (post.time))

    var listpost = postlist.map(list =>


      <div key={list} className={(checkpostfriend(checkfriend, list.postId) === true ? "card" : "none")} style={{ width: "30rem", fontSize: "18px" }}>
        <label> <h4>{list.postuser}</h4><span>{settime(date, hour, minute, list.time)}</span></label><span>idpost:{list.postId}</span>
      <h4>giờ đăng:{time}</h4>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{list.poststatus}</p>

          <div style={{ display: "flex" }} className="card-content">
            <button className="btnhome"> Like</button>
            <button className="btnhome" > Comment</button>
            <button className="btnhome"> Share</button>
          </div>
        </div>
      </div>


    )
    return (
      <h2>{listpost}</h2>
    );
  };
};
export default Showpost;
