import React from 'react'
import './pan-hcy.css'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {getHcyList} from 'api/jx'
import {Base64} from 'js-base64'
import Cookies from 'js-cookie'

@withRouter

class PanHcy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fid: this.props.match.params.fid,
      list: [],
      contents: []
    }
  }

  componentDidMount() {
    getHcyList(this.state.fid).then(res => {
      this.setState({
        list: res.data.dci.cataloginfos,
        content: res.data.dci.contents
      })
    })
  }

  copy(id, name) {
    let uid = Cookies.get('uid')
    let url = Base64.encode(uid + ',' + id) + '@hcy'
    let input = document.createElement('input')
    input.value = url
    document.body.appendChild(input)
    input.select()
    document.execCommand("Copy")
    document.body.removeChild(input)
  }

  render() {
    return (
      <div className="pan-list">
        <li style={{border: '0', padding: '10px 20px', fontWeight: 'bold'}}>
          <div className="title" style={{color: '#444'}}>标题</div>
          <div className="action">链接</div>
        </li>
        <ul style={{background: '#fff'}}>

          {this.state.list ? this.state.list.map((item) => {
            return (
              <li key={item.catalogID}>
                <div className="title">{
                  <Link to={`/pan/hcy-list/` + item.catalogID}>{item.catalogName}</Link>}</div>
              </li>
            )
          }) : null}
          {this.state.content ? this.state.content.map((item) => {
            return (
              <li key={item.contentID}>
                <div className="title">{
                  <span>{item.contentName}</span>}</div>
                <div className="action">
                  <button onClick={this.copy.bind(this, item.contentID, item.contentName)}>点击复制链接</button>
                </div>
              </li>
            )
          }) : null}
        </ul>
      </div>
    )
  }
}

export default PanHcy