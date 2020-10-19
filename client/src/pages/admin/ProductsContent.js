import React, { Component, createRef } from "react";
import DashboardHeader from "./DashboardHeader";
import ContentForm from "../../components/admin/ContentForm";
import { apiCall } from "../../helpers/api-call";
import { toast } from 'react-toastify';

class ProductsContent extends Component {
  
  state = {
    productsContentArr: [
      {
        title: "",
        description: "",
        images: []
      }
    ]
  }

  constructor() {
    super();
  }

  componentDidMount() {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      this.props.history.push("/login");
      return;
    }
    window.scrollTo(0, 0);
    this.fetchProductContent();
  }

  fetchProductContent = async () => {
    try {
      let apiCallReq = {
        method: 'get',
        url: 'static-content?name=products',
      }
      const {data: response} = await apiCall(apiCallReq);
      console.log('response of  fetchProductContent => ', response);
      if(response.data.length) {
        this.setState({
          productsContentArr: response.data.map(obj => {
            return {title: obj.title, description: obj.description, images: obj.images};
          })
        })
      }
    } catch(err) {
      console.log('err in fetchProductContent => ', err);
    }
  }

  onImageChange = (event) =>  {
    let target = event.target;
    if(event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            let productsContentArr = [...this.state.productsContentArr];
            productsContentArr[target.dataset.id][target.name] = [...productsContentArr[target.dataset.id][target.name], e.target.result];
            this.setState({ productsContentArr });
        }
        reader.readAsDataURL(event.target.files[0]);
    }
  }

  onHandleChange = (e) => {
    if(["title", "description"].includes(e.target.name)) {
      let productsContentArr = [...this.state.productsContentArr];
      productsContentArr[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ productsContentArr });
    }
  }

  onRemoveImage = (index, subIndex) => {
    let productsContentArr = [...this.state.productsContentArr];
    productsContentArr[`${index}`]["images"].splice(subIndex, 1);
    this.setState({ productsContentArr });
  }

  addSection = () => {
    let productsContentArr = [...this.state.productsContentArr];
    productsContentArr.push( {
      title: "",
      description: "",
      images: []
    });
    this.setState({ productsContentArr }, () => console.log(this.state.productsContentArr));
  }

  removeSection = (index) => {
    let productsContentArr = [...this.state.productsContentArr];
    productsContentArr.splice(index, 1);
    this.setState({ productsContentArr }, () => console.log(this.state.productsContentArr)); 
  }

  addProductContent = async () => {
    try {
      let arr = this.state.productsContentArr.filter(obj => (!obj.title.trim() || !obj.description.trim()) );
      if(!arr.length) {
        let reqPayload = {
          name: "Products",
          sections: this.state.productsContentArr.map((obj, i) => {
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
      console.log('err in addProductContent => ', err);
      toast.error('Something went wrong');
    }
    
  }

  goBack = () => {
    window.history.back();
  }

  render() {
    let {productsContentArr} = this.state;
    return (
      <div>
        <DashboardHeader />
        <div className="products-content-container container">
          <div className="row">
            <ContentForm 
              name="Products"
              contentArr={productsContentArr}
              onHandleChange={this.onHandleChange}
              onRemoveImage={this.onRemoveImage}
              onImageChange={this.onImageChange}
              addSection={this.addSection}
              removeSection={this.removeSection}
              addContent={this.addProductContent}
              goBack={this.goBack}
            />
            </div >
        </div >
      </div >

    );
  }
}

export default ProductsContent;
