import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SingleEditor from './UI/SingleEditor';
import Profile from './UI/Profiles';



const SINGLE_EDITOR_INDEX = 0
const MULTIPLE_EDITOR_INDEX = 1

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log("New value: " + newValue)
    setValue(newValue);
  };

  return (
    <div className="No-Scroll ">
      <SingleEditor />

    </div>
  );
}
/**
 *     <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          centered={true}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Single Editor" value={SINGLE_EDITOR_INDEX} />
          <Tab label="Active" value={MULTIPLE_EDITOR_INDEX} />
        </Tabs>
      </Paper>
 */