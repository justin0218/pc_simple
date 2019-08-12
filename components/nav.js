import Layout from './layout'
import tps from '../utils/blog_types'
// import banner from '../images/banner'

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      path:""
  }

  async componentDidMount(){
      this.setState({path:location.pathname})
  }

  render() {
    const {path} = this.state
    return (
      <div>
        <div style={{width:"100%",height:61,backgroundColor:"rgba(255,255,255,0.9)",position:"fixed",borderBottom:"1px solid #ddd",boxShadow:"0 1px 1px rgba(0,0,0,.04)",zIndex:999}}>
          <div style={{width:1000,margin:"0 auto",height:"100%",lineHeight:"60px",fontSize:22}}>
            <div style={{float:'left'}}>Simple</div>        
            <ul id="starlist" style={{float:"right",margin:0}}>
              <li><a href="/" style={path == "/" ? {color:"#f65a8a"}:{}}>首页</a></li>
              <li><a href="/article" style={path == "/article" || path == "/detail" ? {color:"#f65a8a"}:{}}>文章</a></li> 
              <li><a href="/article" style={path == "/1" ? {color:"#f65a8a"}:{}}>相册</a></li> 
              <li><a href="/article" style={path == "/2" ? {color:"#f65a8a"}:{}}>留言</a></li> 
              <li><a href="/article" style={path == "/3" ? {color:"#f65a8a"}:{}}>关于</a></li> 
            </ul>
          </div> 
        </div>
        <div style={{height:75}}></div>
        <style jsx>{`
          #starlist li {
              float: left;
              display: block;
              padding: 0 0 0 40px;
              font-size: 16px;
          }
          #starlist li a{
            text-decoration: none;
            color: #555;
          }
        `}</style>
      </div>  
    )
  }
}


