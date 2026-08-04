import { formatPhone, telHref, smsHref } from "./phone";

/** ONE digits-only source of truth for the shop's number. */
const PHONE = "9736231414";

export const site = {
  name: "Victoria and Sons Auto Repair",
  phone: formatPhone(PHONE),
  phoneHref: telHref(PHONE),
  /** the text branch: a photo or a dash light beats describing a noise */
  smsBody:
    "Hi Victoria & Sons — sending a photo of my dash light / the noise it's making. What's it likely to be?",
  get smsHref() {
    return smsHref(PHONE, this.smsBody);
  },
};
