import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Navigation from '../Navigation'

import './Header.scss'

class Header extends React.Component{ 
	
	static propTypes ={		

		/*
		Logo link
		 */
		logo: PropTypes.string,

		siteName: PropTypes.string,
	}

	static defaultProps = {
	  logo: '',	  
	  siteName: '',	  
	}

	constructor(props) {
		super(props);		
	}
	
	componentDidMount() {
	
	}

	render() {
		return(
			<div id="header" className="componentHeader">
				<header className="header">
					<div className="header-inner">	
						<nav className="navbar navbar-default main-nav-wrap navbar-static-top">
							<div className="container">	
								<div className="container-inner">
										<div className="navbar-header">
											<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
												<div className="hamburger hamburger-1">
													<span className="line"></span>
													<span className="line"></span>
													<span className="line"></span>
												</div>
											</button>
										
											<Link to={'/'} className="navbar-brand">
												<img src={this.props.logo} alt={this.props.siteName}/>
											</Link>
										</div>
										{this.props.children}										
								</div>
							</div>
						</nav>
					</div>
				</header>
			</div>
		)
	}
}

export default Header;