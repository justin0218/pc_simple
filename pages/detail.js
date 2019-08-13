import Layout from '../components/layout'
import {getTpValue} from '../utils/blog_types'
import moment from 'moment'
import {apiHost} from '../utils/config';
import protobuf from "../proto/blog_pb";
import axios from 'axios'
import readStream from '../utils/util'

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
      let res = await axios.get(`${apiHost}/v1/blog/detail?id=${id}`,{
        responseType: 'blob'
      })
      let data = await readStream(res.data);
      let message = protobuf.detailRes.deserializeBinary(data);
      data = message.toObject();
      let key = data.htmlTxtUrl.replace("http:"+apiHost + "/redources/","");
      let hres = await axios.get(`${apiHost}/tool/file/read?key=${key}`,{
        responseType: 'blob'
      })
      let hdata = await readStream(hres.data);
      let hmessage = protobuf.fileReadRes.deserializeBinary(hdata);
      hdata = hmessage.toObject();
      this.setState({blogDtail:hdata.txt,detailData:data})
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
                <li className="timer">{moment(detailData.createTime).format("YYYY-MM-DD")}</li>
                <li className="view">{detailData.view} 人已阅读</li>
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


