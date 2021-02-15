import firebase from './firebase.js';
import io from 'socket.io-client';
import React, { Component } from 'react';
// var socket = io("http://localhost:8000", {
// 	withCredentials: true,
// 	extraHeaders: {
// 		"my-custom-header": "abcd"
// 	}
// });



export class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {

			files: null, arr: []
		}
	}
	handleChange = (files) => {
		this.setState({
			files: files
		})
	}
	handleSave = () => {
		alert("hello");
		let bucketName = 'images';
		let file = this.state.files[0];
		let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
		let uploadTask = storageRef.put(file)
		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
			let dowloadURL = uploadTask.snapshot.dowloadURL
		})
		var storageRef1 = firebase.storage().ref('images/' + this.state.files[0].name);

		//1. Try:
		storageRef1.getDownloadURL().then(function (url) {
			console.log(url)
			// document.getElementById('image').src = url;
		})
	}

	handleSend = () => {
		alert("hello world")
		// socket.emit("sendata","send message");
	}
	// componentWillMount() {
	// 	var { arr } = this.state;
	// 	socket.on("post", data => {
	// 		arr.push(data);
	// 		this.setState({
	// 			arr: arr
	// 		})
	// 	})
	// }
	handleShow = () => {

		var { files } = this.state;
		// var {arr,files}=this.state;
		var ob = { title: files[0].name, id: "1" }
		// arr.push(ob);
		// // var newarr=array1.push(files)
		// this.setState({
		// 	arr:arr
		// })
		// console.log(arr,files[0].name);
		// socket.emit("senddata", ob);
	}

	render() {
		var { arr } = this.state;
		var newarr = arr.reverse();
		var element = newarr.map(array => <li key={array}>{array.title}</li>)

		return (
			<div>
				<input type="file" onChange={(e) => this.handleChange(e.target.files)} />
				<button onClick={this.handleSave}>Save</button>
				<button onClick={this.handleSend}>Send</button>
				<button onClick={this.handleShow}>Show</button>
				{element}
				<img id="image" />
			</div>
		)
	}
}
export default Upload;
