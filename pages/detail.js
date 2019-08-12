import Layout from '../components/layout'
import {getTpValue} from '../utils/blog_types'
import moment from 'moment'
import Item from 'antd/lib/list/Item';
// import banner from '../images/banner'

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogDtail:"",
      detailData:{}
  }

  async componentDidMount(){
      const {id} = this.props.query
      let res = await fetch(`//momoman.cn/v1/blog/detail?id=${id}`)
      res = await res.json()
      console.log(res);
      let key = res.data.html_txt_url.replace("http://momoman.cn/redources/","")
      let detailHtml = await fetch(`http://momoman.cn/tool/file/read?key=${key}`);
      detailHtml = await detailHtml.text()
      console.log(id)
      this.setState({blogDtail:detailHtml,detailData:res.data})
  }

  render() {
    const {blogDtail,detailData} = this.state
    return (
      <Layout>
          <div style={{background:"#fff",padding: "0 30px"}}>
            <h3 className="news_title">{detailData.name}</h3>
            <div className="bloginfo">
              <ul>
                <li className="author"></li>
                <li className="lmname">{getTpValue(detailData.type)}</li>
                <li className="timer">{moment(detailData.update_time).format("YYYY-MM-DD")}</li>
                <li className="view"><script src="/e/public/ViewClick/?classid=3&amp;id=12&amp;addclick=1"></script>{detailData.preview} 人已阅读</li>
              </ul>
            </div>
            <div style={{clear:'both'}}></div>
            <div className="news_about">
              <strong>简介</strong> {detailData.preface}
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


