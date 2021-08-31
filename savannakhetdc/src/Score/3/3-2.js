
import React from "react"
import ReactToPrint from "react-to-print"
import Grid from '@material-ui/core/Grid'
import { FaUserGraduate } from 'react-icons/fa'
import { FcPrint } from 'react-icons/fc'
import Container from '@material-ui/core/Container'
import Title from '../titles'
import TextField from '@material-ui/core/TextField'
import moment from 'moment'
import Logo from '../logo.jpg'
class Score12 extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
			filter:"",
      gender: "",
      name: "",
      student_id: "",
      A: "",
      B: "",
      C: "",
      D: "",
      E: "",
      F: "",
      G: "",
      S: "",
      TIME: "",
      grade: "",
      numbergrade:"",
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
		fetch("https://dockterapilao.herokuapp.com/E4EA4D8B35/2", {
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
		const Datasearch = this.state.records.filter(name => {
			return name.name.toLowerCase().includes(this.state.filter.toLowerCase())
		});

		return (
            <Grid item xs={12} sm={8}>
              <Container>
                   <Grid><br />
                      <Container>
                        <div >
                          <p class="laicenter text-lg font-semibold text-gray-700">ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ<br />
                           ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນະຖາວອນ</p>
                           <div>
                           <Grid container spacing={1}>
                             <Grid item xs={12} sm={1}>
                              <img src={Logo} />
                             </Grid>
                             <Grid item xs={12} sm={6}><br />
                             <p class="text-lg text-gray-700">ກະຊວງສຶກສາທິການ ແລະ ກິລາ<br />
                              ວິທະຍາໄລ ສຸຂະພາບ</p>
                             </Grid>
                           </Grid>
                           </div>                     
                          <p class="laicenter text-lg font-semibold text-gray-700">ຄະແນນ <br />ນັກສຶກສາປີ3 ພາກຮຽນ2</p>
                         </div>                    
                       </Container>
                       <Container>
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid className="laiicon" item>
                              <FaUserGraduate />
                            </Grid>
                            <Grid item>
                              <TextField value={this.state.filter} onChange={this.handleChange.bind(this)} id="input-with-icon-grid" label="ຊື່" />
                            </Grid>
                          </Grid>
                        </Container><br />
                        <table className="laitable">
                          <thead>
                            <tr>
                              <tr></tr>
                              <th>ຊື່ ແລະ ນາມສະກຸນ</th>
                              <th>ກຍຍ</th>
                              <th>ກພຖ</th>
                              <th>ອກ</th>
                              <th>ສສບ</th>
                              <th>ພກ</th>
                              <th>ກຄຊ</th>
                              <th>ຂບບ</th>
                              <th>ຂຍ</th>
                              <th>ຄະແນນສະເລ່ຍ</th>
                              <th>ເກຣດ</th>
                              <th>ເກຣດສະເລ່ຍ</th>
                              <th>ສົກຮຽນ</th>
                            </tr>
                            {Datasearch.map((record) => {
                              return (
                                <tr className="divide-y">
                                  <th></th>
                                  <th> {record.student_id}</th>
                                  <th>{record.gender}. {record.name}</th>
                                  <th>{record.A}</th>
                                  <th>{record.B}</th> 
                                  <th>{record.C}</th>
                                  <th>{record.D}</th>
                                  <th>{record.E}</th>
                                  <th>{record.F}</th>
                                  <th>{record.G}</th>
                                  <th>{record.S}</th>
                                  <th>{Math.trunc((record.A+record.B+record.C+record.D+record.E+record.F+record.G+record.S)*100/80)}</th>
                                  <th>{record.grade}</th>
                                  <th>{record.numbergrade}</th>
                                  <th>{moment(record.TIME).format('YYYY')}</th>     
                                </tr>
                              );
                            })}
                          </thead>
                        </table>
                   </Grid>
               </Container>
            </Grid>
		);
	}
}

class PScore12 extends React.Component {
	render() {
	  return (
		<div>
      <Grid container spacing={0}>
      <Title />      
			<ReactToPrint trigger={() => <a href="#"><FcPrint className="laiicon"/></a>} content={() => this.componentRef}/>
		  <Score12 ref={el => (this.componentRef = el)} />
      </Grid>
		</div>
	  );
	}
  }

export default PScore12;