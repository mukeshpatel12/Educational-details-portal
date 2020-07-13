import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Button from "../../../../shared/Button";
import { ModalContent } from "../ModalContent";
import { getUniversitiesDetails, getEducationDetails } from "../../../../actions";
import { mainState, educationData } from "../../../../interfaces/type";
import PopupModal from "../../../../shared/Modal";
import { history } from "../../../../other/history";
import "../../styles.css";

const mapStateToProps = (state: mainState) => ({
    universities: state.educations.universities,
    educations: state.educations.data,
    details: state.users
});

const mapDispatchToProps = {
    getEducationDetails,
    getUniversitiesDetails
};

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const Dashboard: React.FC<Props> = (props: Props) => {
    const [isModalOpen, setToggle] = useState<boolean>(false);

    const togglePopup = () => {
        setToggle(!isModalOpen)
    }

    const logout = () => {
        history.push('/');
    }

    return (
        <>
            <div className='row m-3'>
                <div className='col-lg-12 mt-2 intro'>
                    <div>
                        <h6>Hello {props.details.name}</h6>
                    </div>
                    <div>
                        <Button onClick={togglePopup}>Add Details</Button>
                        <PopupModal
                            isOpen={isModalOpen}
                            onBackgroundClick={togglePopup}
                            onEscapeKeydown={togglePopup}
                        >
                            <ModalContent
                                universities={props.universities}
                                handleToggle={togglePopup}
                                getEducationDetails={props.getEducationDetails}
                                getUniversities={props.getUniversitiesDetails}
                            />
                        </PopupModal>
                        <Button onClick={logout}>Logout</Button>
                    </div>
                </div>
            </div>
            <div className='row m-3'>
                <div className='col-lg-12'>
                    {props.educations && props.educations.length === 0 &&
                        <div className="row p-3 text-left">
                            <p>Please add Your Educational Details</p>
                        </div>
                    }
                    {props.educations && props.educations.length > 0 && props.educations.map((education: educationData, index) => (
                        <div key={index} className='tabs text-left ml-2'>
                            <h6>{`${props.details.name}'s Education Details`}</h6>
                            <label>University Name: {education.university}</label>
                            <label>Started Education in: {education.startDate && education.startDate.toDateString()}</label>
                            <label>Continued Till: {education.endDate && education.endDate.toDateString()}</label>
                            <label>Field: {education.field}</label>
                            <label>Degree: {education.degree}</label>
                            <label>Grade: {education.grade} grade</label>
                            <label>Educational Description: {education.description}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
