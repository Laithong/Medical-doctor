import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MdSchool } from 'react-icons/md';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      <Grid item xs={12} sm={3}>
               <Paper>
                    <Container>
                    <Container>
                     <MdSchool className="laiicon" />
                     <h3 class="text-lg font-semibold text-gray-700">ນັກສຶກສາປີ 1</h3>
                        <Container>
                            <p><Link to={'/score/1/1'} class=" font-semibold text-gray-700">ພາກຮຽນ 1</Link></p>
                            <p><Link to={'/score/1/2'} class=" font-semibold text-gray-700">ພາກຮຽນ 2</Link></p>
                            <p><Link to={'/score/1'} class=" font-semibold text-gray-700">ລວມພາກຮຽນ</Link></p>
                        </Container>
                     <p class="text-lg font-semibold text-gray-700">ນັກສຶກສາປີ 2</p>
                     <Container>
                            <p><Link to={'/score/2/1'} class=" font-semibold text-gray-700">ພາກຮຽນ 1</Link></p>
                            <p><Link to={'/score/2/2'} class=" font-semibold text-gray-700">ພາກຮຽນ 2</Link></p>
                            <p><Link to={'/score/2'} class=" font-semibold text-gray-700">ລວມພາກຮຽນ</Link></p>
                        </Container>
                     <p class="text-lg font-semibold text-gray-700">ນັກສຶກສາປີ 3</p>
                     <Container>
                            <p><Link to={'/score/3/1'} class=" font-semibold text-gray-700">ພາກຮຽນ 1</Link></p>
                            <p><Link to={'/score/3/2'} class=" font-semibold text-gray-700">ພາກຮຽນ 2</Link></p>
                            <p><Link to={'/score/3'} class=" font-semibold text-gray-700">ລວມພາກຮຽນ</Link></p>
                        </Container>
                       </Container>
                     </Container>
                </Paper>
            </Grid>
  );
}
