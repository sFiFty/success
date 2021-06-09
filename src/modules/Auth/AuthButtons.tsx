import React, { useState } from "react";
import { IUser } from "./store/authTypes";
import { Button, Avatar, Menu, MenuItem } from "@material-ui/core";
import { showAuthModal } from "./utils";
import { useStore } from "react-redux";

interface Props {
  user?: IUser;
  onLogout: () => Promise<void>;
}

const AuthButtons = ({ user, onLogout }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const store = useStore();
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleShowAuthModal = () => showAuthModal(store);

  const handleLogout = async () => {
    await onLogout();
    handleCloseMenu();
  };

  console.log(user);

  if (user) {
    return (
      <>
        <Button
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={handleOpenMenu}
        >
          <Avatar alt={user.name} src={user.avatar} />
        </Button>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </>
    );
  }
  return <Button onClick={handleShowAuthModal}>Login</Button>;
};

export default AuthButtons;
