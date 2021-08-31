
import ReactToPrint from "react-to-print";
import React from "react";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			student_id: "",
			name: "",
			lasname:"",
			sum: "",
			grade: "",
			TERM: "1",
			TIME: "",
			records: [],
			showAlert: false,
			alertMsg: "",
			alertType: "success",
			id: "",
			update: false,
		};
	}

	componentWillMount() {
		this.fetchAllRecords();
	}

	// fetch All Records
	fetchAllRecords = () => {
		var headers = new Headers();
		headers.append("Content-Type", "application/json");
		fetch("https://dockterapilao.herokuapp.com/sctop10/3", {
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
		return (
			<div>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>ຊື່ ແລະ ນາມສະກຸນ</th>
						<th>ຄະແນນສະເລ່ຍ</th>
						<th>ເກຣດສະເລ່ຍ</th>
						<th>ຕັດເກຣດ</th>
						<th ></th>
					</tr>
				</thead>
				<tbody>
					{this.state.records.map((record) => {
						return (
							<tr className="divide-y">
								<td></td>
								<td>{record.gender}. {record.name}</td>
								<td>{Math.trunc(record.sum)}</td>
								<td>{record.numbergrade}</td>
								<td>{(record.grade)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			</div>
		);
	}
}

export default App;