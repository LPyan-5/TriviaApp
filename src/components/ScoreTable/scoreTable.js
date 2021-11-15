import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typo from '../UI/Typo';
import classes from './scoreTable.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button';

const columns = [
	{ id: "number", label: "No", minWidth: 100, align: 'center'},
	{ id: 'category', label: 'Category', minWidth: 100, align: 'center'},
	{ id: 'one', label: '1', minWidth: 140 , align: 'center', type: "question"},
	{
		id: 'two',
		label: '2',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'three',
		label: '3',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'four',
		label: '4',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'five',
		label: '5',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'six',
		label: '6',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'seven',
		label: '7',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'eight',
		label: '8',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'nine',
		label: '9',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'ten',
		label: '10',
		minWidth: 140,
		align: 'center',
		type: "question"
	},
	{
		id: 'score',
		label: 'Score',
		minWidth: 100,
		align: 'center',
	},
];

function createData(score, number, category, one, two, three, four, five, six, seven, eight, nine, ten) {
	return { score, number, category, one, two, three, four, five, six, seven, eight, nine, ten };
}

export default function ColumnGroupingTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const quizData = JSON.parse(localStorage.getItem("quiz"));
	
	const rows = React.useMemo(() => {
		if(quizData && quizData.length) {
			return quizData.map((quiz, index) => {
				return createData(quiz.score, index + 1, quiz.category.name, ...quiz.selected);
			})
		}
		else {
			return [];
		}
	}, [quizData]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	if(!quizData || !quizData.length) {
		return null;
	}

	return (
		<div className={classes.root}>
			<Typo variant="title" font="bold" color="secondary" className={classes.title}>Previous Scores</Typo>
			<Paper sx={{ width: '100%', maxWidth: "1200px", margin: "0 auto", borderRadius: "18px", border: "2px solid #95B6A9" }}>
				<TableContainer sx={{ maxHeight: 440 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableRow sx={{color: "#3A7859"}}>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ top: 57, minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
						<TableBody>
							{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
								<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
									{columns.map((column) => {
									const value = row[column.id];
									return (
										<TableCell key={column.id} align={column.align}>
										{column.type === "question" ? 
											<div className={classes.value}>
												<p>{value.answer}</p>
												<img src={value.value ? "images/check.png" : "images/close.png"} alt="" className={value.value ? classes.correctIcon : classes.icon}/>
											</div> 
										: 
											value
										}
										</TableCell>
									);
									})}
								</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<Link to="/">
                <Button
                    label="Back to home"
                    classes={{primary: classes.backBtn}}
                />
            </Link>
		</div>
	);
};