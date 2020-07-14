import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../shared/Button";
import { getUniversitiesDetails, getEducationDetails } from "../../../actions";
import { mainState, educationData } from "../../../interfaces/type";
import PopupModal from "../../../shared/Modal";
import { history } from "../../../other/history";
import "../../styles.css";
import ModalPopup from "./ModalPopup";

const mapDispatchToProps = {
    getEducationDetails,
    getUniversitiesDetails
};

const mapStateToProps = (state: mainState) => ({
    universities: state.educations.universities,
    educations: state.educations.data,
    details: state.users
});

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const Dashboard: React.FC<Props> = (props: Props) => {
    const [isModalOpen, setModalPopupToggle] = useState<boolean>(false);

    const logout = () => {
        history.push('/');
    }

    const togglePopup = () => {
        setModalPopupToggle(!isModalOpen)
    }

    return (
        <div>
            <div className='row m-3'>
                <div className='col-lg-12 intro'>
                    <div>
                        <h5>Hello {props.details.name}</h5>
                    </div>
                    <div>
                        <Button onClick={togglePopup}>Add Details</Button>
                        <PopupModal isOpen={isModalOpen} onBackgroundClick={togglePopup} onEscapeKeydown={togglePopup} >
                            <ModalPopup handleToggle={togglePopup} getEducationDetails={props.getEducationDetails} universities={props.universities} getUniversities={props.getUniversitiesDetails} />
                        </PopupModal>
                        <Button onClick={logout}>Logout</Button>
                    </div>
                </div>
            </div>
            <div className='row m-3'>
                <div className='col-lg-12'>
                    {props.educations && props.educations.length === 0 &&
                        <div className="row p-3 text-left education-details">
                            <p>Please add Your Educational Details by clicking on Add Details</p>
                        </div>
                    }
                    {props.educations && props.educations.length > 0 && props.educations.map((education: educationData, index) => (
                        <div key={index} className='tabs education-details text-left ml-2'>
                            <h5 className="text-center">{`${props.details.name}'s Education Details`}</h5>
                            <div className="row">
                                <div className='col-lg-6'>
                                    <label><strong>University Name: </strong> {education.university}</label>
                                </div>
                                <div className='col-lg-6'>
                                    <label><strong>Started Education in: </strong> {education.startDate && education.startDate.toDateString()}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-lg-6'>
                                    <label><strong>Continued Till: </strong> {education.endDate && education.endDate.toDateString()}</label>
                                </div>
                                <div className='col-lg-6'>
                                    <label><strong>Field: </strong> {education.field}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-lg-6'>
                                    <label><strong>Degree: </strong> {education.degree}</label>
                                </div>
                                <div className='col-lg-6'>
                                    <label><strong>Grade: </strong> {education.grade} grade</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-lg-6'>
                                    <label><strong>Educational Description: </strong> {education.description}</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
