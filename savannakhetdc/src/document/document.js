import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { BiSpreadsheet } from 'react-icons/bi'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import moment from 'moment'
import Img from './img.jpg'

class Document extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
			filter:"",
            title: "",
            detail: "",
            time: "",
	      	records: [],
			showAlert: false,
			alertMsg: "",
			alertType: "success",
			update: false,
		};
	}
	handleChange = (evt) => {this.setState({filter: evt.target.value,});};
	componentWillMount() {this.fetchAllRecords();}
	// fetch All Records
	fetchAllRecords = () => {
		var headers = new Headers();
		headers.append("Content-Type", "application/json");
		fetch("https://dockterapilao.herokuapp.com/document", {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((result) => {
				console.log("result", result);
				this.setState({
					records: result.response,
				});
			})
			.catch((error) => console.log("error", error));
	};

	render() {
		const Datasearch = this.state.records.filter(detail => {
			return detail.detail.toLowerCase().includes(this.state.filter.toLowerCase())
		});
		return (
            <Container>
            <div><br />
            <Grid container spacing={3}> 
            <Grid  item xs={8}>     
               {Datasearch.map((record) => {
                return (
                    <>
                    <Grid container spacing={0}> 
                    <Grid item xs={2}>
                    <BiSpreadsheet className="laiiconb"/>
                    </Grid> 
                    <Grid item xs={8}>
                        <a href={record.links} target="_blank">
                        <h3>{record.title}</h3>
                        {record.detail}
                        </a><br />
                        {moment(record.time).format('DD-MM-YYYY')}
                        <br />                      
                    </Grid>  
                    </Grid><hr /><br /><br /><br />  
                    </>         
                   );
                })}
                </Grid>

                <Grid item xs={3}>
                    <Paper>
                        <Container>
                            <br />
                            <img src={Img} />
                            <br />
                            ວິທະຍາໄລ ວິທະຍາສາດ ສຸຂະພາບ ສະຫວັນນະເຂດ
                        </Container>                       
                    </Paper>
                </Grid>
            </Grid>
        </div>
          </Container>
		);
	}
}


export default Document;