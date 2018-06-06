import React from "react";
import axios from "axios";

const initialState = {
  isEmployer: false,
  isJobSeeker: false
};

export default function reducer(state = initialState, action) {
  return {
    ...state
  };
}
