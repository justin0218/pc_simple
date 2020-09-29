import Layout from '../components/layout';
import moment from 'moment';
import {apiHost,avatars} from '../utils/config';
import axios from 'axios'
import * as api from '../apis/blog';

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogDtail:"",
      detailData:{},
      commentsList:[],
      commentTotal:0,
      saytext:"",
      submitDisb:false,
      submitTxt:"提交"
  }

  async getComments(){
    let commentMessage = await api.GetBlogComments(0);
    this.setState({commentsList:commentMessage.blogCommentListList,commentTotal:commentMessage.total})
  }

  async componentDidMount(){
    await this.getComments();
  }

  async subMitComment(){
    const {saytext} = this.state;
    this.setState({submitDisb:true,submitTxt:"提交中"});
    let res = await api.SubMitComment(saytext,0);
    if (res.code != 0){
      alert(res.msg);
    }else{
      await this.getComments();
    }
    this.setState({submitDisb:false,submitTxt:"提交",saytext:""})
  }

  async makeGood(){
    let {detailData} = this.state;
    const {id} = this.props.query
    let res = await axios.post(`${apiHost}/v1/blog/good/make?blog_id=${id}`)
    detailData.goodNum++
    this.setState({detailData})
  }

  async onFileChange(f){
      let res = await axios.post(`http://localhost:9560/v1/ocean/wmessage/file/read`,f.target.files[0],{
        headers: {'Content-Type':'application/octet-stream'}
      })
     console.log(res)
  }

  render() {
    const {blogDtail,detailData,commentsList,submitDisb,saytext,commentTotal,submitTxt} = this.state
    return (
      <Layout>
          <div style={{background:"#fff",padding: "0 30px"}}> 
          <input type="file" onChange={this.onFileChange.bind(this)} />
          </div>
          <style jsx>{`
          .nextinfo a{
            text-decoration: none;
            color: #555;
          }
          .nextinfo a:hover{
            text-decoration: underline;
            color:#222;
          }
          .yzm {
              margin: 10px 10px 10px 0;
          }
          #plpost input[type="submit"] {
            display: block;
            background: #303030;
            color: #fff;
            border: 0;
            line-height: 30px;
            padding: 0 20px;
            border-radius: 5px;
            float: right;
            margin-bottom: 20px;
            margin-top: 13px;
            margin-right: 1%;
          }
          #saytext {
              width: 618px;
              outline: none;
              resize: none;
          }
          .saying span {
                float: right;
          }
           .saying{
            line-height: 30px;
            color: #a9a6a6;
            margin-bottom: 8px;
           } 
           .news_pl h2{
            border-bottom: #000 2px solid;
            line-height: 40px;
            font-size: 14px;
            padding-left: 10px;
            color: #000;
           }
           .fbtime{
            float: right;
            color: #999;
            font-size: 12px;
            width: 66px;
            overflow: hidden;
            white-space: nowrap;
           }
           .fbtime span{
            float: right;
            color: #999;
            font-size: 12px;
            width: 67px;
            overflow: hidden;
            white-space: nowrap;
           }
           p.fbtime{
            color: #000;
           }
           p.fbinfo{
            margin: 10px 0;
            word-wrap: break-word;
           }
           .fb ul{
            margin: 10px 10px;
            padding: 10px 10px 10px 70px;
            border-bottom: #ececec 1px solid;
            background-size: 47px 47px;
           }  
           .news_pl{
            width: 100%;
            overflow: hidden;
            margin: 0px 0 20px 0;
           }
           .nextinfo{
            line-height: 24px;
            width: 100%;
            overflow: hidden;
            margin: 20px 0;
           }
           .nextinfo > p{
            padding: 4px 10px;
            border-radius: 5px;
           }
           .diggit{
            width: 160px;
            margin: auto;
            background: #E2523A;
            color: #fff;
            box-shadow: 1px 2px 6px 0px rgba(0,0,0,.2);
            border-radius: 3px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            outline: none;
            display: block;
           }
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


