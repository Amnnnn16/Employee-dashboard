import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, useMediaQuery, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import './EmployeeTable.css';

const data = [
  { rank: 1, name: "Rakesh Sharma", designation: "UI/UX Designer", hours: "7(42)", change: 1.5, changeType: 'up' },
  { rank: 2, name: "Ankita Thakur", designation: "HR Recruiter", hours: "7(41)", change: -1.5, changeType: 'down' },
  { rank: 3, name: "Sarah Yadav", designation: "Product Manager", hours: "7(40)", change: 1.5, changeType: 'up' },
  { rank: 4, name: "Mohit Verma", designation: "Software Engineer", hours: "7(39)", change: 0.5, changeType: 'up' },
  { rank: 5, name: "Priya Singh", designation: "Marketing Manager", hours: "7(38)", change: -0.5, changeType: 'down' },
  { rank: 6, name: "Aditya Rao", designation: "Data Scientist", hours: "7(37)", change: 2.0, changeType: 'up' },
  { rank: 7, name: "Kavita Joshi", designation: "Sales Executive", hours: "7(36)", change: -1.0, changeType: 'down' },
  { rank: 8, name: "Vikram Patil", designation: "Operations Manager", hours: "7(35)", change: 0.0, changeType: 'no change' },
  { rank: 9, name: "Neha Mehta", designation: "Finance Analyst", hours: "7(34)", change: 1.0, changeType: 'up' },
  { rank: 10, name: "Rohan Kapoor", designation: "Content Writer", hours: "7(33)", change: -2.0, changeType: 'down' },
  { rank: 11, name: "Sonal Agarwal", designation: "Business Analyst", hours: "7(32)", change: 0.5, changeType: 'up' }
];


const EmployeeTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TableContainer component={Paper} className="employee-table">
      <Table>
        <TableHead className="table-head">
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>No. of hours worked</TableCell>
            <TableCell>Changes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.rank} className="table-row">
              <TableCell>{row.rank}</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src={`/path/to/avatar/${row.rank}.png`} alt={row.name} />
                  {!isMobile && <Box ml={2}>{row.name}</Box>}
                </Box>
              </TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>{row.hours}</TableCell>
              <TableCell>
                {row.changeType === 'up' ? <ArrowUpward className="icon-up" /> : <ArrowDownward className="icon-down" />}
                {row.change} hrs
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
