import React from "react";

export default function SideBar(props) {
    const { setShowModal, nasaData } = props;
    return (
        <section className="sidebar">
            <div className="overlay" onClick={() => setShowModal(false)}></div>
            <div className="sidebar-content">
                <div className="content">
                    <h4>{nasaData?.title}</h4>
                    <h5>{nasaData?.date}</h5>
                    <p>{nasaData?.explanation}</p>
                </div>
                <button onClick={() => setShowModal(false)}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
            </div>
        </section>
    );
}
