import { Button } from "@material-ui/core";
import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Modal from "../../components/Modal";
import InputWithValidation from "../../components/InputWithValidation";
import styles from "./style";
import type from "../../actions/constant";

const AddRepoModal = ({ open, onClose, data }) => {
  const classes = styles();

  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Modal open={open} title="Add Title" onClose={onClose}>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch({
            type: type.ADD_REPOSITORY,
            payload: { ...data, title: values.title },
          });
          history.push("/");
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <InputWithValidation
              field="title"
              label="Title"
              placeholder="Enter Title"
            />
            <div className={classes.buttonContainer}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};
export default AddRepoModal;
