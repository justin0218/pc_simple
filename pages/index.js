import Layout from '../components/layout'
import tps from '../utils/blog_types'
// import banner from '../images/banner'

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogList:[],
      leftHeight:0
  }

  async componentDidMount(){
      console.log(this.props.jsonPageRes)
      let res = await fetch(`//momoman.cn/v1/blog/list?type=-1`)
      res = await res.json();
      console.log(res);
      this.setState({blogList:res.data,leftHeight:document.getElementById("left_box").offsetHeight})
  }

  render() {
    let {blogList,leftHeight} = this.state;
    return (
      <Layout>
        {
          blogList.map((item,k)=>(
            <div className="right_item" key={k} onClick={()=>{
               location.href = `/detail?id=${item.id}`
            }}>
              {item.cover && <i><img src={item.cover} /></i>}
              <h3>[ 顶 ] <span style={{color:"#222"}}>{item.name}</span></h3>
              <p>{item.preface}</p>
            </div>
          ))
        }
        <style jsx>{`
          .right_item p {
            margin: 20px 0 0 0;
            line-height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
          }
          .right_item h3{
            font-size: 16px;
            line-height: 25px;
            text-shadow: #FFF 1px 1px 1px;
            color: #de4949;
            margin:0;
          }
          .right_item i{
            width: 150px;
            display: block;
            max-height: 100px;
            overflow: hidden;
            float: right;
            margin-left: 20px;
          }
          .right_item{
            background: rgba(255,255,255,0.8);
            padding: 15px;
            overflow: hidden;
            color: #797b7c;
            margin-bottom: 20px;
            cursor: pointer;
          }
        `}</style>
      </Layout>    
        
    )
  }
}


