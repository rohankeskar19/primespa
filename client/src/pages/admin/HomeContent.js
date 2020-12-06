import React, { Component } from "react";
import DashboardHeader from "./DashboardHeader";
import ContentForm from "../../components/admin/ContentForm";
import { apiCall } from "../../helpers/api-call";
import { toast } from "react-toastify";

class HomeContent extends Component {
  state = {
    homeContentArr: [
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
    this.fetchHomeContent();
  }

  fetchHomeContent = async () => {
    try {
      let apiCallReq = {
        method: "get",
        url: "static-content?name=home",
      };
      const { data: response } = await apiCall(apiCallReq);
      if (response.data.length) {
        this.setState({
          homeContentArr: response.data.map((obj) => {
            return {
              title: obj.title,
              description: obj.description,
              images: obj.images,
            };
          }),
        });
      }
    } catch (err) {
      console.log("err in fetchHomeContent => ", err);
    }
  };

  onImageChange = (event) => {
    let target = event.target;
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let homeContentArr = [...this.state.homeContentArr];
        homeContentArr[target.dataset.id][target.name] = [
          ...homeContentArr[target.dataset.id][target.name],
          e.target.result,
        ];
        this.setState({ homeContentArr });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  onHandleChange = (e) => {
    if (["title", "description"].includes(e.target.name)) {
      let homeContentArr = [...this.state.homeContentArr];
      homeContentArr[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ homeContentArr });
    }
  };

  onRemoveImage = (index, subIndex) => {
    let homeContentArr = [...this.state.homeContentArr];
    homeContentArr[`${index}`]["images"].splice(subIndex, 1);
    this.setState({ homeContentArr });
  };

  addSection = () => {
    let homeContentArr = [...this.state.homeContentArr];
    homeContentArr.push({
      title: "",
      description: "",
      images: [],
    });
    this.setState({ homeContentArr });
  };

  removeSection = (index) => {
    let homeContentArr = [...this.state.homeContentArr];
    homeContentArr.splice(index, 1);
    this.setState({ homeContentArr });
  };

  addHomeContent = async () => {
    try {
      let arr = this.state.homeContentArr.filter(
        (obj) => !obj.title.trim() || !obj.description.trim()
      );
      if (!arr.length) {
        let reqPayload = {
          name: "Home",
          sections: this.state.homeContentArr.map((obj, i) => {
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
      console.log("err in addHomeContent => ", err);
      toast.error("Something went wrong");
    }
  };

  goBack = () => {
    window.history.back();
  };

  render() {
    let { homeContentArr } = this.state;
    return (
      <div>
        <DashboardHeader />
        <div className="products-content-container container">
          <div className="row">
            <ContentForm
              name="Home"
              contentArr={homeContentArr}
              onHandleChange={this.onHandleChange}
              onRemoveImage={this.onRemoveImage}
              onImageChange={this.onImageChange}
              addSection={this.addSection}
              removeSection={this.removeSection}
              addContent={this.addHomeContent}
              goBack={this.goBack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
