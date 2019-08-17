import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import {Button,Input} from 'antd'
import Left from '../components/left'
import Nav from '../components/nav'
export default ({ children, title = 'simple' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover" />      
      <link rel="stylesheet" href="/static/css/editormd.min.css" />
    </Head>
    <Nav />
    <article style={{width:1000,margin:"0 auto"}}>
        <Left />
        <div className="right_box">
          { children }
        </div>
        <div style={{clear:"both"}}></div>
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