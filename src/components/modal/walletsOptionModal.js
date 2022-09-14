import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import metamaskLogo from "../../assets/images/metamaskLogo.webp";
import cronosLogo from "../../assets/images/cronosLogo.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "250px",
    height: "200px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flexStart",
    flexDirection: "column",
    backgroundColor: "#182132",
    borderRadius: "12px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalHeading: {
    color: "#fff",
    fontSize: "22px",
  },
  modalOpenBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  walletBtn: {
    width: "auto",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    borderRadius: "8px",
    padding: "3px 6px",
    backgroundColor: "#272E43",
    cursor: "pointer",
  },
  walletLogo: {
    width: "30px",
    height: "30px;",
  },
  walletName: {
    color: "#fff",
    paddingLeft: "14px",
  },
}));

const WalletsModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className={classes.modalOpenBtn}
      >
        Connect Wallet
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 className={classes.modalHeading}>Choose wallet</h1>
            <div
              className={classes.walletBtn}
              onClick={(e) => {
                e.preventDefault();
                handleClose();
                dispatch(connect());
              }}
            >
              <div>
                <img
                  className={classes.walletLogo}
                  src={metamaskLogo}
                  alt="metamask"
                />
              </div>
              <div>
                <p className={classes.walletName}>MetaMask</p>
              </div>
            </div>
            <div
              className={classes.walletBtn}
              onClick={(e) => {
                e.preventDefault();
                handleClose();
                dispatch(connect("cronos"));
              }}
            >
              <div>
                <img
                  className={classes.walletLogo}
                  src={cronosLogo}
                  alt="cronosLogo"
                />
              </div>
              <div>
                <p className={classes.walletName}>Cronos Defi</p>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default WalletsModal;
