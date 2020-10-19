import React from "react";

function ContentForm(props) {
    let { contentArr } = props;
    return (
        <div className="panel">
            <div className="panel-heading prod-header">
                <h4 className="card-title">{props.name}</h4>
            </div>
            <div className="panel-body">
                <form className="formBox max-WT-600 center-box" noValidate autoComplete="off">
                    {
                        contentArr.map((contentSection, index) => (
                            <div className="row form-box-row" key={index}>
                                <div className="col-md-12 " >
                                    <div className="form-group horizontalGroup display-property">
                                        <label className="control-label" >Title</label>
                                        <input className="form-control" type="text" name="title" placeholder="Title" data-id={index} value={contentSection.title} onChange={props.onHandleChange} />
                                        {/* <div class="errMsg ">
                                                <span>*Please select market type.</span>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-12 " >
                                    <div className="form-group horizontalGroup display-property">
                                        <label className="control-label" >Description</label>
                                        <textarea className="form-control" name="description" placeholder="Description" rows="10" data-id={index} value={contentSection.description} onChange={props.onHandleChange} />
                                    </div>
                                </div>
                                <div className="col-md-12" >
                                    <div className="form-group horizontalGroup">
                                        <label className="control-label">Images</label>
                                        <div className="containAllImg">
                                            {contentSection.images.map((img, subIndex) => (
                                                <div className="addMultImagesDiv mt5" key={subIndex}>
                                                    <span className="crossIconMult" onClick={() => props.onRemoveImage(index, subIndex)}>
                                                        <i className="fa fa-remove"></i>
                                                    </span>
                                                    <img src={img} alt="dsad" />
                                                </div>
                                            ))}
                                            <div className="addMultImgDiv mt5">
                                                <input type="file" name="images" accept="image/*" data-id={index} onChange={props.onImageChange} />
                                                <span className="spanMultIcon"><i className="fa fa-plus"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 plusicon-div">
                                    <span className="input-group-btn" >
                                        {
                                            (index + 1 == contentArr.length) &&
                                            (
                                                <button className="btn btn-success btn-add" type="button" onClick={props.addSection}>
                                                    <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                            )
                                        }
                                        {
                                            (index + 1 !== contentArr.length) && (
                                                <button className="btn btn-danger btn-remove" type="button" onClick={() => props.removeSection(index)}>
                                                    <span className="glyphicon glyphicon-minus"></span>
                                                </button>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                        ))

                    }
                    <div className="row form-box-row">
                        <div className="col-md-12 text-md-right">
                            <div className="form-group horizontalGroup ">
                                <label className="control-label"></label>
                                <div className="form-action-btn">
                                    <button type="button" className="btn btn-add minWidth100" onClick={props.addContent} >Save </button>
                                    <button type="button" className="btn btn-cancel minWidth100" onClick={props.goBack}>Cancel </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ContentForm;
