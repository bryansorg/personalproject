import React from "react";
import axios from "axios";

const initialState = {
  isEmployer: false,
  isJobSeeker: false
};

const SUBMIT_FORM = "SUBMIT_FORM";

export function submitForm(
  isEmployer,
  isJobSeeker,
  firstName,
  lastName,
  email,
  bio,
  companyBio,
  companyName
) {
  return {
    type: "SUBMIT_FORM",
    payload: axios.post(`/api/profile`, {
      isEmployer,
      isJobSeeker,
      firstName,
      lastName,
      email,
      bio,
      companyBio,
      companyName
    })
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
