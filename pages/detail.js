import Layout from '../components/layout'
import tps from '../utils/blog_types'
// import banner from '../images/banner'

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogDtail:"",
      leftHeight:0
  }

  async componentDidMount(){
      let res = await fetch(`https://my-web-1252762366.cos.ap-beijing.myqcloud.com/htxt/22637b62-2022-4c9d-bff3-986ad9646f3e.shtml`)
      res = await res.text()
      console.log(res)
      this.setState({blogDtail:res})
  }

  render() {
    const {blogDtail} = this.state
    return (
      <Layout>
          <div style={{background:"#fff",padding: "0 30px"}}>
            <h3 className="news_title">个人博客，我为什么要用帝国cms？</h3>
            <div className="bloginfo">
              <ul>
                <li className="author"></li>
                <li className="lmname">文章</li>
                <li className="timer">2018-07-24</li>
                <li className="view"><script src="/e/public/ViewClick/?classid=3&amp;id=12&amp;addclick=1"></script>3358 人已阅读</li>
              </ul>
            </div>
            <div style={{clear:'both'}}></div>
            <div className="news_about">
              <strong>简介</strong>
              我所知道的比较流行的博客系统有，wordpress，Z-Blog，emlog等，最流行的是worpress，主题多，插件多，所以选择wp的个人站长也很多。以上三个博客系统我都用过，用的时间最
            </div>

            <div dangerouslySetInnerHTML={{__html: blogDtail}} className="markdown-body editormd-preview-container" previewcontainer="true" style={{padding: 8,width:"auto"}}></div>
          </div>
          <style jsx>{`
           .news_about {
                color: #888888;
                border: 1px solid #F3F3F3;
                padding: 10px;
                margin: 20px auto 15px auto;
                line-height: 23px;
                background: none repeat 0 0 #F6F6F6;
            }
            .bloginfo {
              width: 100%;
              overflow: hidden;
            }
            .news_title {
                font-size: 24px;
                font-weight: normal;
                padding: 20px 0;
                color: #333;
                margin:0;
            }
            .bloginfo li {
                float: left;
                margin-right: 20px;
                list-style: none;
            }
          `}</style>
      </Layout>     
    )
  }
}


