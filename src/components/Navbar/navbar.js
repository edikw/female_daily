import React, { Component } from 'react';
import './navbar.css';
import Search from '../../assets/search.png';
import Login from '../../assets/user.png';
import Bars from '../../assets/menu (4).png';
import Close from '../../assets/x.png';

class navbar extends Component {

	openSidebar () {
		let open = this.refs.sidebarBg
		let close = this.refs.close
		open.style.display = 'block'
		close.style.width = '80%'
	}

	closeSidebar () {
		let open = this.refs.sidebarBg
		let close = this.refs.close
		open.style.display = 'none'
		close.style.width = '0px'
	}

	render () {
		return (
			<nav className="nav_bar">
				<div className="d-flex align-items-center border-bottom justify-content-between">
					<div className="icon_logo">
						<img src={Bars} className="icon_bars d-none d-lg-block" alt="" />
						<img src={Bars} className="icon_bars d-lg-none" alt="" onClick={() => this.openSidebar()} ref="bars" />
						<h3 className="logo ml-3 ml-lg-0">FEMALE DA!LY</h3>
					</div>
					<div className="p-3 d-block d-lg-none">
						<img src={Search} className="icon_search" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" alt="" />
					</div>
					<div className="search col-7 d-none d-lg-flex">
						<img src={Search} className="icon_search" alt="" />
					    <input className="m-0" type="text" placeholder="Search products, articles, topics, brands, etc" />
					</div>
				    <div className="button col-2 d-none d-lg-flex">
					    <button className="button_login">
					    	<img src={Login} className="icon_login" alt=""/>
					    LOGIN / SIGNUP</button>
				    </div>
				</div>
				<div className="collapse" id="collapseExample">
					<div className="p-3">
						 <div className="search col d-flex">
							<img src={Search} className="icon_search" alt="" />
						    <input className="m-0" type="text" placeholder="Search products, articles, topics, brands, etc" />
						</div>
					</div>
				</div>
				<div className="sidebar" ref="close">
					<div className="text-right p-3">
						<img src={Close} onClick={() => this.closeSidebar()} alt="" />
					</div>
					<button className="button_login">
					    	<img src={Login} className="icon_login" alt=""/>
					    LOGIN / SIGNUP</button>
					<ul>
						<li>SKINCARE</li>
						<li>MAKE UP</li>
						<li>HAIR</li>
						<li>FRAGANCE</li>
						<li>NAILS</li>
						<li>TOOLS</li>
						<li>BRANDS</li>
					</ul>
				</div>
				<div className="sidebar_bg" ref="sidebarBg">
					
				</div>
			</nav>
		)
	}
}

export default navbar;