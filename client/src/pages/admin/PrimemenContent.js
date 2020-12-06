import React, { Component } from "react";
import DashboardHeader from "./DashboardHeader";
import ContentForm from "../../components/admin/ContentForm";
import { apiCall } from "../../helpers/api-call";
import { toast } from "react-toastify";

class PrimemenContent extends Component {
  state = {
    primemenContentArr: [
      {
        title: "",
        description: "",
        images: [],
      },
    ],
  };

  componentDidMount() {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      this.props.history.push("/login");
      return;
    }
    window.scrollTo(0, 0);
    this.fetchContent();
  }

  fetchContent = async () => {
    try {
      let apiCallReq = {
        method: "get",
        url: "static-content?name=primemen",
      };
      const { data: response } = await apiCall(apiCallReq);
      if (response.data.length) {
        this.setState({
          primemenContentArr: response.data.map((obj) => {
            return {
              title: obj.title,
              description: obj.description,
              images: obj.images,
            };
          }),
        });
      }
    } catch (err) {
      console.log("err in fetchContent => ", err);
    }
  };

  onImageChange = (event) => {
    let target = event.target;
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let primemenContentArr = [...this.state.primemenContentArr];
        primemenContentArr[target.dataset.id][target.name] = [
          ...primemenContentArr[target.dataset.id][target.name],
          e.target.result,
        ];
        this.setState({ primemenContentArr });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  onHandleChange = (e) => {
    if (["title", "description"].includes(e.target.name)) {
      let primemenContentArr = [...this.state.primemenContentArr];
      primemenContentArr[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ primemenContentArr });
    }
  };

  onRemoveImage = (index, subIndex) => {
    let primemenContentArr = [...this.state.primemenContentArr];
    primemenContentArr[`${index}`]["images"].splice(subIndex, 1);
    this.setState({ primemenContentArr });
  };

  addSection = () => {
    let primemenContentArr = [...this.state.primemenContentArr];
    primemenContentArr.push({
      title: "",
      description: "",
      images: [],
    });
    this.setState({ primemenContentArr });
  };

  removeSection = (index) => {
    let primemenContentArr = [...this.state.primemenContentArr];
    primemenContentArr.splice(index, 1);
    this.setState({ primemenContentArr });
  };

  addContent = async () => {
    try {
      let arr = this.state.primemenContentArr.filter(
        (obj) => !obj.title.trim() || !obj.description.trim()
      );
      if (!arr.length) {
        let reqPayload = {
          name: "Primemen",
          sections: this.state.primemenContentArr.map((obj, i) => {
            obj.mainSection = i == 0 ? true : false;
            return obj;
          }),
        };
        let apiCallReq = {
          method: "post",
          url: "static-content",
          data: reqPayload,
        };
        const { data: response } = await apiCall(apiCallReq);
        toast.success(response.message);
        window.history.back();
      }
    } catch (err) {
      console.log("err in addContent => ", err);
      toast.error("Something went wrong");
    }
  };

  goBack = () => {
    window.history.back();
  };

  render() {
    let { primemenContentArr } = this.state;
    return (
      <div>
        <DashboardHeader />
        <div className="products-content-container container">
          <div className="row">
            <ContentForm
              name="Primemen"
              contentArr={primemenContentArr}
              onHandleChange={this.onHandleChange}
              onRemoveImage={this.onRemoveImage}
              onImageChange={this.onImageChange}
              addSection={this.addSection}
              removeSection={this.removeSection}
              addContent={this.addContent}
              goBack={this.goBack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PrimemenContent;
