import React, { useState, useCallback } from "react";
import {
  makeStyles,
  Typography,
  CircularProgress,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Card,
  CardContent,
} from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import { useAsyncEffect } from "../../../SharedModule/hooks";
import { WARNING_MAP } from "../../helper";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(120deg, #bdb51c 10%, #1b0930 25%)",
    padding: "2% 2%",
    margin: "1vh",
  },
  title: {
    fontSize: 32,
    color: "white",
  },
  icon: {
    color: "white",
  },
  progress: {
    color: "white",
  },
});

const CosmicWarning = () => {
  const classes = useStyles();
  const [tileList, setTileList] = useState([]);

  const loading = useAsyncEffect(
    useCallback(async () => {
      let newDate = new Date();
      newDate.setDate(newDate.getDate() + 7);
      newDate = newDate.toISOString().slice(0, 10);
      return fetch(
        `https://api.nasa.gov/DONKI/notifications?endDate=${newDate}
        &type=all&api_key=4mzYWueZhEy7fVpGZQDcpa6YXPmolZJRagVbGjh1`
      )
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
    }, []),
    useCallback((data) => {
      if (data) {
        setTileList(data);
      }
    }, []),
    []
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        {loading ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <GridList>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <Typography className={classes.title} align="center">
                Cosmic Weather Warnings For One Month
              </Typography>
            </GridListTile>
            {tileList.map((tile) => (
              <GridListTile key={tile.messageID}>
                <img
                  src={WARNING_MAP[tile.messageType]["url"]}
                  alt={tile.messageID}
                />
                <GridListTileBar
                  title={WARNING_MAP[tile.messageType]["name"]}
                  subtitle={`Issued: ${tile.messageIssueTime.slice(0, 10)}`}
                  actionIcon={
                    <IconButton
                      onClick={() => {
                        const newWindow = window.open(
                          tile.messageURL,
                          "_blank",
                          "noopener,noreferrer"
                        );
                        if (newWindow) {
                          newWindow.opener = null;
                        }
                      }}
                      aria-label={`info about ${tile.messageType}`}
                      className={classes.icon}
                    >
                      <InfoOutlined />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        )}
      </CardContent>
    </Card>
  );
};

export default CosmicWarning;
