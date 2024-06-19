import { Chart as ChartJS, ArcElement, PointElement, LineElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import './InvestmentPortfolio.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import orders from './orders.json';
ChartJS.register(ArcElement, PointElement, LineElement, Tooltip, Legend, CategoryScale, LinearScale);

export default function InvestmentPortfolio() {
  const data = {
    labels: ["QQQ"  ,"TQQQ"  ,"META"  ,"VOO"  ,"IJR"  ,"CCL"  ,"TSLA"  ,"ARKK"],
    datasets: [
      {
        label: 'Security',
        data: [33.7, 24.4, 14.0, 15.9, 3.2, 1.1, 5.8, 1.8],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidTableCell: 1,
      },
    ],
  };
  const lineData = {
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  const tableData = [
    { security: 'TSLA', shareNum: '5', costBasis: '240', price: '150', percentageChange: '-50%' },
    { security: 'TTCF', shareNum: '5', costBasis: '240', price: '150', percentageChange: '-50%' },
    { security: 'PLTR', shareNum: '5', costBasis: '240', price: '150', percentageChange: '-50%' },
  ];

  return (
    
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='mb-3'>Hover for exact percentages</div>  
      <Doughnut data={data} className="PieChart" />
      {/* <h2>I like investing in stocks. Here's all my orders since July 1, 2020.</h2>
      <h5>I'll add a full breakdown when I have time to build it.</h5>
      <h5>Hey and btw, this is all non-split adjusted. I just take what my brokerage gives me and turn it into JSON, don't @ me please.</h5>
      <div className="row justify-content-center mt-5">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Security</TableCell>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Ticker</TableCell>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Quantity</TableCell>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>OrderType</TableCell>
                <TableCell sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow key={row.ticker} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Date">
                    {row.date}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Security">
                    {row.security}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Ticker">
                    {row.ticker}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Quantity">
                    {row.quantity}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit', backgroundColor: `${row.orderType === 'BUY' ? 'lightgreen' : 'pink'}` }} label="Order Type">
                    {row.orderType}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Price">
                    ${parseFloat(row.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> */}
      {/* <div className="row justify-content-center mt-5">
        <div className="col-lg-6 d-flex justify-content-center">
          <Doughnut data={data} className="PieChart" />
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <Line data={lineData} className="PieChart" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead aria-label="simple table">
                <TableRow>
                  <TableCell>Security</TableCell>
                  <TableCell>Number of Shares</TableCell>
                  <TableCell>Cost Basis</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total Percentage Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.security} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Security">
                      {row.security}
                    </TableCell>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Number of Shares">
                      {row.shareNum}
                    </TableCell>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Cost Basis">
                      {row.costBasis}
                    </TableCell>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Price">
                      {row.price}
                    </TableCell>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Total Percentage Change">
                      {row.percentageChange}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div> */}
    </div>
  );
}
