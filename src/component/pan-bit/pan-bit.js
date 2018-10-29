import React from 'react'
import './pan-bit.css'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {getBitList} from 'api/jx'
import {getStorage, setStorage} from "common/js/localstorage"
import {Base64} from 'js-base64'

@withRouter

class PanBit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fid: this.props.match.params.fid,
      list: []
    }
  }

  componentDidMount() {
    getBitList(this.state.fid).then(res => {
      this.setState({
        list: res.data.data.data
      })
    })
  }

  copy(id) {
    let uid = getStorage('user-info').id
    let url = 'https://www.clicli.us/bit/down/' + Base64.encode(id + ',' + uid)
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
        <ul style={{background: '#fff', padding: '0 10px'}}>

          {this.state.list ? this.state.list.map((item) => {
            return (
              <li key={item.resourceId}>
                <div className="title">{item.resourceType === 1 ?
                  <Link to={`/pan/bit-list/` + item.resourceId}>{item.name}</Link> : <span>{item.name}</span>}</div>
                {item.resourceType !== 1 ? <div className="action">
                  <button onClick={this.copy.bind(this, item.resourceId)}>点击复制链接</button>
                </div> : null}
              </li>
            )
          }) : <h1>cookie失效，无法返回列表</h1>}
        </ul>
      </div>
    )
  }
}

export default PanBit