import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom"
import './NestedSideNav.css'

const SubNavItem = ({item}) => (
  <NavLink to={'/'+item.route}>
    {item.name}
  </NavLink>
)

class DropdownMenuItem extends Component {
  state = {
    open: false
  }
  handleMenuExpand = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { open } = this.state
    const { item } = this.props
    const subitems = item.subitems || []
    return (
      <Fragment>
        <button className={"dropdown-btn "+ (open ? 'active' : '') } onClick={() => this.handleMenuExpand('dropdown')}>
          {item.name}
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container" style={{ display: open ? 'block' : 'none' }}>
          {subitems.map(sub => <SubNavItem key={sub.id} item={sub} />)}
        </div>
      </Fragment>
    )
  }
}

class NestedSideNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let items = this.props.items

    return (
      <div className="sidenav">
        {items.map(item => <DropdownMenuItem key={item.id} item={item} /> )}
      </div>
    )
  }
}

export default NestedSideNav