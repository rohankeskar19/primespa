import React, { Component } from "react";
import DashboardHeader from "./DashboardHeader";
import ContentForm from "../../components/admin/ContentForm";
import { apiCall } from "../../helpers/api-call";
import { toast } from "react-toastify";

class EventsPromotionContent extends Component {
  state = {
    eventsContentArr: [
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
        url: "static-content?name=events",
      };
      const { data: response } = await apiCall(apiCallReq);
      if (response.data.length) {
        this.setState({
          eventsContentArr: response.data.map((obj) => {
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
        let eventsContentArr = [...this.state.eventsContentArr];
        eventsContentArr[target.dataset.id][target.name] = [
          ...eventsContentArr[target.dataset.id][target.name],
          e.target.result,
        ];
        this.setState({ eventsContentArr });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  onHandleChange = (e) => {
    if (["title", "description"].includes(e.target.name)) {
      let eventsContentArr = [...this.state.eventsContentArr];
      eventsContentArr[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ eventsContentArr });
    }
  };

  onRemoveImage = (index, subIndex) => {
    let eventsContentArr = [...this.state.eventsContentArr];
    eventsContentArr[`${index}`]["images"].splice(subIndex, 1);
    this.setState({ eventsContentArr });
  };

  addSection = () => {
    let eventsContentArr = [...this.state.eventsContentArr];
    eventsContentArr.push({
      title: "",
      description: "",
      images: [],
    });
    this.setState({ eventsContentArr });
  };

  removeSection = (index) => {
    let eventsContentArr = [...this.state.eventsContentArr];
    eventsContentArr.splice(index, 1);
    this.setState({ eventsContentArr });
  };

  addContent = async () => {
    try {
      let arr = this.state.eventsContentArr.filter(
        (obj) => !obj.title.trim() || !obj.description.trim()
      );
      if (!arr.length) {
        let reqPayload = {
          name: "Events",
          sections: this.state.eventsContentArr.map((obj, i) => {
            obj.mainSection = false;
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
    let { eventsContentArr } = this.state;
    return (
      <div>
        <DashboardHeader />
        <div className="products-content-container container">
          <div className="row">
            <ContentForm
              name="Events & Promotions"
              contentArr={eventsContentArr}
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

export default EventsPromotionContent;
