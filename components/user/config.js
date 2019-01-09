import React, {Component} from "react";
import Input from "muicss/lib/react/input";
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import { MdLockOutline, MdAccountCircle } from "react-icons/md";
import Toast from "../widgets/toast";

const validImage = "image/jpeg" || "image/png" || "image/gif";
class Config extends Component {
	constructor(){
		super();
		this.state = {
			name:"David González",
			email:"email@email.com",
            paypal:"email@email.com",
			toastMessage:"",
			toastActive:null,
            changeData:false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
        this.changeUserData = this.changeUserData.bind(this);
	}
    changeUserData() {
        this.setState({
            changeData:!this.state.changeData
        });
    }
	handleInputChange({target}) {
        let {name} = target;
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
        let data;
        if(this.state.changeData) {
            data = <form>
                <Input value={this.state.name} floatingLabel={true} onChange={this.handleInputChange} type="text" placeholder="Nombre" name="name"/>
                <Input value={this.state.email} floatingLabel={true} onChange={this.handleInputChange} type="email" placeholder="Email" name="email"/>
                <Input value={this.state.paypal} floatingLabel={true} onChange={this.handleInputChange} type="email" placeholder="PayPal Email" name="paypal"/>
                <button>Guardar</button>
                <button onClick={this.changeUserData}>Cancelar</button>
            </form>
        } else {
            data = <div>
                    <ul>
                        <li>Nombre(personal)/Empresa(enterprise): David González</li>
                        <li>Email: email@email.com</li>
                        <li>PayPal: paypal@email.com</li>
                    </ul>
                    <button onClick={this.changeUserData}>Cambiar Datos</button>
                </div>
        }
		return(
			<div id="mainConfig">
				{data}
				<Toast active={this.state.toastActive} message={this.state.toastMessage} />
			</div>
		);
	}
}
export default Config;