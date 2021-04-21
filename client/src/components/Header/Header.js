import React from 'react'

import './Header.css'
// ICONS
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import FireplaceIcon from '@material-ui/icons/Fireplace'
import ForumIcon from '@material-ui/icons/Forum'

const Header = () => {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header_icon' />
			</IconButton>
			<IconButton>
				<FireplaceIcon fontSize='large' className='header_icon' />
			</IconButton>
			<IconButton>
				<ForumIcon fontSize='large' className='header_icon' />
			</IconButton>
		</div>
	)
}

export default Header
