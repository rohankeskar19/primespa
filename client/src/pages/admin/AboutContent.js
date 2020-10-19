import React, { Component } from "react";
import DashboardHeader from "./DashboardHeader";
import ContentForm from "../../components/admin/ContentForm";
import { apiCall } from "../../helpers/api-call";
import { toast } from 'react-toastify';

class AboutContent extends Component {
  
  state = {
    aboutContentArr: [
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
    this.fetchAboutContent();
  }

  fetchAboutContent = async () => {
    try {
      let apiCallReq = {
        method: 'get',
        url: 'static-content?name=about',
      }
      const {data: response} = await apiCall(apiCallReq);
      console.log('response of  fetchAboutContent => ', response);
      if(response.data.length) {
        this.setState({
          aboutContentArr: response.data.map(obj => {
            return {title: obj.title, description: obj.description, images: obj.images};
          })
        })
      }
    } catch(err) {
      console.log('err in fetchAboutContent => ', err);
    }
  }

  onImageChange = (event) =>  {
    let target = event.target;
    if(event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            console.log(target.dataset, target.name);
            let aboutContentArr = [...this.state.aboutContentArr];
            console.log(aboutContentArr[target.dataset.id][target.name]);
            aboutContentArr[target.dataset.id][target.name] = [...aboutContentArr[target.dataset.id][target.name], e.target.result];
            this.setState({ aboutContentArr });
        }
        reader.readAsDataURL(event.target.files[0]);
    }
  }

  onHandleChange = (e) => {
    if(["title", "description"].includes(e.target.name)) {
      let aboutContentArr = [...this.state.aboutContentArr];
      aboutContentArr[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ aboutContentArr });
    }
  }

  onRemoveImage = (index, subIndex) => {
    let aboutContentArr = [...this.state.aboutContentArr];
    aboutContentArr[`${index}`]["images"].splice(subIndex, 1);
    this.setState({ aboutContentArr });
  }

  addSection = () => {
    let aboutContentArr = [...this.state.aboutContentArr];
    aboutContentArr.push( {
      title: "",
      description: "",
      images: []
    });
    this.setState({ aboutContentArr });
  }

  removeSection = (index) => {
    let aboutContentArr = [...this.state.aboutContentArr];
    aboutContentArr.splice(index, 1);
    this.setState({ aboutContentArr }); 
  }

  addAboutContent = async () => {
    try {
      let arr = this.state.aboutContentArr.filter(obj => (!obj.title.trim() || !obj.description.trim()) );
      if(!arr.length) {
        let reqPayload = {
          name: "About",
          sections: this.state.aboutContentArr.map((obj, i) => {
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
      console.log('err in addAboutContent => ', err);
      toast.error('Something went wrong');
    }
    
  }

  goBack = () => {
    window.history.back();
  }

  render() {
    let {aboutContentArr} = this.state;
    return (
      <div>
        <DashboardHeader />
        <div className="products-content-container container">
          <div className="row">
            <ContentForm 
              name="About"
              contentArr={aboutContentArr}
              onHandleChange={this.onHandleChange}
              onRemoveImage={this.onRemoveImage}
              onImageChange={this.onImageChange}
              addSection={this.addSection}
              removeSection={this.removeSection}
              addContent={this.addAboutContent}
              goBack={this.goBack}
            />
            </div >
        </div >
      </div >

    );
  }
}

export default AboutContent;
