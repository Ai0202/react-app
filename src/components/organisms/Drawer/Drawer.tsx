import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import GroupIcon from "@material-ui/icons/Group"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import InfoIcon from "@material-ui/icons/Info"
import AnnouncementIcon from "@material-ui/icons/Announcement"
import GroupAddIcon from '@material-ui/icons/GroupAdd'

import { routes } from "../../../url"
import { AuthContext } from "../../../contexts/Auth"

// TODO index.js:1 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  navLink: {
    color: "#00011D",
    textDecoration: "none"
  }
})

export const DrawerComponent = () => {
  const { isSignedin } = useContext(AuthContext)

  const classes = useStyles()
  const [state, setState] = React.useState({
    drawer: false,
  })

  const menus = [
    { name: "Home", path: `${routes.home}`, icon: "home", isPublic: true },
    { name: "Member", path: `${routes.members}`, icon: "member", isPublic: true  },
    { name: "About us", path: `${routes.aboutus}`, icon: "about", isPublic: true },
    { name: "News", path: "/news", icon: "news", isPublic: true  },
    { name: "contact", path: `${routes.contact}`, icon: "contact", isPublic: true  },
    { name: "add member", path: `${routes.memberCreate}`, icon: "add", isPublic: false  },
  ]

  const toggleDrawer = (isOpen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setState({ ...state, "drawer": isOpen })
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menus.map((menu, index) => (
          (isSignedin || menu.isPublic) &&
            <Link key={index} className={classes.navLink} to={menu.path} >
              <ListItem button>
                <ListItemIcon>
                  {(() => {
                    switch (menu.icon) {
                      case "home": return <HomeIcon />
                      case "member": return <GroupIcon />
                      case "about": return <InfoIcon />
                      case "news": return <AnnouncementIcon />
                      case "contact": return <MailIcon />
                      case "add": return <GroupAddIcon />
                      default: return 
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
            </Link>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <React.Fragment key={"drawer"}>
        <MenuIcon onClick={toggleDrawer(true)} />
        <Drawer open={state["drawer"]} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
