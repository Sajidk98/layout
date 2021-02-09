import React from "react";
import { Fab, Grid, Hidden, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import ActionCard from "../../components/ActionCard";
import AddRepoModal from "./addRepoModal";

const ListItem = (props) => {
  const { data } = props;
  const [addRepOpen, setAddRepOpen] = React.useState(false);

  const handleAddRepoClose = () => {
    setAddRepOpen(false);
  };

  return (
    <>
      <ActionCard
        secondaryAction={
          <Fab size="small" onClick={() => setAddRepOpen(true)}>
            <AddIcon color="primary" />
          </Fab>
        }
      >
        <Grid container spacing={3} alignContent="center">
          <Grid item md={6} sm={12}>
            <Hidden smUp>
              <Typography color="textSecondary" variant="h6">
                name
              </Typography>
            </Hidden>
            <Typography>{data.name} </Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Hidden smUp>
              <Typography color="textSecondary" variant="h6">
                user
              </Typography>
            </Hidden>
            <Typography>{data.owner.login}</Typography>
          </Grid>
        </Grid>
      </ActionCard>
      <AddRepoModal
        open={addRepOpen}
        onClose={handleAddRepoClose}
        data={data}
      />
    </>
  );
};

export default ListItem;
