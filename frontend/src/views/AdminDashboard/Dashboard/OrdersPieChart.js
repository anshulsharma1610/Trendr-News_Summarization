import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const pieOptions = {
    chart: {
        type: 'donut',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

const getLast6MonthsNames = () => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const currentDate = new Date();
    const last6Months = [];

    for (let i = 0; i < 6; i++) {
        const monthIndex = (currentDate.getMonth() - i + 12) % 12; // Handle wrapping around to the previous year
        const monthName = months[monthIndex];
        last6Months.push(monthName);
    }

    return last6Months.reverse(); // Reverse the array to have the most recent month first
};

const OrdersPieChart = (props) => {
    console.log('===', props)
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const warning = theme.palette.warning.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;

    const [purchases] = useState([15, 24, 62, 45, 122, 80]);

    const [options, setOptions] = useState(pieOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            labels: getLast6MonthsNames(),
            options: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        }))
    }, [primary, secondary, line, warning, primaryMain, successDark]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={purchases} type="donut" />
        </div>
    );
}

OrdersPieChart.propTypes = {

};

export default OrdersPieChart;