import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Button, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rooms = ({ room }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.imageurls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? room.imageurls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full rounded-xl p-4 max-w-sm overflow-hidden shadow-lg m-4">
      <h2 className="text-lg font-bold bg-gray-800 text-white p-2 truncate">{room.name}</h2>
      <div className="relative flex-grow">
        <img src={room.imageurls[currentImageIndex]} alt="Room" className="w-full h-full object-cover" />
        <button onClick={handlePrevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={handleNextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="p-2 flex justify-between">
        <div>
          <p className="text-sm font-bold text-gray-800">Type: <span className="text-gray-600">{room.type}</span></p>
          <p className="text-sm font-bold text-gray-800">Max Capacity: <span className="text-gray-600">{room.maxcount}</span></p>
          <p className="text-sm font-bold text-gray-800">Rent: <span className="text-gray-600">Rs{room.rentperday}/bed</span></p>
        </div>
        <div>
          <Button onClick={handleShow} className="text-sm bg-gray-800 text-white rounded-md px-2 py-1 mt-2 mr-2 focus:outline-none">
            View Details
          </Button>
          <Link to={`/book/${room._id}`}>
            <Button className="text-sm bg-green-500 text-white rounded-md px-2 py-1 mt-2 focus:outline-none">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
             {
                room.imageurls.map((url)=>{
                  return <Carousel.Item key={Date.now()}>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    />
                  </Carousel.Item>
                })
             }
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Rooms;
