import React from 'react'
import '../pan-bit/pan-bit.css'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {getKandianList} from 'api/jx'
import {getStorage, setStorage} from "common/js/localstorage"
import {Base64} from 'js-base64'

@withRouter

class PanKandian extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    getKandianList(this.state.fid).then(res => {
      this.setState({
        list: res.data.data.item
      })
    })
  }

  copy(id) {
    let uid = getStorage('user-info').id
    let url = 'https://www.clicli.top/kandian/down/' + Base64.encode(id + ',' + uid)
    let input = document.createElement('input')
    input.value = url
    document.body.appendChild(input)
    input.select()
    document.execCommand("Copy")
    document.body.removeChild(input)
    alert('复制成功O(∩_∩)O~~')

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
              <li key={item.material_id}>
                <div className="title"><span>{item.items[0].title}</span></div>
                 <div className="action">
                  <button onClick={this.copy.bind(this, item.items[0].c_vid)}>点击复制链接</button>
                </div>
              </li>
            )
          }) : <h1>cookie失效，无法返回列表</h1>}
        </ul>
      </div>
    )
  }
}

export default PanKandian