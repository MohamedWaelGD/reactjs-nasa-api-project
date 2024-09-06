import React from 'react'

export default function Footer(props) {
  const MAX_DESCRIPTION = 100;
  const { setShowModal, nasaData } = props;
  const description = nasaData?.explanation.length < 30 ? nasaData?.explanation : `${nasaData?.explanation.slice(0, MAX_DESCRIPTION)}...`
  return (
    <footer>
        <h5>{nasaData?.title}</h5>
        <div className='footer-description-wrapper'>
          <p>{description}</p>
          <button onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-circle-info"></i>
          </button>
        </div>
    </footer>
  )
}
