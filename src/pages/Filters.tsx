import {
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppContainer } from '../components/Context';
import TodayTodoList from '../components/todaytodolist/TodayTodoList';
import { useState } from 'react';

const Filters = () => {
  const { lists } = useAppContainer();
  const [inputSearchText, setInputSearchText] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const handleSearchChange = (el: any) => {
    setInputSearchText(el.target.value.toLowerCase());
  };

  console.log(selectValue);

  let filteredData = lists.filter(todayList => {
    if (inputSearchText === '') {
      return todayList;
    } else {
      if(selectValue === "title" || selectValue === "") {
       return todayList.title.toLowerCase().includes(inputSearchText.toLowerCase())
      } else if (selectValue === "todo") {
       return todayList.todo.toLowerCase().includes(inputSearchText.toLowerCase())
      }
    }
  });

  const handleSelectChange = (selectValue: SelectChangeEvent) => {
    setSelectValue(selectValue.target.value);
  };

  return (
    <div>
      <Box sx={{ margin: 1 }}>
        <TextField
          sx={{ margin: 1 }}
          id='standard-basic'
          placeholder='Search'
          label={<SearchIcon />}
          variant='standard'
          onChange={el => {
            handleSearchChange(el);
          }}
        />
        <FormControl sx={{ width: 200 }}>
          <InputLabel id='demo-simple-select-label'>Filter</InputLabel>
          <Select
            fullWidth
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={selectValue}
            label='Filter'
            onChange={handleSelectChange}
          >
            <MenuItem value={'title'}>Today Todo Title</MenuItem>
            <MenuItem value={'todo'}>Today Todo Text</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div>
        {filteredData.map(list => (
          <div>
            <TodayTodoList key={list.id} list={list} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
