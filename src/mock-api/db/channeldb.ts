import { IChannel } from "../model";

const channeldb: IChannel[] = [
  {
    name: "JAVASCRIPT",
    active: "",
    messages: [
      {
        date: "11/17/2021, 3:02:06 AM",
        username: "user1",
        text: "Hi everyone from JAVASCRIPT channel!",
      },
      {
        date: "11/17/2021, 3:02:06 AM",
        username: "user1",
        text: "How is going?",
      },
      {
        date: "11/17/2021, 3:02:06 AM",
        username: "user2",
        text: "Hi I am good.",
      },
    ],
  },
  { name: "REACT", active: "", messages: [
    {
      date: "10/17/2021, 8:32:06 PM",
      username: "user3",
      text: "Hello from REACT channel!",
    },
    {
      date: "10/17/2021, 8:32:06 PM",
      username: "user3",
      text: "today is goinig to be wonderful",
    },
    {
      date: "10/17/2021, 8:32:06 PM",
      username: "user4",
      text: "Hi everyone from GENERAL channel",
    },
  ] },
  { name: "GENERAL", active: "", messages: [] },
  { name: "SOCIAL", active: "", messages: [] },
  { name: "KIDS", active: "", messages: [] },
];

export default channeldb;
