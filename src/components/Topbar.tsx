import React, { useState } from 'react'
import { graphql } from 'gatsby'
import AppBar from '@mui/material/AppBar'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { navigate } from 'gatsby'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { MenuItem as MenuItemType } from '../types'
import MenuJSON from '../../menus.json'

const menus = MenuJSON as Record<string, MenuItemType[]>

export interface TopbarProps {
    children?: React.ReactChild | React.ReactChildren
}

const FlexSpacer = styled('div')({ flexGrow: 1 })

const Topbar: React.FC<TopbarProps> = ({ children }: TopbarProps) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    BLM/USU National Aquatic Monitoring Center
                </Typography>
                <FlexSpacer />
                {menus['topbar'].map((menu, idx) => (
                    <GatsbyMenu key={`menu-${idx}`} menu={menu} />
                ))}
            </Toolbar>
        </AppBar>
    )
}

export default Topbar

const menuClick =
    (mChild: MenuItemType): React.MouseEventHandler<HTMLLIElement | HTMLButtonElement> =>
    (event) => {
        // TODO: do something with form values
        if (mChild.url) {
            event.preventDefault()
            if (mChild.newWindow) {
                window.open(mChild.url, '_blank')
            } else {
                navigate(mChild.url)
            }
        }
    }

interface GatsbyMenuProps {
    menu: MenuItemType
}

const GatsbyMenu: React.FC<GatsbyMenuProps> = ({ menu }: GatsbyMenuProps) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
    const hasChildren = menu.children && menu.children.length > 0
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
        if (hasChildren) setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = (): void => {
        setAnchorElNav(null)
    }
    return (
        <>
            <Button
                color="inherit"
                onMouseOver={handleOpenNavMenu}
                onClick={menuClick(menu)}
                // onMouseOut={handleCloseNavMenu}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
            >
                {menu.label}
            </Button>
            {hasChildren && (
                <Menu
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    anchorEl={anchorElNav}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    {menu.children?.map((mchild, idy) => (
                        <MenuItem key={`menu-${idy}`} onClick={menuClick(mchild)} color="inherit">
                            {mchild.label}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </>
    )
}
