import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';
import { useNavigate } from 'react-router-dom';
const flights = [
  {
    arrival: {
      arrivalTime: '2024-04-09 10:00',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-09 08:00',
      from: 'New York',
    },
    flightName: 'Flight 1',
    flightpicture: 'src/assets/a1.jpg',
    duration: '07 hours',
    price: 5500,
  },
  {
    arrival: {
      arrivalTime: '2024-04-09 15:30',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-09 13:30',
      from: 'New York',
    },
    flightName: 'Flight 2',
    flightpicture: 'src/assets/a3.jpg',
    duration: '14 hours',
    price: 7000,
  },
  {
    arrival: {
      arrivalTime: '2024-04-09 18:45',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-09 16:30',
      from: 'New York',
    },
    flightName: 'Flight 3',
    flightpicture: 'src/assets/a4.jpg',
    duration: '16 hours',
    price: 8000,
  },
  {
    arrival: {
      arrivalTime: '2024-04-09 07:00',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-09 04:45',
      from: 'New York',
    },
    flightName: 'Flight 4',
    flightpicture: 'src/assets/a5.jpg',
    duration: '10 hours',
    price: 6200,
  },
  {
    arrival: {
      arrivalTime: '2024-04-09 12:00',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-09 09:30',
      from: 'New York',
    },
    flightName: 'Flight 5',
    flightpicture: 'src/assets/a6.jpg',
    duration: '15 hours',
    price: 7505,
  },

  {
    arrival: {
      arrivalTime: '2024-04-09 20:00',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-09 08:00',
      from: 'New York',
    },
    flightName: 'Flight 6',
    flightpicture: 'src/assets/a7.jpg',
    duration: '12 hours',
    price: 3500,
  },
  {
    arrival: {
      arrivalTime: '2024-04-10 14:30',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-10 09:00',
      from: 'New York',
    },
    flightName: 'Flight 7',
    flightpicture: 'src/assets/a8.jpg',
    duration: '10 hours',
    price: 6000,
  },
  {
    arrival: {
      arrivalTime: '2024-04-11 07:45',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-10 18:00',
      from: 'New York',
    },
    flightName: 'Flight 8',
    flightpicture: 'src/assets/a9.jpg',
    duration: '15 hours',
    price: 7500,
  },
  {
    arrival: {
      arrivalTime: '2024-04-11 23:20',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-11 10:30',
      from: 'New York',
    },
    flightName: 'Flight 9',
    flightpicture: 'src/assets/a10.jpg',
    duration: '13 hours',
    price: 6800,
  },
  {
    arrival: {
      arrivalTime: '2024-04-12 06:10',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-11 21:15',
      from: 'New York',
    },
    flightName: 'Flight 10',
    flightpicture: 'src/assets/a11.jpg',
    duration: '08 hours',
    price: 5100,
  },
  {
    arrival: {
      arrivalTime: '2024-04-12 09:45',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-12 02:30',
      from: 'New York',
    },
    flightName: 'Flight 11',
    flightpicture: 'src/assets/a12.jpg',
    duration: '08 hours',
    price: 5200,
  },
  {
    arrival: {
      arrivalTime: '2024-04-13 03:20',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-12 16:45',
      from: 'New York',
    },
    flightName: 'Flight 12',
    flightpicture: 'src/assets/a13.jpg',
    duration: '11 hours',
    price: 5700,
  },
  {
    arrival: {
      arrivalTime: '2024-04-13 17:00',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-13 05:30',
      from: 'New York',
    },
    flightName: 'Flight 13',
    flightpicture: 'src/assets/a14.jpg',
    duration: '16 hours',
    price: 8000,
  },
  {
    arrival: {
      arrivalTime: '2024-04-14 08:40',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-13 19:15',
      from: 'New York',
    },
    flightName: 'Flight 14',
    flightpicture: 'src/assets/A15.jpg',
    duration: '14 hours',
    price: 7000,
  },
  {
    arrival: {
      arrivalTime: '2024-04-14 12:15',
      to: 'Paris',
    },
    departure: {
      departureTime: '2024-04-14 02:30',
      from: 'New York',
    },
    flightName: 'Flight 15',
    flightpicture: 'src/assets/a1.jpg',
    duration: '08 hours',
    price: 5500,
  },
];

const rows = flights.map((flight, index) => ({
  id: index + 1,
  flightInfo: {
    flightName: flight.flightName,
    flightpicture: flight.flightpicture,

    departureTime: flight.departure.departureTime,
    from: flight.departure.from,
  },
  arrivalInfo: {
    arrivalTime: flight.arrival.arrivalTime,
    to: flight.arrival.to,
  },
  duration: flight.duration,
  price: flight.price,
}));

const sortingDeparture = (v1, v2, param1) => {
  const date1 = new Date(v1.departureTime);
  const date2 = new Date(v2.departureTime);
  return param1.sortingOrder === 'asc' ? date2 - date1 : date1 - date2;
};

const sortingArrival = (v1, v2, param1) => {
  const date1 = new Date(v1.arrivalTime);
  const date2 = new Date(v2.arrivalTime);
  return param1.sortingOrder === 'asc' ? date2 - date1 : date1 - date2;
};

const columns = [
  {
    field: 'flightInfo',
    headerName: 'Departure',
    renderCell: (data) => (
      <div>
        <img
          src={data?.value?.flightpicture}
          alt="Flight"
          style={{ width: '50px', height: '50px' }}
        />
        <span> {data?.value?.flightName}</span>

        <div>
          <span> {data?.value?.from}</span>
          <p style={{ fontWeight: '600' }}>{data?.value?.departureTime}</p>
        </div>
      </div>
    ),
    width: 250,
    sortable: true,
    sortComparator: sortingDeparture,
  },

  {
    field: 'arrivalInfo',
    headerName: 'Arrival',
    renderCell: (data) => (
      <div className="mt-4">
        <span> {data?.value?.to}</span>
        <div>
          <span style={{ fontWeight: '600' }}>{data?.value?.arrivalTime}</span>
        </div>
      </div>
    ),
    width: 250,
    sortable: true,
    sortComparator: sortingArrival,
  },
  { field: 'duration', headerName: 'Duration', width: 250 },
  {
    field: 'price',
    headerName: 'Price',

    renderCell: (data) => (
      <div className="d-flex justify-content-center mydiv">
        {' '}
        ₹{data?.value}{' '}
        <div>
          <button className="button-properties">Book</button>
        </div>
      </div>
    ),

    width: 250,
  },
];

export default function Data() {
  const navigate = useNavigate();
  const getRowSpacing = React.useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 10,
      bottom: params.isLastVisible ? 0 : 10,
    };
  }, []);

  const logout = () => {
    console.log('log call');
    localStorage.removeItem('login');

    navigate('/');
  };

  return (
    <div className="container">
      <box
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DataGrid
          getRowSpacing={getRowSpacing}
          rows={rows}
          columns={columns.map((column) => ({
            ...column,
            headerClassName: 'header-bold',
            disableColumnMenu: true,
          }))}
          getRowHeight={() => 'auto'}
          hideFooterPagination
          hideFooterSelectedRowCount
          sx={{
            '  & .MuiDataGrid-columnHeaderTitle': {
              fontSize: '16px',
              fontWeight: '600',
              textAlign: 'center',
            },
            '& .MuiDataGrid-cell': {
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Arial',
              fontSize: '14px',
              textAlign: 'left',
            },
            '& .MuiDataGrid-row': {
              backgroundColor: 'white',
            },
            '& .MuiDataGrid-scrollbar': {
              overflowY: 'hidden',
            },
          }}
        />
      </box>
      <div className="pos">
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
}
