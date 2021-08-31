
import React from "react"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            class: "",
			class1: "",
			class2: "",
			class3: "",
			records: [],
			showAlert: false,
			alertMsg: "",
			alertType: "success",
			student_id: "",
			update: false,
		};
	}

	handleChange = (evt) => {
		this.setState({[evt.target.name]: evt.target.value,});};
	componentWillMount() {this.fetchAllRecords();}
	// fetch All Records
	fetchAllRecords = () => {
		var headers = new Headers();
		headers.append("Content-Type", "application/json");
		fetch("http://localhost:4000/navbartitle", {
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
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            {this.state.records.map((record) => {
						return (
                            <>
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                    <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">ລວມນັກສຶກສາທັງຫມົດແຕ່ລະປີ</p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{record.class1+record.class2+record.class3}</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                    <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">ລວມນັກສຶກສາທັງຫມົດແຕ່ລະປີໜື່ງ ລວມທັງປີຜ່ານມາ</p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{record.class1}</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                    <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">ລວມນັກສຶກສາທັງຫມົດປີສອງ ລວມທັງປີຜ່ານມາ</p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{record.class2}</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                    <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">ລວມນັກສຶກສາທັງຫມົດປີສາມ ລວມທັງປີຜ່ານມາ</p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{record.class3}</p>
                                    </div>
                                </div>
                            </>
						);
					})}
            </div>
        </div>
		);
	}
}

export default App;
