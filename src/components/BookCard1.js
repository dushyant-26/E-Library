import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';
const BookCard1 = ({
  thumbnail,
  title,
  pageCount,
  language,
  description,
  authors,
  publisher,
  previewLink
}) => {
  // States
  let author = (authors) ? authors : 'Unknown';
  let publish = (publisher) ? publisher : 'Unknown';
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Card style={{ width: '233px' }} className='m-auto my-3 abc'>
      <CardImg
        top
        style={{ width: '100%', height: '233px' }}
        src={thumbnail}
        alt={title}
      />
      <CardBody>
        <CardTitle className='card-title'>{title}</CardTitle>
        <Button className="mx-5 stretched-link button" onClick={toggle}>More info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
          <button
            aria-label='Close'
            className='close'
            type='button'
            onClick={toggle}
          >
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-left ml-3'>
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div className="ms-3">
              <p>Page Count: {pageCount}</p>
              <p>Language : {language}</p>
              <p>Authors : {author}</p>
              <p>Publisher : {publish}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
        <div className='modal-footer'>
          <div className='left-silde'>
            <a
              href={previewLink}
              className=' btn button float-left'
              color='default'
              type='button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview Link
            </a>
          </div>
          <div className='divider'></div>
          <div className='right-silde'>
            <a
              href='/pay'
              className='btn button'
              color='default'
              type='button'
              target='_self'
              rel='noopener noreferrer'
            >
              Buy Subscription
            </a>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default BookCard1;