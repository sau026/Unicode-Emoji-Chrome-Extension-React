import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PeopleIcon from '@material-ui/icons/People';
import PetsIcon from '@material-ui/icons/Pets';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import FlagIcon from '@material-ui/icons/Flag';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Emoji from '../emojiFile/emoji'
import FilterEmoji from '../flterEmoji/filterEmoji'
import "./tab.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      style={{ background: "#f7f7f7" }}
      {...other}
    >
      {value === index && (
        <Box className="main-iconbox">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [searchText, setSearchText] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
     {/* <FilterEmoji></FilterEmoji> */}
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="on"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<EmojiEmotionsIcon />} aria-label="phone" />
          <Tab icon={<PeopleIcon />} aria-label="favorite" />
          <Tab icon={<PetsIcon />} aria-label="person" />
          <Tab icon={<EmojiFoodBeverageIcon />} aria-label="help" />
          <Tab icon={<FlightTakeoffIcon />} aria-label="shopping" />
          <Tab icon={<LocalActivityIcon />} aria-label="up" />
          <Tab icon={<EmojiObjectsIcon />} aria-label="down" />
          <Tab icon={<EmojiSymbolsIcon />} aria-label="shopping" />
          <Tab icon={<FlagIcon />} aria-label="up" />
          <Tab icon={<SettingsInputCompositeIcon />} aria-label="down" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Emoji tabSelected="Smileys & Emotion"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Emoji tabSelected="People & Body"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Emoji tabSelected="Animals & Nature"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Emoji tabSelected="Food & Drink"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Emoji tabSelected="Travel & Places"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Emoji tabSelected="Activities"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Emoji tabSelected="Objects"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Emoji tabSelected="Symbols"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Emoji tabSelected="Flags"></Emoji>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Emoji tabSelected="Component"></Emoji>
      </TabPanel>
    </div>
  );
}
