import React, { Component } from "react";
import DashboardHeader from "./DashboardHeader";
import ContentForm from "../../components/admin/ContentForm";
import { apiCall } from "../../helpers/api-call";
import { toast } from 'react-toastify';

class ServicesContent extends Component {
  
  state = {
    servicesContentArr: [
      {
        title: "",
        description: "",
        images: []
      }
    ]
  }

  componentDidMount() {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      this.props.history.push("/login");
      return;
    }
    window.scrollTo(0, 0);
    this.fetchServicesContent();
  }

  fetchServicesContent = async () => {
    try {
      let apiCallReq = {
        method: 'get',
        url: 'static-content?name=services',
      }
      const {data: response} = await apiCall(apiCallReq);
      console.log('response of  fetchServicesContent => ', response);
      if(response.data.length) {
        this.setState({
          servicesContentArr: response.data.map(obj => {
            return {title: obj.title, description: obj.description, images: obj.images};
          })
        })
      }
    } catch(err) {
      console.log('err in fetchServicesContent => ', err);
    }
  }

  onImageChange = (event) =>  {
    let target = event.target;
    if(event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            console.log(target.dataset, target.name);
            let servicesContentArr = [...this.state.servicesContentArr];
            console.log(servicesContentArr[target.dataset.id][target.name]);
            servicesContentArr[target.dataset.id][target.name] = [...servicesContentArr[target.dataset.id][target.name], e.target.result];
            this.setState({ servicesContentArr });
        }
        reader.readAsDataURL(event.target.files[0]);
    }
  }

  onHandleChange = (e) => {
    if(["title", "description"].includes(e.target.name)) {
      let servicesContentArr = [...this.state.servicesContentArr];
      servicesContentArr[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ servicesContentArr });
    }
  }

  onRemoveImage = (index, subIndex) => {
    let servicesContentArr = [...this.state.servicesContentArr];
    servicesContentArr[`${index}`]["images"].splice(subIndex, 1);
    this.setState({ servicesContentArr });
  }

  addSection = () => {
    let servicesContentArr = [...this.state.servicesContentArr];
    servicesContentArr.push( {
      title: "",
      description: "",
      images: []
    });
    this.setState({ servicesContentArr });
  }

  removeSection = (index) => {
    let servicesContentArr = [...this.state.servicesContentArr];
    servicesContentArr.splice(index, 1);
    this.setState({ servicesContentArr }); 
  }

  addContent = async () => {
    try {
      let arr = this.state.servicesContentArr.filter(obj => (!obj.title.trim() || !obj.description.trim()) );
      if(!arr.length) {
        let reqPayload = {
          name: "Services",
          sections: this.state.servicesContentArr.map((obj, i) => {
            obj.mainSection = (i==0 ? true : false);
            return obj;
          })
        }
        let apiCallReq = {
          method: 'post',
          url: 'static-content',
          data: reqPayload
        }
        const {data: response} = await apiCall(apiCallReq);
        toast.success(response.message);
        window.history.back();
      }
    } catch(err) {
      console.log('err in addContent => ', err);
      toast.error('Something went wrong');
    }
  }

  goBack = () => {
    window.history.back();
  }

  render() {
    let {servicesContentArr} = this.state;
    return (
      <div>
        <DashboardHeader />
        <div className="products-content-container container">
          <div className="row">
            <ContentForm 
              name="Services"
              contentArr={servicesContentArr}
              onHandleChange={this.onHandleChange}
              onRemoveImage={this.onRemoveImage}
              onImageChange={this.onImageChange}
              addSection={this.addSection}
              removeSection={this.removeSection}
              addContent={this.addContent}
              goBack={this.goBack}
            />
            </div >
        </div >
      </div >

    );
  }
}

export default ServicesContent;
