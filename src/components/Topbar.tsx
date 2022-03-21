import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import { navigate } from 'gatsby'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { MenuItem as MenuItemType } from '../types'
import MenuJSON from '../../menus.json'
import { Box, Container } from '@mui/material'
import { withPrefix } from 'gatsby'

const menus = MenuJSON as Record<string, MenuItemType[]>

export interface TopbarProps {
    children?: React.ReactChild | React.ReactChildren
}

const FlexSpacer = styled('div')({ flexGrow: 1 })

const Topbar: React.FC<TopbarProps> = ({ children }: TopbarProps) => {
    return (
        <>
            <Box sx={{ background: '#2C387E', color: 'white' }}>
                <Container maxWidth="md" sx={{ display: 'flex' }}>
                    <Box sx={{ flex: '1 1 10%' }}>
                        <img src={withPrefix('/images/logos/namc_white.svg')} style={{ margin: 15, maxHeight: 50 }} />
                    </Box>
                    <Typography variant="h4" color="inherit" sx={{ margin: 2, flex: '1 1 80%' }}>
                        National Aquatic Monitoring Center
                    </Typography>
                    <FlexSpacer />
                    <Box sx={{ flex: '1 1 10%' }}>
                        <img
                            src={withPrefix('/images/logos/USU_White.png')}
                            style={{ maxWidth: '100%', margin: 15, maxHeight: 100 }}
                        />
                    </Box>
                </Container>
            </Box>
            <AppBar position="relative">
                <GatsbyMenu menu={menus['topbar']} />
            </AppBar>
        </>
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
    menu: MenuItemType[]
}

enum MenuHover {
    ANY = 'ANY',
    BUTTON = 'BUTTON',
    MENU = 'MENU'
}
type MenuState = {
    el: HTMLElement
    elIdx: number
}

const GatsbyMenu: React.FC<GatsbyMenuProps> = ({ menu }: GatsbyMenuProps) => {
    const [anchor, setAnchorElNav] = useState<MenuState | null>(null)
    const [hoverType, setHoverType] = useState<MenuHover>(MenuHover.BUTTON)
    const handleOpenNavMenu =
        (hasChildren: boolean, elIdx: number) =>
        (event: React.MouseEvent<HTMLElement>): void => {
            if (hasChildren) {
                setAnchorElNav({ el: event.currentTarget, elIdx })
                setHoverType(MenuHover.BUTTON)
            }
        }
    const handleCloseNavMenu = (activeHoverType: MenuHover) => (): void => {
        if (activeHoverType === MenuHover.ANY || hoverType === activeHoverType) setAnchorElNav(null)
    }
    return (
        <Toolbar sx={{ width: 900, margin: '0 auto' }}>
            {menu.map((menu, idx) => {
                const hasChildren = Boolean(menu.children && menu.children.length > 0)
                return (
                    <React.Fragment key={`menu-btn-${idx}`}>
                        <Button
                            color="inherit"
                            onMouseOver={handleOpenNavMenu(hasChildren, idx)} // onmouseenter event does not bubble
                            onClick={menuClick(menu)}
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                        >
                            {menu.label}
                        </Button>
                        {hasChildren && (
                            <Menu
                                key={`mItem-${idx}`}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                onMouseOver={(): void => {
                                    setHoverType(MenuHover.MENU)
                                }}
                                anchorEl={anchor?.el}
                                MenuListProps={{ onMouseLeave: handleCloseNavMenu(MenuHover.MENU) }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchor?.elIdx === idx)}
                                onClose={handleCloseNavMenu(MenuHover.ANY)}
                            >
                                {menu.children?.map((mchild, idy) => (
                                    <MenuItem key={`menu-${idy}`} onClick={menuClick(mchild)} color="inherit">
                                        {mchild.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        )}
                    </React.Fragment>
                )
            })}
        </Toolbar>
    )
}
