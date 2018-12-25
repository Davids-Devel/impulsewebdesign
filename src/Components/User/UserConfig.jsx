import React, {Component} from "react";
import "./UserConfig.css";
import Input from "muicss/lib/react/input";
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { MdLockOutline, MdAccountCircle } from "react-icons/md";
import { PropTypes } from "prop-types";
import store from "../../Store/store"
import Toast from "../Widgets/Toast";

const validImage = "image/jpeg" || "image/png" || "image/gif";
class UserConfig extends Component {
	constructor(){
		super();
		this.state = {
			displayName:"",
			photo:"",
			company:"",
			toastMessage:"",
			toastActive:null
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.componentWillMount = this.componentWillMount.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentWillMount(){
	}
	handleInputChange({target}) {
        let name = target.name;
        var value;
        switch (name) {
            case "photo":
                value = target.files[0]
                if (value.type !== validImage) {
                    this.setState({
                        toastMessage:"Por Favor, Selecione Una Imagen.",
                        toastActive:true
                    });
                    setTimeout(()=>this.setState({ toastActive:false }), 100);
                    target.value = null;
                }
                break;
            default:
                value = target.type === 'checkbox' ? target.checked : target.value;
                break;
        }
        this.setState({
            [name]: value
        });
    }
    static childContextTypes = {
        reactIconBase: PropTypes.object
    };
    getChildContext() {
        return {
            reactIconBase: {
                color: '#f7f7f7',
                size: 30,
                style: {
                    marginTop: -55,
                    marginLeft: 45
                }

            }
        }
    }
    onSubmit = async event =>{
    	event.preventDefault();

    	var _this = this;
    	let ext;
    	switch (this.state.photo.type) {
    		case "image/jpeg":
    			ext = "jpg"
    			break;
    		case "image/png":
    			ext = "png"
    			break;
    		case "image/gif":
    			ext = "gif"
    			break;
    		default:
    			// statements_def
    			break;
    	}
    	var file = this.state.photo;
        /*
    	var user = app.auth().currentUser;
    	var userChild = app.storage().ref("users").child(`${user.uid}/profilePhoto.${ext}`);
    	var upload = userChild.put(file);
    	upload.on("state_changed", snap =>{
			var progress = (snap.bytesTransferred / snap.totalBytes) * 100;
			  	console.log('Upload is ' + progress + '% done');
		}, function(error) {
			console.log(error)
		}, function() {
  			upload.snapshot.ref.getDownloadURL()
  			.then(downloadURL => {
  				_this.setState({photoURL:downloadURL})
				user.updateProfile({
					displayName:_this.state.displayName,
					photoURL:_this.state.photoURL
				}).then(()=>{
					console.log("foto " + _this.state.photoURL)
					app.database().ref(`${user.uid}/config`).set({
						username:user.displayName,
						company:_this.state.company
					})
					_this.setState({
       					toastMessage:"Perfil Configurado Exitosamente",
       					toastActive:true
       				})
       				setTimeout(()=>{
       					_this.setState({
       						toastActive:false
       					})
       				}, 100)
				}).catch(err=>{
					console.log(err);
				})
			})
  		})*/
    }
	render(){
		return(
			<div id="mainConfig">
				<div>
					<form id="config" onSubmit={this.onSubmit}>
						<h2>Configuracion de usuario</h2>
						<Input
						 type="text"
						 name="displayName"
						 label="Nombre de Usuario"
						 floatingLabel={true}
						 onChange={this.handleInputChange}
						/>
						<MdAccountCircle />
						<Input 
							type="file"
							onChange={this.handleInputChange}
							name="photo"
						/>
						<Select onChange={this.handleInputChange} name="company" label="Tipo de negocio:">
                            <Option value={null} label="Selecciona..." />
                            <Option value="company" label="Compañia" />
                            <Option value="enterprise" label="Empresa" />
                            <Option value="personal" label="Personal" />
                            <Option value="hobby" label="Hobby" />
                        </Select>
                        <input type="submit" value="Enviar" />
					</form>
				</div>
				<Toast active={this.state.toastActive} message={this.state.toastMessage} />
			</div>
		);
	}
}
export default UserConfig;