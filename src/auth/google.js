import { defineUserSignupFields } from "wasp/server/auth";

export const userSignupFields = defineUserSignupFields({
  profilePicture: (data) => {
    return data.profile.picture;
  },
  username: (data) => {
    return data.profile.name.toLowerCase().replace(/ /g, ".");
  },
});
