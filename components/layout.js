import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import {Button,Input} from 'antd'
import Left from '../components/left'
export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover" />      
      <link rel="stylesheet" href="https://my-web-1252762366.cos.ap-beijing.myqcloud.com/blog/editormd.min.css" />
    </Head>
    <div style={{width:"100%",height:61,backgroundColor:"rgba(255,255,255,0.9)",position:"fixed",borderBottom:"1px solid #ddd",boxShadow:"0 1px 1px rgba(0,0,0,.04)",zIndex:999}}>
      <div style={{width:1000,margin:"0 auto",height:"100%",lineHeight:"60px",fontSize:22}}>
        <div style={{float:'left'}}>胡星gg</div>
        <ul id="starlist" style={{float:"right",margin:0}}>
          <li><a href="/" id="selected" style={{color:"#f65a8a"}}>首页</a></li>
          <li><a href="/detail">文章</a></li> 
          <li><a href="/photo/">相册</a></li> 
          <li><a href="/e/tool/gbook/?bid=1">留言</a></li> 
          <li><a href="/about/">关于</a></li> 
        </ul>
      </div> 
    </div>
    <div style={{height:75}}></div>
    <article style={{width:1000,margin:"0 auto"}}>
        <Left />
        <div className="right_box">
          { children }
        </div>
    </article>
    <footer>
      <p>Make by 极简主义者</p>
    </footer>
    <style jsx>{`
      footer{
        width: 100%;
        color: #a5a4a4;
        text-align: center;
        padding: 20px 0;
        clear: both;
        text-shadow: #fff 1px 0 2px, #fff 0 1px 2px, #fff -1px 0 2px, #fff 0 -1px 2px;
      }
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
      .right_box{
        width:680px;
        float:right;
      }
    `}</style>
     <style global jsx>{`
        *{
            margin:0;
            padding:0; 
        }
          body {
            font: 15px "Microsoft YaHei";
            color: #555;
            background: #efefef;
            line-height: 1.5;
            margin:0;
            padding:0;
          }
          
      `}</style>
  </div>
)